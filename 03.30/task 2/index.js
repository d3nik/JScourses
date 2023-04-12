let UserString = prompt("Enter your string: ");

// ex. 1
let words = UserString.split(" ");
console.log(`Spaces count: ${words.length-1}`);

// ex. 2
let answer = confirm("Convert the first character of a string to uppercase?");
if (answer) {
    UpperCase = UserString.charAt(0).toUpperCase() + UserString.slice(1);
    alert(UpperCase);
}

// ex. 3
console.log(`Words count: ${words.length}`);

// ex. 4
let UserPhrase = prompt("Enter your phrase: ");
let PhraseWords = UserPhrase.split(" ");
let abbreviation = "";

console.log(PhraseWords);
for (let i = 0; i < PhraseWords.length; i++) {
    abbreviation += PhraseWords[i].charAt(0).toUpperCase();
}
console.log(abbreviation);

// ex. 5
function palindrome(str) {
    let phrase = str.toLowerCase().replace(/[\W_]/g, '');

    let ReversePhrase = phrase.split('').reverse().join('');

    return phrase === ReversePhrase;
}

console.log(palindrome(UserPhrase));

// ex. 6 (url object)
function UrlSlicer() {
    let url = prompt("Enter your url: ");
    let protocol = url.substring(0, url.indexOf("://"));
    let domain = url.substring(url.indexOf("://")+3, url.indexOf("com")+3);
    let path = url.substring(url.indexOf("com")+3, url.lastIndexOf("/")+1);

    console.log(`Protocol:
        ${protocol}`);
    console.log(`Domain:
        ${domain}`);
    console.log(`Path:
        ${path}`);
}

UrlSlicer();