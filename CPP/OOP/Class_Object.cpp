// Section 13

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Player{
public:
    // attributes
    int age;
    string name {"Player"};
    int xp {100};
    int health {3};

    // methods
    void talk(string text_to_say){ cout << this->name << " says " << text_to_say << endl;};
    bool is_dead();
};

class Account{
public:
    //atributes
    string name {"Account"};
    double balance {0.0};

    //methods
    bool deposit(double);
    bool withdraw(double);
};


int main(){
    Player frank;
    Player hero;    
    
    // Arrays
    Player players[] {frank,hero};

    // with vectors
    vector<Player> player_vec{frank};
    player_vec.push_back(hero);

    // Like pointers
    Player *enemy {nullptr};
    // Player *enemy = new Player ();
    enemy = new Player;
    // delete enemy;
    //Remember to acces with ->

    // Another classes
    Account frank_account;
    Account jim_account;


    // Accesing
    frank.name = "Franks";
    frank.health = 100;
    frank.xp = 12;

    cout << frank.name<< endl;
    frank.talk("Hello");

    // With the ponter
    enemy->name = "Brus";
    enemy->age = 15;
    (*enemy).health = 100;
    (*enemy).talk("La vaca lola");

    delete enemy;



    return 0;
}