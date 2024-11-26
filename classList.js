const element = document.querySelector('#slogan');
console.dir(element);
element.classList.add('red');

if (element.classList.contains('re'))
{
    element.classList.remove('red');
}
else
{
    console.log('no such class as red exist');
}