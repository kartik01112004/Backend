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

let is_shop_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is colsed"));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("production has started"));
  })

  .then(() => {
    return order(2000, () => console.log("the fruits has been chopped "));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("the matchine was started"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`the icecream was placed on ${stocks.holder[1]}`)
    );
  })

  .then(() => {
    return order(3000, () =>
      console.log(`${stocks.toppings[1]} was added as toppings`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("serve the icecream"));
  });
