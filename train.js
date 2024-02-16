                                     
                                                 // -------- E - TASK -----------------
//Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"
//------------------------------------------------------ solution -------------------------------------------------------------------
function getReverse(str) {
    let reversedString = ""; //reversedString nomli o'zgaruvchi yaratiga va unga bo'sh qator qiymat berdik. keyinchalik u return qitmatini oladi 
    
    for (let i = str.length - 1; i >= 0; i--) {// - 1 so'zdagi eng oxirgi belgi indeksini indeks 0 dan boshlangani uchun -1 kerak
      reversedString += str[i];
    }
    
    if (!str || str.length === 0) {
      return "erorr"; // Agar input bo'sh bo'lsa erorr ni chiqaradi  
    }
  
    
  
    return reversedString; //  reversedString ga natijani return qiladi 
  }
  
  
  const reversed = getReverse("AFIF");
  console.log(reversed); // => FiFA
  
         
        
         // akkaountda birinchi oyda pull to'lovi bo'lmas akkaount block qilinadi.
         // ----------- Herko link -------------------------- 
         // https://serene-taiga-49648-b283d0f509da.herokuapp.com/                                         
                                                 
                                                 
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

// const countDigits = (string) => {
//   let count = 0; 
//   for (let i = 0; i < string.length; i++) { 
//       if (!isNaN(parseInt(string[i]))) { 
//           count++; 
//       }
//   }
//   return count; 
// };


// console.log(countDigits("ad2a54y79wet0sfgb9")); // =>7

//                          -------------- C-TASK  -------------------

/*
Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, 
hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 
5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non,
5ta lagmon va 6ta cola mavjud! */

// class Shop { // Shop klassi 3 ta mahsulotni (brea, kebab, pepsini ) o'z ichiga saqlaydi.
//   constructor(bread, kebab, pepsi) {
//       this.bread = bread;
//       this.kebab = kebab;
//       this.pepsi = pepsi;
//   }

//   stock() { // stock metod hozirgi vaqt bilan  do'konning o'zgaruvchilari bilan print qiladi.
//       const now = new Date();
//       console.log(`Currently, at ${now.getHours()}:${now.getMinutes()}, we have ${this.bread} loaves of bread, ${this.kebab} kebabs, and ${this.pepsi} bottles of Pepsi in stock!`);
//   }

//   sell(product, quantity) { // sell metod sotish va qabul qiluvchi mahsulotni miqdori  hisoblaydi.
//       if (product === 'bread') {
//           this.bread -= quantity;
//       } else if (product === 'kebab') {
//           this.kebab -= quantity;
//       } else if (product === 'pepsi') {
//           this.pepsi -= quantity;
//       }
//   }

//   restock(product, quantity) { // restock metod dataga yangi mahsulot qo'shadi.
//       if (product === 'bread') {
//           this.bread += quantity;
//       } else if (product === 'kebab') {
//           this.kebab += quantity;
//       } else if (product === 'pepsi') {
//           this.pepsi += quantity;
//       }
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.stock(); // Currently, at 20:40, we have 4 loaves of bread, 5 kebabs, and 2 bottles of Pepsi in stock!
// shop.sell('bread', 3);// hozir 20:40da 4ta non, 5ta kabob va 2ta pepsi mavjud!
// shop.restock('pepsi', 4);
// shop.stock(); // hozir 20:50da 1ta non, 5ta kabob va 6ta pepsi mavjud!

 

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

                                // ----------------------------------- Chalange 1 ------------------------------
 /*
 // Hayvonlar nomi 
const animal_list = [
    "fox", "bird", "lion", "wolf", "deer", "bear",
    "duck", "goat", "dog", "cat", "snacke", "cow"
  ];
  
   // Berilgan so'zdagi hayvonlarini topish 
  function findAnimals(inputString) {
    // ro'yxat saqlash  uchun bo'sh joy 
    const foundAnimals = [];
  
    // animal list  tekshirish uchun loop
    for (let i = 0; i < animal_list.length; i++) {
      const animal = animal_list[i];
      let foundAllChars = true;
  
      // hayvon ismini har bir harifini tekshiruvchi loop 
      for (let j = 0; j < animal.length; j++) {
        const char = animal[j];
        
        // findAnimalsdan olingan textni animala listda bo yo'qligini tekshirish 
        if (inputString.indexOf(char) === -1) {
          foundAllChars = false;
          break;
        }
      }
  
      // hamma harif bo'lsa ro'yxatga qo'shish 
      if (foundAllChars) {
        foundAnimals.push(animal);
      }
    }
  
    return foundAnimals;
  }
  
  // Berilgan textdagi hayvonlarni topish
  const result = findAnimals("dgacoat");
  console.log(result); // ['goat', 'dog', 'cat'] 
  */