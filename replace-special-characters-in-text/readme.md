### Features

- Exclude special characters to convert a header in html into an html extension with javascript.


####Javascript Code:

```javascript
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
```

####HTML code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            font-size: 1rem;
            font-weight: 100;
        }
    </style>
</head>
<body>
    <h1 id="title">Pijamalı hasta, yağız şoföre çabucak güvendi ve ŞOFÖR ONA İHANET ETTİ.</h1>
    <h1 id="link"></h1>
    <script src="./custom.js"></script>
    </body>
</html>
```
###What to do next

- Special characters will be imported by pulling from a json file
- When this title is clicked with various Javascript codes, a new html page will be opened with the criteria we have determined, and a special code structure will be created there.


