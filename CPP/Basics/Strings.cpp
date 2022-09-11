#include <bits/stdc++.h>

using namespace std;

int main(int argc, char const *argv[])
{
    // Declaration of string:
    // string STR_NAME;
    string s1; //empty string
    string s2 {"Hello"}; // Hello   
    string s3 {s2}; // Hello this is a copy of s2
    string s4 {"Hello", 3}; // Hel this mean first 3 char of Hello
    string s5 {s2, 0, 3}; // Hel This mean 0 is starting index and 3 is length
    string s6 (5, 'A'); // AAAAA
    //

    // Also you can initialize string with cin
    s1 = "Hello";

    // CONCATENATION

    string part1 {"C++"};
    string part2 {"Programming"};
    string sentence;

    sentence = part1 + " " + part2 + " is fun \0";
    //Also you can work as it is a array or a vector
    cout << sentence[0] << endl; // C
    cout << sentence.at(0) << endl; // C

    // Using ranged-base
    for(auto c: sentence)
        cout << c << endl;

    // COMPARING
    cout << "Comparando" << endl;
    string s7 {"Apple"};
    string s8 {"Banana"};
    string s9 {"Kiwi"};
    string s10 {"apple"};
    string s11 {s1};

    // s7 == s8; //true
    // s7 == s8; //False
    // s7 != s8; // true   The first letter in ASSII order
    // s7 < s8; // true
    // s8 > s7; //true
    // s10 < s11; // false
    // s7 == "Apple"; // true

    // +++++++++++++++++++++++++++++++++++++++++
    // Extracts a substring from a std::string
    // DECLARATION
    // object.substr(start_index, length);
    // 
    string s12 {"This is a test"};
    cout << s12.substr(0,4); //This
    cout << s12.substr(5,2); //is
    cout << s12.substr(10,4); //test

    // ===========================================
    // find --- Returns the index of a substring
    // object.find(search_string);

    cout << s12.find("This"); // 0
    cout << s12.find("is"); // 2
    cout << s12.find('e'); // 11
    // Also you can add the index  where u want to start
    cout << s12.find("is",4); //5

    // ------------------------
    // REMOVING CHARACTERS
    // object.erase(start_index, length)

    cout << endl << s12.erase(0,5) << endl; // is a test
    cout << s12 << endl; // is a test
    cout << s12.erase(5,4) << endl; // is a
    s12.clear();// empty string s12

    // ====================================================
    // Useful m[ethods
    string s13 {"Frank"};
    cout << s13.length() << endl; // 5

    s13 += " James";
    cout << s13 << endl;


    //==========================================
    // getline();
    string s14;
    cin >> s14; // hello there

    cout << s14 << endl; // hello

    getline(cin, s14); // Read entire line until \n
    cout << s14 << endl; // hello there

    getline(cin,s14,'x'); // this isx
    cout << s14 << endl; // this is



    return 0;
}
