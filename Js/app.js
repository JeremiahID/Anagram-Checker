const FisrtWord = document.querySelector('#wordOne').toString();
const SecondWord = document.querySelector('#wordTwo').toString();
const WordChecker = document.querySelector('#wordChecker');
const ErrorMsg = document.querySelector('#errorMsg');

WordChecker.addEventListener('click', ()=>{
  console.log(typeof FisrtWord);
  console.log(typeof SecondWord);

  // a function to check the Anagram
  function Anagrams(str1, str2) {
    
    // Clean and sort the strings
    const cleanString = (str) =>
      str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  
    // Compare the cleaned strings
    return cleanString(str1) === cleanString(str2);
  }



  // error mesage for empty fields
  if(FisrtWord === '' || SecondWord === ''){
    ErrorMsg.style.display = "block";

  } else {
    ErrorMsg.style.display = "none";

    // passing the input via the function parameters
    if(Anagrams(FisrtWord, SecondWord)){
      console.log('test')
      alert('True')
    } else {
      console.log('not working')
      alert('False')
    }

  }

  FisrtWord.value = '';
  SecondWord.value = '';
  




})

