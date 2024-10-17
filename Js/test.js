function cleanString(str) {
    if (typeof str !== "string") {
        console.error("Expected a string but got:", str);
        return "";  // Handle gracefully by returning an empty string
    }
    return str.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

function Anagrams(str1, str2) {
    const cleanedStr1 = cleanString(str1);
    const cleanedStr2 = cleanString(str2);

    return cleanedStr1.split("").sort().join("") === cleanedStr2.split("").sort().join("");
}

document.querySelector("button").addEventListener("click", function () {
    const input1 = document.querySelector("#input1").value;
    const input2 = document.querySelector("#input2").value;
    console.log("Comparing:", input1, input2);  // Debugging

    alert(Anagrams(input1, input2) ? "They are anagrams!" : "Not anagrams.");
});
