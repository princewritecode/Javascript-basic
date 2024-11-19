let number = Number(prompt("Enter a number"));
if (number % 4 === 0 && number % 100 !== 0 || number % 400 === 0)
{
    console.log('The year is leap');
}
else
{
    console.log('The year is not leap');
}