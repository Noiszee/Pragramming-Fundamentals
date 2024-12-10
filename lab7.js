function remove_element(array, item)
{
    const index = array.indexOf(item);
    if (index !== -1)
    {
        array.splice(index, 1);
    }
}

// використання remove_element
const array1 = [1, 2, 3, 4, 5, 6, 7];
remove_element(array1, 1);
console.log("Result for remove_element:", array1);
const array2 = ['Kiev', 'Beijing', 'Sofia', 'Sosnovka'];
remove_element(array2, 'Sofia');
remove_element(array2, 'Berlin');
console.log("Result for remove_element:", array2);

function remove_elements(array, ...items)
{
    for (const item of items)
    {
        remove_element(array, item);
    }
}

// використання remove_elements
const array3 = [2, 4, 6, 8, 10, 20, 40];
remove_elements(array3, 5, 1, 6, 10, 100);
console.log("Result for remove_elements:", array3);

const array4 = ['Kiev', 'Beijing', 'Lima', 'Sosnovka'];
remove_elements(array4, 'Lima', 'Berlin', 'Kiev', 'Sosnovka');
console.log("Result for remove_elements:", array4);

// unique
function unique(array)
{
    return Array.from(new Set(array));
}

// використання unique
const result1 = unique([2, 1, 1, 3, 2]);
console.log("Result for unique:", result1);

const result2 = unique(['top', 'bottom', 'top', 'left', ]);
console.log("Result for unique:", result2);

// difference
function difference(array1, array2)
{
    return array1.filter(item => !array2.includes(item));
}

// використання difference
const array5 = [7, -2, 10, 5, 0];
const array6 = [0, 10];
const result3 = difference(array5, array6);
console.log("Result for difference:", result3);

const array7 = ['Kharkiv', 'Kiev'];
const array8 = ['Kiev', 'London', 'Buharest'];
const result4 = difference(array7, array8);
console.log("Result for difference:", result4);





