'use strict';

const bookings = [];
//B efore ES6 passing default values
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers ||= 1;
  //   price ||= 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // undefinedfor numPassenger //undefined for price

createBooking('LH123', 2, 800);
createBooking('LH123', 5); //price = 995


                         
                         

                          
         /)   ,  /) ,    
    __  (/      //   __  
    /_)_/ )__(_(/__(_/_)_
 .-/              .-/    
(_/              (_/       
                     
//       ___           ___                       ___                   ___     
//      /\  \         /\__\          ___        /\__\      ___        /\  \                  _ 
//     /::\  \       /:/  /         /\  \      /:/  /     /\  \      /::\  \      __   ___.--'_`.
//    /:/\:\  \     /:/__/          \:\  \    /:/  /      \:\  \    /:/\:\  \    ( _`.'. -   'o` )  
//   /::\~\:\  \   /::\  \ ___      /::\__\  /:/  /       /::\__\  /::\~\:\  \   _\.'_'      _.-'  
//  /:/\:\ \:\__\ /:/\:\  /\__\  __/:/\/__/ /:/__/     __/:/\/__/ /:/\:\ \:\__\ ( \`. )    //\`   
//  \/__\:\/:/  / \/__\:\/:/  / /\/:/  /    \:\  \    /\/:/  /    \/__\:\/:/  /  \_`-'`---'\\__,  
//       \::/  /       \::/  /  \::/__/      \:\  \   \::/__/          \::/  /    \`        `-\  
//        \/__/        /:/  /    \:\__\       \:\  \   \:\__\           \/__/      `               
//                    /:/  /      \/__/        \:\__\   \/__/                   
//                    \/__/                     \/__/                          
                     
                     
                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
const philipSanM = {
  fullName: 'Felipe Sanchez Martinez',
  nickname: 'Jlipe | Pipe<3 | Philip',
  pronouns: "He" | "Him",
  age: 19,
  country: 'Mx',
  birthday: '01/05/2003',
  funFacts: {
    favoriteColor: '#e4007c',
    favoriteFood: 'Coffee ice cream',
    dogsOrCats: 'both',
    single: true,
  },
  //LMAO
 
}
//       ___           ___                       ___                   ___     
//      /\  \         /\__\          ___        /\__\      ___        /\  \                  _ 
//     /::\  \       /:/  /         /\  \      /:/  /     /\  \      /::\  \      __   ___.--'_`.
//    /:/\:\  \     /:/__/          \:\  \    /:/  /      \:\  \    /:/\:\  \    ( _`.'. -   'o` )  
//   /::\~\:\  \   /::\  \ ___      /::\__\  /:/  /       /::\__\  /::\~\:\  \   _\.'_'      _.-'  
//  /:/\:\ \:\__\ /:/\:\  /\__\  __/:/\/__/ /:/__/     __/:/\/__/ /:/\:\ \:\__\ ( \`. )    //\`   
//  \/__\:\/:/  / \/__\:\/:/  / /\/:/  /    \:\  \    /\/:/  /    \/__\:\/:/  /  \_`-'`---'\\__,  
//       \::/  /       \::/  /  \::/__/      \:\  \   \::/__/          \::/  /    \`        `-\  
//        \/__/        /:/  /    \:\__\       \:\  \   \:\__\           \/__/      `               
//                    /:/  /      \/__/        \:\__\   \/__/                   
//                    \/__/                     \/__/                          
     
   
                                                                       
                                                                       