//TODO:code wars stringy strings
/*
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size)
{
    // your code here
    let newStr = "";
    for (let i = 1; i <= size; i++)
    {
        if (i % 2 !== 0)
        {
            newStr += '1';
        }
        else
        {
            newStr += '0';
        }
    }
    return newStr;
}
console.log(stringy(7));


//TODO:no of decimal degits count

/*

Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

*/

function digits(n)
{
    // TODO

    return (String(n).split('').length);

}
console.log(digits(4324));


/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');
*/


function pigIt(str)
{
    let strToArray = str.split(' '); // Split the input string into an array of words
    let newStr = []; // Use an array to collect transformed words

    for (let word of strToArray)
    {
        if (/^[a-zA-Z]+$/.test(word))
        { // Check if the word consists only of letters
            newStr.push(word.slice(1) + word[0] + 'ay'); // Transform and add to array
        } else
        {
            newStr.push(word); // Leave punctuation untouched
        }
    }

    return newStr.join(' '); // Join transformed words into a single string without extra space
}

console.log(pigIt('Pig latin is cool!')); // Test with punctuation