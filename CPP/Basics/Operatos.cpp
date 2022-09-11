#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[])
{
    /*******
     * CAST
     * ******/
    int total_amount {100};
    int total_number {8};

    double average {0.0};

    average = total_amount/total_number;
    cout << "Average is: " << average << endl; // displays 12

    average = static_cast<double>(total_amount) / total_number; // displays 12.5
    // old cast:
    // average = (double)total_amount / total_number;
    cout << average << endl;


    return 0;
}
