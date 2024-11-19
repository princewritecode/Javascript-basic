let inputNumber = Number(prompt("Enter a number"));
let inputNumber1 = Number(prompt("Enter another number"));

if (inputNumber > 0 && inputNumber1 > 0)
{
    console.log('The number is positive');
}
else if (inputNumber < 0 && inputNumber1 < 0)
{
    console.log('The number is negative');
}
else
{
    console.log('The number is zero');
}