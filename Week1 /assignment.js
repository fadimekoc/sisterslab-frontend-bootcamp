let a = 2;
let b = 3;
let c = 2;
(a == b) // returns false                                       false döner çünkü a ile b birbirine eşit değildir.
(a == c) // returns  true                                       true döner çünkü a ile c birbirleriyle aynı değere sahiptir.

typeof "John Doe" // Returns string                              John Doe, tırnak içinde yazılmış string değeridir.
typeof 3.14 // Returns number                                    Number döndürür çünkü 3.14 bir sayı değeridir.
typeof true // Returns boolean
typeof 234567890123456789012345678901234567890n // Returns bigint  sayı büyük bir sayı olduğu içinbigint döndürür.
typeof undefined // Returns undefined 
typeof null // Returns object                               null değeri type of ile kullanıldığında object olarak döner.
typeof Symbol('symbol') // Returns symbol                    symbol döner.Çünkü symbol değişmez değerdir. 

let x = 2;
let y = "2";                  
(x == y) // Returns true     '==' ile değeri ile karşılaştırdığımızda veri tipine değil değerleri karşılaştırırız. Bu durumda 2 sayısı yine aynı değer olarak döner.

(x === y) // Returns false  '===' ile değerler karşılaştırıldığında eşit diyebilmemiz için hem değerine hem de türünün aynı olması bakılır. x bir sayı iken y ise bir stringtir.

let x = 3;
let y = "3";
x + y // Returns 33          x bir sayı y bir metindir.Bu yüzden Java Script x+y ifadesinde metin birleştirme işlemi yapar ve işlem sonucu 33 olarak döner.

let x = 24;                  // x bir number (sayı) olarak tanımlandı ve 24 değeri atandı.
let y = "Hello";             // y bir string (metin) olarak tanımlandı ve "Hello" değeri atandı. 
x + y // Returns 24Hello     // x ve y değişkenlerini topladığımızda JavaScript, sayıyı otomatik olarak metne dönüştürmeye çalışır,ancak bu durumda metin birleştirme işlemi gerçekleştirilir ve sonuç "24Hello" olur.

let name = "Vivek";          // "name" değişkeni "Vivek" metni ile başlatıldı.
let surname = " Bisht";      // "surname" değişkeni " Bisht" metni ile başlatıldı.

name + surname // Returns Vivek Bisht   // İki değişken, her ikisi de string (metin) türünden olduğu için, JavaScript bu metinleri birleştirir ve sonuç olarak "Vivek Bisht" metnini döndürür.

let x = 3;      // "x" değişkeni 3 sayısı ile başlatıldı.
let y = "3";    // "y" değişkeni "3" metni ile başlatıldı. 
x - y // işlemi gerçekleşiyor. JavaScript, işlem sırasında string olan "y" değerini otomatik olarak bir sayıya dönüştürür.
ardından bu iki sayının farkını hesaplar. Sonuç olarak x-y işlemi "0" değerini döndürür.

let x = 0;       "x" değişkeni 0 sayısı ile başlatıldı.
let y = 23;      "y" değişkeni 23 sayısı ile başlatıldı.

if(x) { console.log(x) } //undefined 
// Koşul, "x" değişkeninin değerini kontrol eder. Değer 0 olduğu için koşul false olarak değerlendirilir.
// Bu nedenle "console.log(x)" ifadesi çalıştırılmaz ve sonuç olarak konsola herhangi bir şey yazdırılmaz.

if(y) { console.log(y) } //23
// Koşul, "y" değişkeninin değerini kontrol eder. Değer 0 dışında bir sayı olan 23 olduğu için koşul true olarak değerlendirilir.
// Bu nedenle "console.log(y)" ifadesi çalıştırılır ve sonuç olarak konsola "23" yazdırılır.

isNaN("Hello") // Returns true  
//"Hello" bir string türündedir ve JavaScript bu stringi sayıya çeviremeyeceği için isNaN işlemi,değeri sayıya dönüştürmeye çalışır,ancak "Hello" bir metin olduğundan geçerli bir sayıya dönüştürülemez.
Bu nedenle, isNaN işlemi "true" sonucunu döndürür.
  
isNaN(345) // Returns false 
// isNaN işlemi, bir değerin sayı olup olmadığını kontrol eder ve bir değeri sayıya dönüştürmeye çalışır.
// Ancak burada 345 zaten bir sayıdır, bu nedenle işlem "false" sonucunu döndürür.

isNaN('1') // Returns false
// '1' bir stringtir. isNaN işlemi önce bu stringi sayıya döndürmeye çalışır. JavaScript, '1' stringini sayıya döndürebilir içeriği bir sayısal değerdir. Sonuç olarak, '1' stringi sayıya (number) dönüştürülür
// ve isNaN('1') ifadesi aslında isNaN(1) halini alır. Çünkü 1 bir sayıdır, bu nedenle işlem "false" sonucunu döndürür.

isNaN(true) // Returns false
// true değeri boolean değeridir ve sayısal olarak da 1'i temsil eder.JavaScript,true'yu sayısal bir değere,yani 1'e döndürür.Bu nedenle isNaN(true) ifadesi aslında isNaN(1) halini alır.
1 bir sayıdır, işlem "false" sonucunu döndürür.
  
isNaN(false) // Returns false
// false, değeri 0 olan bir boolean değeridir. JavaScript bu ifadede false'u sayısal bir değere, yani 0'a döndürür.isNaN(false) ifadesi aslında isNaN(0) halini alır.Çünkü 0 bir sayıdır,işlem "false" sonucunu döndürür.

isNaN(undefined) // Returns true
// undefined, JavaScript'te özel bir değerdir ve sayısal bir değeri yoktur. Sayısal bir değere çevrilemez.
sonuç olarak isNaN(undefined) ifadesi "true" sonucunu döndürür.
