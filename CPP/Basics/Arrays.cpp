#include <bits/stdc++.h>

using namespace std;

int main(int argc, char const *argv[])
{
    /*************
     * Arrays
     *************/
    
    //Declarin an array:
    // Element_Type array_name[size];

    // also we can initialize the array:
    // Element_Type array_name[size] {value1, value2, value3, ...};

    int test_scores[5] {100, 98, 89, 86, 55};
    cout << "First score at index 0: " << test_scores[0] << endl;

    int high_score[5] {3,5}; // init to 3,5 and remining to 0

    const int days_in_year {365};
    double hit_temperature [days_in_year] {0.0}; // init all to 0.0

    // Whitohut size:
    char vowels[] {'a','e','i','o','u'}; //  initializate the array with [5]

    cout << "\nThe first vowel is: " << vowels[0] << endl;
    cout << "The last vowel is: " << vowels[4] << endl;

    double hi_temps[] {90.1, 89.8, 77.5, 81.6};
    cout << "\n The first high temperature is: " << hi_temps[0] << endl;

    hi_temps[0] = 100.7; //set the first element to 100.7
                        // we can change the value of the array
    
    cout << "The first high temperature is now: " << hi_temps[0] << endl;

    int test_scores2[5];
    cout << "\nFirst score at index 0: " << test_scores2[0] << endl;
    cout << "Second score at index 1: " << test_scores2[1] << endl;
    cout << "Third score at index 2: " << test_scores2[2] << endl;
    cout << "Fourth score at index 3: " << test_scores2[3] << endl;
    cout << "Fifth score at index 4: " << test_scores2[4] << endl;

    cout << "\nEnter 5 test scores: ";

    cin >> test_scores2[0];
    cin >> test_scores2[1];
    cin >> test_scores2[2];
    cin >> test_scores2[3];
    cin >> test_scores2[4];

    cout << "\n The updated array is: " << endl;
    cout << "First score at index 0: " << test_scores2[0] << endl;
    cout << "Second score at index 1: " << test_scores2[1] << endl;
    cout << "Third score at index 2: " << test_scores2[2] << endl;
    cout << "Fourth score at index 3: " << test_scores2[3] << endl;
    cout << "Fifth score at index 4: " << test_scores2[4] << endl;

    cout << "\nNotice what we get when we output with cout an array name: " << test_scores2 << endl;

    /**************************
     * MULTI DIMENSIONAL ARRAYS
     * ************************/
    // DEclaration:
    // Element_Type array_name [rows][columns];

    int movie_rating[3][4] {
        {0, 4, 3, 5},
        {2, 3, 5, 5},
        {1, 4, 4, 5}
    };


    return 0;
}
