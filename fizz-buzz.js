let enterNumber = Number(prompt("Enter a number:"));
if (enterNumber % 3 === 0 && enterNumber % 5 === 0)
{
    alert("Number is divisible by 3 and 5");
}
else if (enterNumber % 3 === 0)
{
    alert("Number is divisible by 3");
}
else if (enterNumber % 5 === 0)
{
    alert("Number is divisible by 5");
}
else
{
    alert("Number is not divisible by 3 and 5");
}

