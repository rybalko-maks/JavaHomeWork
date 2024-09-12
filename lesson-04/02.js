/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++){
        let isUnique = true;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (array[i] === uniqueArray[j]){
            isUnique - false;
            break;
            }
        }
        if (isUnique){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
