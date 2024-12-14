// 1. цикл for
function sumFor(...numbers)
{
    let result = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        result += numbers[i];
    }

    return result;
}

// 2. for..of
function sumForOf(...nums)
{
    let sum = 0;

    for (const n of nums)
    {
        sum += n;
    }

    return sum;
}

// 3. старий добрий while
function sumWhile(...args)
{
    let total = 0;
    let i = 0;
    
    while (i < args.length)
    {
        total += args[i];
        i++;
    }

    return total;
}

// 4. через do..while
function sumDoWhile(...args)
{
    let sum = 0;
    let i = 0;
    // перевірка чи масив не пустий
    if (!args.length) 
    return 0;

    do
    {
        sum += args[i];
        i++;
    }

    while (i < args.length);
    return sum;
}

// 5. reduce найкоротший спосіб
function sumReduce(...nums)
{
    return nums.reduce((sum, current) =>  // можна було б написати коротше, але так красивіше :)
    {
        return sum + current;
    },0);
}

// перевірка роботи функцій
console.log(sumFor(1, 2, 3));
console.log(sumForOf(0));
console.log(sumWhile());
console.log(sumDoWhile(1, -1, 1));
console.log(sumReduce(10, -1, -1, -1));

// пошук найбільшого елемента в масиві
function max(matrix)  // була ідея використати Math.max і spread оператор, але я роблю це на наступний день і не пам'ятаю чому я забракував цю ідею
{
    let biggest = -Infinity;
    
    // проходимо по кожному рядку
    for (const row of matrix) {
        // по кожному елекменту
        for (const item of row) {
            if (item > biggest) {
                biggest = item;
            }
        }
    }
    return biggest;
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// задача 3: тривалість життя історичних постатей
function ages(people) {
    const results = {};
    
    for (const person in people) {
        const {born, died} = people[person];
        results[person] = died - born;
    }
    
    return results;
}

const persons = {
    Bodia_Chmil: { born: 1595, died: 1657 },
    Oppenheimer: { born: 1904, died: 1967 },
    Churchil: { born: 1874, died: 1965 },
    hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));




