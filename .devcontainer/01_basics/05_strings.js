const name = "Saurabh"
const repoCount = 12

 console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Saurabh-rj-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = " Saurabh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saurabh.com/saurabh%30gupta"

console.log(url.replace('%30', '-'))

console.log(url.includes('saurabh'))

console.log(gameName.split('-'));

const sentence = 'My name is saurabh'
let index = 5
console.log(sentence.at(index));
console.log(sentence.endsWith('is'));
console.log(sentence.lastIndexOf('saurabh'));

var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)