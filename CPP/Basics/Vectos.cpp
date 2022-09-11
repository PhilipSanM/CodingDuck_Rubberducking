#include <bits/stdc++.h>
using namespace std;

int main(int argc, char const *argv[])
{
    // A vector is a dynamic array
    // Use it if you don't know the size of the array
    // It is a template class

    // Sintax of declaring a vector:
    // vector <Element_Type> vector_name;
    vector <char> vowels2 (5); // 5 elements, all initialized to 0, with constructor
    // vector <char> vowlels; // empty vector
    // We can also initialize the vector:
    vector <char> vowels {'a','e','i','o','u'};
    cout << "The first vowel is: " << vowels[0] << endl;
    cout << "The last vowel is: " << vowels[4] << endl;



    vector <double> hi_temps (365, 80.0); // 365 elements, all initialized to 80.0

    
    // Accessing vector elements - array syntax:
    // vector_name[index]
    // test_score [1]

    // vector <int> test_scores {100, 98, 89, 86, 55};
    // cout << "First score at index 0: " << test_scores[0] << endl;

    // Accessing vector elements - vector syntax:
    // vector_name.at(index)
    // test_score.at(1)

    // vector <int> test_scores {100, 98, 89, 86, 55};
    // cout << "First score at index 0: " << test_scores.at(0) << endl;

    // Also changing the content of the vector:
    // vector_name.at(index) = value;
    // cin >> test_scores.at(0);

    //PUSH_BACK
    vector <int> test_scores {100, 98, 89, 86, 55};
    test_scores.push_back(100); // add 100 to the end of the vector
                                // 100, 98, 89, 86, 55, 100
    test_scores.push_back(90); // 100, 98, 89, 86, 55, 100, 90    

    cout << "\nTest scores using array syntax: " << endl;
    cout << test_scores[0] << endl;
    cout << test_scores[1] << endl;
    cout << test_scores[2] << endl;

    //Accesing with at
    cout << "\nTest scores using vector syntax: " << endl;
    cout << test_scores.at(0) << endl;
    cout << test_scores.at(1) << endl;
    cout << test_scores.at(2) << endl;

    // Vector 2D
    // Declaration:
    // vector <vector <Element_Type>> vector_name;
    //example of a 2D vector

    vector <vector <int>> movie_ratings
    {
        {1,2,10,4},
        {9,6,4,1},
        {5,3,8,5}
    };

    cout<<"\nHere are the movie ratings for reviewer #1 using array syntax: "<<endl;
    cout<<movie_ratings[0][0]<<endl;
    cout<<movie_ratings[0][1]<<endl;
    cout<<movie_ratings[0][2]<<endl;
    cout<<movie_ratings[0][3]<<endl;

    cout << "\nHere are the movie ratings for reviewer #1 using vector syntax: " << endl;
    cout << movie_ratings.at(0).at(0) << endl;
    cout << movie_ratings.at(0).at(1) << endl;
    cout << movie_ratings.at(0).at(2) << endl;
    cout << movie_ratings.at(0).at(3) << endl;







    return 0;
}
