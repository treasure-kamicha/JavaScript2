function reverseString(str) {
    return str.split("").reverse().join("");

}
console.log(reverseString("Tell Treasure"));


function countCharacters (str) {
    return str.length;

}
    console.log(countCharacters("Tell Treasure"));

function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capitalizeWords("tell treasure"));

