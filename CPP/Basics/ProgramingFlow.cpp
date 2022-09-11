#include <bits/stdc++.h>

using namespace std;

int main(int argc, char const *argv[])
{
    // RANGED-BASED FOR LOOP

    // This is a new feature in C++11
    // This is a for loop that can be used to iterate over a range of values

    int scores[] {100, 95, 89, 68, -1};
    for (int score : scores)
    {
        cout << score << endl;
    }// 100 95 89 68 -1

    // Auto keyword
    // This is a new feature in C++11
    // This is a keyword that can be used to let the compiler figure out the type of a variable

    for(auto score: scores){
        cout << score <<endl;

    }
    //100
    //95
    //89
    //68
    //-1

    //With Vector

    vector <double > temps {87.2, 77.1, 80.0, 72.5};
    double average_temp {};
    double running_sum {};
    int size {0};

    for (auto temp: temps)
        running_sum += temp;
        // ++size;
    average_temp = running_sum / temps.size();

    cout << "The average is: " << average_temp<< endl;

    // for strings
    for(auto c: "frank")
        cout << c;
    return 0;
}
