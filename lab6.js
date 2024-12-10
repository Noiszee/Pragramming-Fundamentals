const pipe = (...funcs) =>
    {
    // перевірка чи всі агументи є ф-ями
    if (!funcs.every(func => typeof func === 'function'))
    {
      throw new TypeError('Усі аргументи мають бути функціями');
    }
  
    // повертаємо функцію, що полсідовно застосовує всі функції до вхідного зн-я
    return x => funcs.reduce((acc, func) => func(acc), x);  
    };
  
  const inc1 = x => ++x;
  const twice = x => x * 2;
  const cube = x => x ** 3;
  
  const f1 = pipe(inc1, twice, cube);
  console.log(f1(5));
  
  const f2 = pipe(inc1, inc1);
  console.log(f2(7));
  
  try
  {
    const f3 = pipe(inc1, 7, cube);
  }

  catch (error)
  {
    console.error(error.message); // помилка якщо параметри не є ф-їями
  }
  

// справа-наліво
const compose_safe = (...funcs) =>
{
    // перевірка що отримали справжні ф-ї
    if (!funcs.every(f => typeof f === 'function'))
    {
        throw new TypeError('всі аргументи мають бути функціями!');
    }
    
    // Відслідковуємо обробники помилок
    let listeners =
    {
        error: []    // старт з пустого мсаиву
    };
    
    const on = (event_name, callback) => 
    {
        if (event_name === 'error')
        {
            listeners.error.push(callback);
        }
    };
    
    // це основна робота
    const composed = input =>
    {
        // заюзав reduceRight, для виконання справа-наліво
        // не впевнений чи це найкращий спосіб, але він працює :)
        return funcs.reduceRight((result, curent_func) =>
        {
            try
            {
                let val = curent_func(result);
                return val;
            }

            catch (error)
            {
                listeners.error.forEach(handler =>
                {
                    handler(error);  // передаємо помилку кожному обробнику
                });

                return 0;
            }
        }, input);
    };
    
    // метод обробника подій
    composed.on = on;
    
    return composed;
};

// тестові ф-ї
const inc2 = x => x + 1;
const divide = x =>
    {
    // може бути помилка, якщо x дорівнює 0
    if (x === 0) throw new Error('Не можна ділити на нуль');
    return 1 / x;
    };
const double = x => x * 2;

const myFunc = compose_safe(double, divide, inc2);

// обробка помилок для консолі
myFunc.on('error', err => console.error('Error 1337:', err.message));

// тести
console.log(myFunc(1));
console.log(myFunc(0));







