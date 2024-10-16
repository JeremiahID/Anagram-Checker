function areAnagrams(str1, str2) {
    
    // Clean and sort the strings
    const cleanString = (str) =>
      str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  
    // Compare the cleaned strings
    return cleanString(str1) === cleanString(str2);
}
  
// Get user input
const string1 = prompt("Enter the first string:");
const string2 = prompt("Enter the second string:");

// Check if the inputs are anagrams
if (areAnagrams(string1, string2)) {
alert("The two strings are anagrams!");
} else {
alert("The two strings are NOT anagrams.");
}
  