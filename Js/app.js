// getting user input
const FisrtWord = document.querySelector('#wordOne').value;
const SecondWord = document.querySelector('#wordTwo').value;
const WordChecker = document.querySelector('#wordChecker');
const ErrorMsg = document.querySelector('#errorMsg');

WordChecker.addEventListener('click', ()=>{

  // error mesage for empty fields
  // if(FisrtWord.value === '' || SecondWord.value === ''){
  //   ErrorMsg.style.display = "block";


  // } else {
  //   ErrorMsg.style.display = "none";
    
  // }


  console.log(typeof FisrtWord, typeof SecondWord);

  // a function to check the Anagram
  function Anagrams(str1,str2){
    
    // Clean and sort the strings
    const cleanString = (str) =>
      str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('').toString();

    // Compare the cleaned strings
    return cleanString(str1) === cleanString(str2);

  }

  // passing the input via the function parameters
  if(Anagrams(FisrtWord, SecondWord)) {
    console.log('they are anagrams');
  } else {
    alert("The two strings are not anagrams!");
  }


})



