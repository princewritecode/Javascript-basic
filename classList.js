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

const btn = document.querySelector('#get-started');
const body = document.querySelector('body');
console.log(btn);

btn.addEventListener('click', (evt) =>
{
    console.log(evt);

});

