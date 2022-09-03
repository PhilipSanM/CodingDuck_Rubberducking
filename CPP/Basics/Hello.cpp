/********************************
* Hello.cpp
*
*   Code used for init in the world of cpp
*
* PhilipSanM
*
* Compilation: g++ Hello.cpp -o test
 * ******************************/


#include<iostream>

using namespace std; // Using the entire std namespace

int main(){
    cout << "Hello";
    cout << " World" << endl;
    cout << "Have a nice day\n";
    int num1;
    int num2;
    double num3;

    //**** INT NUMBERS ***
    // You can also add the numbers in the keyboard like:  10 34 or 23             1324
    // Because there is a buffer that reads all of that
    // cout << "Enter an interger pls: ";
    // cin >> num1;
    // cout << "Enter a second interger pls: ";
    // cin >> num2;
    // cout << "U entered: "<< num1 << " and "<<num2 << endl;

    //**** DOUBLE ***
    // cout << "Enter a double"<< endl;
    // cin >> num3;
    // cout << "U entered: "<< num3 <<endl;

    // LOOK AT THIS!!
    //If you insert:   10   34.6    its OK, but
    // If you insert 10.5   it will be like this
    cout << "Enter an interger pls: ";
    cin >> num1;  //10
    cout << "Enter a double pls: ";
    cin >> num3;  // 0.5
    cout << "U entered: "<< num1 << " and "<<num3 << endl;



    return 0;
}

