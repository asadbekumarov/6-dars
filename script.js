// 1
// (while) A va B musbat sonlar berilgan (A>B). A uzunlikdagi kesmada maksimal B kesmalar joylashtirilgan. A kesmada qolgan bo'sh joyni va nechta B kesma joylashtirilganligini aniqlovchi dastur tuzing.
// let a = 10;
// let b = 3;
// let count = 0;
// let bosh = a;
// while (bosh >= 0) {
//   bosh -= b;
//   count++;
// }
// console.log(`${count} kesmalar son`);
// console.log(`${bosh} qolgan joy`);

// // 2-
// // (while) 2 sonini qandaydur darajasini bildiruvchi son berilgan. 2 ning nechanchi darajasi ekanligini aniqlovchi dastur tuzing.
// let i = 2;
// let darajasi = 32;
// let counter = 0;
// while (i <= darajasi) {
//   i *= 2;
//   counter++;
// }
// console.log(counter);

// 3-
// (for) n butun soni va a butun soni berilgan. a ning n-darajasini aniqlovchi dastur tuzing. fordan foydalanib
// let a = 2;
// let n = 5;
// let natija = 1;
// for (let i = 0; i < n; i++) {
//     natija *= a;
// }
// console.log(natija);

// 4-
// (for) a va b butun sonlari berilgan. a dan b gacha barcha sonlar kvadratlari yig'indisini hisoblovchi dastur tuzing.
// let a = 2;
// let b = 5;
// let sum = 0
// for (let i = a; i <= b; i++) {
//     sum += i * i;
// }
// console.log(sum);

// 5-asosi vazifa
// 1. 1 dan tepa 100 dan past o'yini
// a. Kompyuter random bir son o'ylaydi. Foydalanuvchi kompyuter qanday son o'ylaganini topishi kerak.
// b. Foydalanuvchi son kiritadi. agar kiritilgan son kompyuter o'ylagan sondan katta bo'lsa "kichik" deydi, agar kiritlgan son kompyuter o'ylagan sondan kichik bo'lsa "katta" deydi. O'yin shu tariqa o'ylangan son topilmaguncha davom etadi.
// c. Foydalanuvchi komyuter o'ylagan son nechi ekanligini nechta urinishda topganini aytish kerak.
// let random = Math.floor(Math.random() * 100) + 1;
// let urinshSoni = 10;
// let kiritlganSon = 0;
// alert(
//   "kamputer son oylaydi siz uno topasiz 1 dan 100 gacha son urunishlar soni 10ta"
// );
// for (let i = 0; i < urinshSoni; i++) {
//   kiritlganSon = parseInt(
//     prompt(
//       `Kompyuter o'ylagan sonni toping. Urinishlar soni: ${urinshSoni - i}`
//     )
//   );
//   if (random === kiritlganSon) {
//     alert(`tabriklaymiz siz kirtgan son togri ${kiritlganSon}`);
//     break;
//   } else if (kiritlganSon < random) {
//     alert(`XATO kattaroq son oylang urunishlar soni ${urinshSoni - i - 1}ta`);
//   } else if (kiritlganSon > random) {
//     alert(`XATO kichikroq son oylang urunishlar soni ${urinshSoni - i - 1}ta`);
//   }
// }
// if (kiritlganSon !== random) {
//   alert(
//     `TUGADI ${urinshSoni} urinishda to'g'ri sonni topa olmadingiz. MEN o'ylagan son: ${random} edi`
//   );
// }
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// QOSHIMCHA
// 1-
// 1dan 10gacha bolgan sonlarni darjasini
// let i = 1;
// let sum = 1;
// while (i <= 10) {
//   sum = sum * i;
//   i++;
// }
// console.log(sum);

// 2-
// bir kg kanfetning narxi berilgan 0.1,0.2,0.3... 1kggacha konfetni narxi chiqsin
// let price = 200;
// for (let i = 0.1; i <= 1; i += 0.1) {
//   console.log(price * i);
// }

// 3-
// 1 dan 100 gacha bo'lgan barcha sonlarning yig'indisini chiqsin
// let result = 0;
// for (let i = 1; i <= 100; i++) {
//   result += i;
// }
// console.log(result);

// 4-
// a dan b gacha bolgan toq sonlari chiqsin
// let a = +prompt("raqam kiritng");
// let b = +prompt("yana raqam kirting");
// for (let i = a; i <= b; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }


