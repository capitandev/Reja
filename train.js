                                                 // -------- A - TASK -----------------
                      // <-------------- So'zning ichidagi hariflarni sonini hisoblovchi funksiya ---------------->

// function countLetter(letter, word) {
//     let count = 0;                                  // Harfning necha marta uchrashganligini hisoblash uchun o'zgaruvchini hosil qildik va qiymatini 0 ga tengladik
//     for (let i = 0; i < word.length; i++) {         // Berilgan sozni har bir harfi tekshiramiz
//         if (word[i] === letter) {                   // Agar harf berilgan harf bilan bir xil bo'lsa =>
//             count++;                                // => qiymatni oshiramiz
//         }
//     }
//     return count; //  natijasini qaytaramiz
// }

// console.log(countLetter("e", "engineer")); // => 3

                                                //-------------- B-TASK  -------------------
            //<----------------- Berilgan stringda qatnashgan raqamlar sonini hisoblovchi funksiya ---------------------------->

const countDigits = (string) => {
  let count = 0; 
  for (let i = 0; i < string.length; i++) { 
      if (!isNaN(parseInt(string[i]))) { 
          count++; 
      }
  }
  return count; 
};


console.log(countDigits("ad2a54y79wet0sfgb9")); // 7


// //------------------------- 21- NodeJsevent lop & Callback function ---------------------------------------

// console.log("TRAIN AREA!");
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "to'g'ri boshliq tanlang va ko'proq hato qiling", // 20-30
//   "o'zingizga ishlashni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q endi", // 60
// ];

//                             // Callback function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     // setTimeout(function() {
//     //     callback(null,list[5]);
//     // }, 5000);
//     setInterval( function ()  {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
//  console.log("passed here 1");

//---------------------- 22. Asynchronous functionlarni qo'llash ---------------------------

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list [5];
//      return new Promise((resolve, reject) => { // => Promise function da setTimeout, setinterval ishlaydi  
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//    }
//  }

// // call via then/catch
// // console.log("passed here 0");
// // maslahatBering(25)
// //   .then((data) => {
// //     console.log("javob:", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR:", err);
// //   });
// // console.log("passed here 1");



// call via async/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
// // ----------------------------- 23 MongDB ------------------------------