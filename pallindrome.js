//pallindrome using function

function pallindrome(str)
{
    const reverseStr = str.split("").reverse().join("");
    return (reverseStr === str) ? ('pallindrome') : ('not pallindrome');
}
console.log(pallindrome('moom'));
