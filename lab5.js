// реалізація штуки для послідовного виконання функцій
function seq(...stuff)
{
    let funcs = [...stuff];

    let runner = function(input)
    {
        // перевірка, переданий аргумент ф-я чи значення
        if (typeof input === 'function')
        {
            funcs.push(input);

            return runner;
        } 

        else
        {
            let result = input;
            for(let fn of funcs)
            {
                result = fn(result);  // застосовуємо кожну функцію по черзі
            }

            return result;
        }
    };

    return runner;
}

// перевірка чи все працює
console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));

function array()
{
    let items = [];

    let wrapper = function(idx)
    {
        // просто ретурн всього що там є по індексу
        return items[idx];
    };

    wrapper.push = function(stuff)
    {
        items.push(stuff);
    };

    wrapper.pop = function()
    {
        // видалення і повернення останннього елементу
        if (items.length === 0) return undefined;

        return items.pop();
    };

    return wrapper;
}

let myArr = array();
myArr.push('first');
myArr.push('second');
myArr.push('third');

console.log(myArr(0));
console.log(myArr(1));
console.log(myArr(2));

// тест видалення
console.log(myArr.pop());
console.log(myArr.pop());
console.log(myArr.pop());
console.log(myArr.pop());






