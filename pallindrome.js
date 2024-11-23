//pallindrome using function

function pallindrome(str)
{

    const reverseStr = str.split("").reverse().join("");
    if (reverseStr === str) return 'pallindrome';
    else
    {
        return 'not pallindrome';
    }

}
console.log(pallindrome('moom'));