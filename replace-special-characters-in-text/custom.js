// Bir başlığı link haline dönüştürürken
// Başlıkta kullandığımız özel karakterleri dönüştürmeye yarayan küçük bir kod yapısı 

let titleLink = document.getElementById("title"); // html de title id li h1 i seçtik
let link = document.getElementById("link"); // html de link id li h1 i seçtik

// linke aktarılırken değiştirilmesini istediğimiz özel karakterleri bir değişkene atadık.
let differentLetters ={",":"","!":"","?":"","*":"","ı":"i","ş":"s","ç":"c","ö":"o","ü":"u","ğ":"g","İ":"i","Ş":"s","Ç":"c","Ö":"o","Ü":"u","Ğ":"g"," ":"-",".":""}; 

// -textContent komutu ile titleLink değişkenine atanan h1 başlık öğesinin içerisindeki metni seçtik
let textReplace = titleLink.textContent;

// toLowerCase() komutu ile textReplace içine atanan değerlerin hepsini küçük karflere dönüştürdük.
let x = textReplace.toLowerCase();

// replaceAll komutu ile değiştirmek istediğimiz özel karakterleri /g ile global olarak işaretledik.
// change fonksiyonu oluşturarak differentLetters değişkeni içerisinde özel karakterlere karşılık gelmesini istediğimiz
// karakterleri x değişkenine atamış olduk.
x = x.replaceAll(/[,!?*ışçöüğİŞÇÖÜĞ .]/g, change => differentLetters[change]);

// nihayet innerHtml komutu ile titleLink değişkeninden aldığımız değeri
// link değişkenine atadığımız link id'li h1 başlığımızın içerisine dökümanda yazdırdık.

link.innerHTML = x + ".html";


