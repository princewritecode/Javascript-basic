document.write('<h1>Hello world</h1>');
for (let i = 1; i < 5; i++)
{
    for (let j = 1; j < i; j++)
    {
        document.write('*');
    }
    document.write('<br>');
}
const items = document.querySelectorAll('.item');
console.log(items);
for (let item of items)
{
    item.classList.add('red');
}