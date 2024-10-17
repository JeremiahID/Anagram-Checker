const FisrtWord = document.querySelector('#wordOne');
const SecondWord = document.querySelector('#wordTwo');
const WordChecker = document.querySelector('#wordChecker');
const ErrorMsg = document.querySelector('#errorMsg');

WordChecker.addEventListener('click', ()=>{

  // error mesage for empty fields
  if(FisrtWord.value === '' || SecondWord.value === ''){
    ErrorMsg.style.display = "block";

  } else {
    ErrorMsg.style.display = "none";

    // passing the input via the function parameters
    if(Anagrams(FisrtWord.toString(), SecondWord.toString())){
      console.log('working');
      console.log(typeof FisrtWord);
      console.log(typeof SecondWord);
    } else {
      console.log('not working')
    }

  }

  FisrtWord.value = '';
  SecondWord.value = '';


})



// a function to check the Anagram
function Anagrams(str1, str2) {
  // Clean and sort the strings
  const cleanString = (str) =>
    str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  // Compare the cleaned strings
  return cleanString(str1) === cleanString(str2);
}