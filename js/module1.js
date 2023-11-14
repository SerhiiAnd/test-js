// console.log(5 > 3);

// const year = 5;

// if (year > 4) {
//   console.log(5 > 4);
// } else if (year > 8) {
//   console.log(5 > 8);
// } else if (year > 5) {
//   console.log(5 > 5);
// } else {
//         console.log("else");
// }

// console.log("Hello world");

// let a = 10;
// // a = 12;
// // a = a + 2;
// // a += 2;

// console.log(a);

// const apple = 25;
// const grape = 48;
// const total = apple + grape * 5;
// console.log(total);
// const diff = (apple - grape) / 2;
// console.log(diff);

// let students = 85;
// // students = students + 50;
// // students += 55;
// students *= 3;

// console.log(students);

// const result = 108 + 93 - 2 * 9;
// console.log(result);

// const value = 27.600005; //---
// console.log(Math.ceil(value)); // --- округлює вгори
// console.log(Math.floor(value)); // --- округлює вниз
// console.log(Math.round(value)); // --- округлює по мат. принципах <4 = 0   >4=1

// const name = "Serhii";
// const age = 35;

// const result = name + " year " + age;
// console.log(result);

// const value = 52;
// const value_2 = "32";

// const resalt = value + Number(value_2); // без Number буде 5232 - приводиться до рядка
// console.log(resalt);

// const companyName = "Cyber security";
// const repairBots = 150;
// const defenseBots = 53;

// // const message =
// //   companyName + " has " + repairBots + defenseBots + " bots in stock"; //Cyber security has 15053 bots in stock

// const message = `${companyName} has ${repairBots + defenseBots} in stock`;
// console.log(message);

// let weihgt = "83,7";
// let height = "1.82";

// weihgt = weihgt.replace(",", "."); //змінюємо об'єкт  , на . за допомогою replace
// weihgt = Number(weihgt); // непоганий метод зміни рядка на число

// weihgt = Number(weihgt.replace(",", ".")); // Кращий метод зміни рядка на число
// console.log(weihgt);

// height = Number(height); //обидва варіанти правильні
// height = +height; //обидва варіанти правильні

// const bmi = weihgt / Math.pow(height, 2); //обидва варіанти правильні
// const bmi = weihgt / height ** 2; //обидва варіанти правильні

// const bmi = Number((weihgt / Math.pow(height, 2)).toFixed(2)); //приводимо до Number і фіксимо число після крапки

// //Ще один варіанти, просто розділяємо рядок
// const a = weihgt / Math.pow(height, 2);
// const bmi = Number(a.toFixed(2));

// console.log(bmi);
//-------------------------
// const icomingValue = 10;
// const defaultValue = 5;
// const result = icomingValue + Number("sfd");
// console.log(result);
// const value = result || defaultValue;
// console.log(value);

//-----------------------LESONS-2--------------------------
// if (15 > 20) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const value = 5;
// if (value > 6) {
//   console.log("5>6");
// } else if (value > 7) {
//   console.log("5>6");
// } else if (value > 3) {
//   console.log("5>3");
// } else {
//   console.log("else");
// }

// const value = NaN; // NaN, '', 0, null, underfaind, fals

// if (value) {
//   console.log("if"); // ЗВЕРТАЮТЬ УВАГУ НА СПІВБЕСІДІ
// } else {
//   console.log("else");
// }

//------------ТЕРНАРНИЙ ВИРАЗ

// condition ? example 1: example 2

// const result = 7 > 6 ? "більше" : "меньше";
// console.log(result);
//----------
// let result;

// if (7 > 6) {
//   result = "більше";
// } else {
//   result = "меньше";
// }
// console.log(result);

//------- SWITCH-- ВАЖАЄТЬСЯ НАЙКРАЩИМ МЕТОДОМ

// const value = 5;
// switch (value) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 5:
//     console.log("Good result");
//     break;
//   default:
//     console.log("default");
// }

// // const value = 5;

// if (value === 1) {
//   console.log("one");
// } else if (value === 2) {
//   console.log("two");
// } else if (value === 5) {
//   console.log("Good result");
// } else {
//   console.log("default");
// }
