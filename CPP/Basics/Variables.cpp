#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main(int argc, char const *argv[]){
	int age; // Uninitialized
	int ageB (21); // Constructor initialization
	int ageC {21}; // C++11 list initialization syntax

	cout<< ageB <<endl; 

	//====================================================
	//=========== V A R I A B L E S ======================
	//====================================================
	

	/*******************************************
	 *  Character type
	 * *****************************************/

	char middle_initial {'J'}; // Notcie the single quotes around characters
	cout << "My middle initial is " << middle_initial << endl;

	/*******************************************
	 *  Integer type
	 * *****************************************/
	unsigned short int exam_score {55}; // Same as unsigned short exam_score {55};
	cout << "My exam score was " << exam_score << endl;

	int countries_represented {65};
	cout << "There were " << countries_represented << " countries represented in my meeting" << endl;

	long people_in_florida {20610000};
	cout << "There are about " << people_in_florida << " people in Florida" << endl;

	long long people_on_earth {7600000000};
	cout << "There are about " << people_on_earth << " people on earth" << endl;

	long long distance_to_alpha_centauri {9'461'000'000'000};
	cout << "The distance to Alpha Centauri is " << distance_to_alpha_centauri << " kilometers" << endl;

	/*******************************************
	 *  Floating point types
	 * *****************************************/
	float car_payment {401.23};
	cout << "My car payment is " << car_payment << endl;

	double pi {3.14159};
	cout << "Pi is " << pi << endl;
	
	long double large_amount {2.7e120};
	cout << large_amount << " is a very big number" << endl;

	/*******************************************
	 *  Boolean type
	 * *****************************************/

	bool game_over {false};
	cout << "The value of game_over is " << game_over << endl;

	/*******************************************
	 *  Overflow example
	 * *****************************************/

	short value1 {30000};
	short value2 {1000};
	short product {value1 * value2}; //int at the begining
	cout << "The product of " << value1 << " and " << value2 << " is " << product << endl;

	/*******************************************
	 *  sizeof operator
	 * *****************************************/

	cout << "sizeof information" << endl;
	cout << "==================" << endl;

	cout << "char: " << sizeof(char) << " bytes" << endl;
	cout << "int: " << sizeof(int) << " bytes" << endl;
	cout << "unsigned int: " << sizeof(unsigned int) << " bytes" << endl;
	cout << "short: " << sizeof(short) << " bytes" << endl;
	cout << "long: " << sizeof(long) << " bytes" << endl;
	cout << "long long: " << sizeof(long long) << " bytes" << endl;

	cout << "====================="<< endl;
	cout << "float: " << sizeof(float) << " bytes" << endl;
	cout << "double: " << sizeof(double) << " bytes" << endl;
	cout << "long double: " << sizeof(long double) << " bytes" << endl;

	cout << "====================="<< endl;
	cout << "bool: " << sizeof(bool) << " bytes" << endl;
	 //Minimun values
	cout << "====================="<< endl;
	cout << "Minimum values" << endl;
	cout << "char" << CHAR_MIN << endl;
	cout << "int" << INT_MIN << endl;
	cout << "short" << SHRT_MIN << endl;
	cout << "long" << LONG_MIN << endl;
	cout << "long long" << LLONG_MIN << endl;

	//Maximum values
	cout << "====================="<< endl;
	cout << "Maximum values" << endl;
	cout << "char" << CHAR_MAX << endl;
	cout << "int" << INT_MAX << endl;
	cout << "short" << SHRT_MAX << endl;
	cout << "long" << LONG_MAX << endl;
	cout << "long long" << LLONG_MAX << endl;

	// with varaibles
	cout << "====================="<< endl;
	int ageD {19};
	cout << "sizeof age is " << sizeof(ageD) << " bytes" << endl; //BEACUSE IS AN INT

	/*******************************************
	 *  Constants
	 * *****************************************/
	//Dont use #define, because is a preprocessor directive
	const int my_age {19}; // my_age is an int


	return 0;
}

