// реалізація iterate
function iterate(object, callback)
{
    for (const [key, value] of Object.entries(object))
    {
      callback(key, value, object);
    }
  }
  
  // використання iterate
  const obj = { a: 2, b: 4, c: 6 };
  console.log("Результат для iterate:");
  iterate(obj, (key, value) => {
    console.log({ key, value });
  });
  
  // функція store
  function store(value)
  {
    return function()
    {
      return value;
    };
  }
  
  // використання store
  const read = store(5);
  console.log("\nРезультат для store:");
  const value = read();
  console.log(value);
  
  // функція contract
  function contract(fn, ...types)
  {
    return function(...args)
    {

      // перевірка типів параметрів
      for (let i = 0; i < args.length; i++)
        {
        if (typeof args[i] !== types[i])
        {
          throw new TypeError(`Параметр ${i + 1} має бути типу: ${types[i]}`);
        }
      }
  
      // виклик функції та перевірка типу результату
      const result = fn(...args);
      if (typeof result !== types[types.length - 1])
        {
        throw new TypeError(`Результат має бути типу: ${types[types.length - 1]}`);      
        }
      return result;
    };
  }
  
  // використання contract з add
  const add = (a, b) => a + b;
  const add_nums = contract(add, 'number', 'number', 'number');
  console.log("\nOutput for add_nums:");
  const res1 = add_nums(2, 3);
  console.dir(res1);
  
  // використання contract з concat
  const concat = (s1, s2) => s1 + s2;
  const concat_strings = contract(concat, 'string', 'string', 'string');
  console.log("\nOutput for concat_strings:");
  const res2 = concat_strings('Not a', ' programmer');
  console.dir(res2);
  



  
