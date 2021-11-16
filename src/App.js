import logo from './logo.svg';
import './App.css';

function App() {
  //<------strings :It is collection of characters,whatever within the quotes is called string.---->
  let name = "nagarathna"
  console.log(name)
  let names = "nagarathna achireddy settim"
  console.log(names)

  //here achireddy is father name i want to mention clearly so here we can use double or single quotes to specify that
  let namess = 'nagarathna "achireddy" settim'
console.log(namess)//here in console it display achireddy in double quotes

//<-------properties: length is one property of strings,here length identifes size of the string including spaces.----->
let admirableHero = "vijaya devarakonda"
console.log(admirableHero.length)

//methods of string:
//charAt(),charCodAt(),fromCharCode(),concat(),endsWith(),startsWith(),includes(),indexOf(),lastIndexOf(),repeat(),replace(),search(),slice(),//split(),subst(),subString(),toUpperCase(),toLowerCase(),trim(),match()

//method1: charAt():if you want to specify characters at specific index we'll use charAt()
//example:
let vowels = "aeiou"
console.log(vowels.charAt(2))

//method2 : charCodAt():Returns the unicode of the character at the specified index
//example :
let abcdCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(abcdCapital.charCodeAt(3))
//for all abcdCapital we'll use loop
let i =0;
for(i=0;i<abcdCapital.length;i++)
{
  console.log(abcdCapital.charCodeAt(i))
}

//method3:fromCharCode():converts unicode to character
//example:
console.log(String.fromCharCode(65))

//method4:concat():Joins two or more strings
//example:
let nagu1 = "achireddy"
let nagu2 = "shamala"
let nagarathna = nagu1.concat(nagu2)
console.log(nagarathna)

//method5:endsWith():It specifies wheather it is ending with string or character
//example:
let classCR = "Miss.Nagarathnareddy ji"
console.log(classCR.endsWith("ji"))

//method6:startsWith():It specifies wheather it is starting with string or character
//example:
console.log(classCR.startsWith("Miss"))

//method7:includes():checks wheather a string contains specific characters
//example:
let myEmailId = "snagarathnareddy7777@gmail.com"
console.log(myEmailId.includes("7777"))

//method8:indexOf(): Returns the position of the first found occurrence of specified value in string
//example:
let message = "nagu completed bachelor of engineering with an aggregate of 70per,nagu done her intermediate as well with an aggregate of 70per"
console.log(message.indexOf("nagu"))
console.log(message.indexOf("70per"))

//method9:lastIndexOf():Returns the position of the last found occurrence of specified value in string
//example:
let message2 = "joel completed bachelor of engineering with an aggregate of 80per,joel done her intermediate as well with an aggregate of 80per"
console.log(message2.lastIndexOf("80per"))

//method10:repeat():returns a new string with a specified number of copies of an existing 
//example:
let message3 = "Iam a good girl in the class ,"
console.log(message3.repeat(30))

//method11:replace():Searches for a specified value and replace with correct one
//example:
let message4= "nagu is uneducated girl"
console.log(message4.replace("uneducated","educated"))

//method12:search():Searches a string for specified values returns the position of the match
//example:
let message5 = "Peddhi Joel Yesu Rathnam"
console.log(message5.search("Yesu"))

//method13:slice():Extracts a part of string and returns extracted part in a new string
//example:
console.log(message5.slice(5))

//method14:split():splits a string into an array
//example:
let sarangaDhariyaSong = "Saranga Dhariya song has crossed 297 million in 6months"
console.log(sarangaDhariyaSong.split("a"))

//method15:subStr(): method extracts parts of a string, beginning at the character at a specified position, and returns a specified number of characters.
//example:
let vijayMovie = "Master"
console.log(vijayMovie.substr(3))

//method16:subString():The substring() method extracts characters, between to indices (positions), from a string, and returns the substring.
//example:
let honey =  "daburhoney"
console.log(honey.substring(3,6))

//method17:toUpperCase():It converts a string into uppercase letters
//example:
console.log(vijayMovie.toUpperCase())

//method18:toLowerCase():It converts a string into lowercase letters
//example:
console.log(vijayMovie.toLowerCase())

//method19:trim():Removes whitespace from both sides of a string
//example:
let naguStatus = "   nagu is earning now   "
console.log(naguStatus.trim())

//method20:match():Searches a string for a match against a regular expression and returns the matches,as an array
//example:
console.log(sarangaDhariyaSong.match("ar"))


//NUmber Methods:isInteger(),isNaN(),toFixed(),toPrecision()
//method1:isInteger():checks wheather a value is integer
//example:
let naguMarks =89
let naguAvg = 79.98

console.log(Number.isInteger(naguMarks))
console.log(Number.isInteger(naguAvg))

//method2:isNaN():checks the value is NaN
//example:
let k = 4;
let j = 5;
let a = k+j;
console.log(Number.isNaN(a))

//method3:toFixed():The toFixed() method converts a number into a string, rounding to a specified number of decimals.
//example:
let usaDollarRate = 74.389789888
console.log(usaDollarRate.toFixed(7))

//method4:toPrecision():The toPrecision() method formats a number to a specified length.
//example:
console.log(usaDollarRate.toPrecision(7))


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         strings
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          click for more methods
        </a>
      </header>
    </div>
  );
}

export default App;
