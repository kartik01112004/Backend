// //Syncronous

// console.log(" I ");
// console.log(" eat ");
// console.log(" ice cream  ");
// console.log(" with a ");
// console.log(" spoon ");

// //Asyncronous

// console.log(" Asyncronous ");

// console.log(" I ");
// console.log(" eat ");
// setTimeout(() => {
//   console.log(" ice cream  ");
// }, 1000);
// console.log(" with a ");
// console.log(" spoon ");

// console.log("  ");

// function one(call_two) {
//   console.log("step 1 complete . please call step 2");
//   call_two();
// }

// function two() {
//   console.log("step 2");
// }

// // making relationship bw the functions

// one(two);

// Making icecream

// console.log(stocks.fruits[2]);
// let order = (fruit_name, call_produntion) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruit_name]} was selected.`);
//     call_produntion(); //if out of settimeout  then work not as intended
//   }, 2000);
//   // console.log("order placed. Please call production");
// };
// let produntion = () => {
//   setTimeout(() => {
//     console.log("Production has started");

//     setTimeout(() => {
//       console.log("the fruits has been chopped ");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("the matchine was started");

//           setTimeout(() => {
//             console.log(`the icecream was placed on ${stocks.holder[1]}`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[1]} was added as toppings`);

//               setTimeout(() => {
//                 console.log("serve the icecream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
//   // console.log("order recived, starting order.");
// };

// order(0, produntion);

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;
// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is colsed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   .then(() => {
//     return order(0, () => console.log("production has started"));
//   })

//   .then(() => {
//     return order(2000, () => console.log("the fruits has been chopped "));
//   })

//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//     );
//   })

//   .then(() => {
//     return order(1000, () => console.log("the matchine was started"));
//   })

//   .then(() => {
//     return order(2000, () =>
//       console.log(`the icecream was placed on ${stocks.holder[1]}`)
//     );
//   })

//   .then(() => {
//     return order(3000, () =>
//       console.log(`${stocks.toppings[1]} was added as toppings`)
//     );
//   })

//   .then(() => {
//     return order(1000, () => console.log("serve the icecream"));
//   })

//   .catch(() => {
//     console.log("Customer left");
//   })

//   .finally(() => {
//     console.log("day ended, shop closed");
//   });

// let order = () => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exists", error);
//   } finally {
//     console.log("runs code anyways");
//   }
// }

// order().then(() => {
//   console.log("1st this");
// });

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");
//   await toppings_choice();
//   console.log("D");
//   console.log("E");
// }

// kitchen();

// console.log("doing the dishes");

// console.log("cleaning the table");

// console.log("taking other orders");

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);

    console.log("start the production");
    await time(2000);
    console.log("cut the fruits");
    await time(1000);
    console.log(`${stocks.liquid[0]} was added ${stocks.liquid[1]} was added`);
    await time(2000);
    console.log(`ice cream was placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);
    await time(2000);
    console.log("serve icecream");
  } catch (error) {
    console.log("customer left");
  } finally {
    console.log("day ended, shop closed");
  }
}

kitchen();
