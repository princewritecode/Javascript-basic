let inputPassword = prompt("Enter a password");
if (inputPassword.length >= 15)
{
    console.log("Password is very strong");
}
else if (inputPassword.length < 10)
{
    console.log('passsord is weak');
}
else if (inputPassword.length >= 10)
{
    console.log('strong passwword');
}