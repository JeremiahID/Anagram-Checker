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
  }

  //
  const cleanString = (str) =>
    str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');


  //


})


/*

// this is the Anagram function
function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanString = (str) =>
      str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  
    return cleanString(str1) === cleanString(str2);
  }
  
  // Test cases
  console.log(areAnagrams('listen', 'silent')); // true
  console.log(areAnagrams('anagram', 'nagaram')); // true
  console.log(areAnagrams('hello', 'world')); // false
  console.log(areAnagrams('School master', 'The classroom')); // true
  
  */