# JS_Week14
JavaScript Hometask (Mas, Objects)


### Вопросы 💎

1. Что называется массивом? 

Это набор упорядоченных элементов.

2. С какого порядкового номера начинаются массивы?

с 0

3. Сколько значений может иметь массив?

Множество

4. Как можно получить значение текстового поля из данной формы? (Форма одна)

document.querySelector(’input’).value
    
    ```jsx
    <form action="start.php" method="post" name="fld">
    	<input type="text" name="field" value="Text field">
    	<input type="submit" value="Старт" name="btn">
    </form>
    
    ```
    
5. Какой результат работы данного скрипта?

5

    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas[3]);
    ```
    
6. Какой результат работы данного скрипта?

не задана переменная mas3, будет ошибка
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas3);
    ```
    
7. Что делает строка let mas = new Array()?

Создает массив без элементов

8. Может ли массив состоять из элементов разных типов?

Да, может

9. Укажите длину массива после исполнения следующего кода:

2
    
    ```jsx
    let a = new Array(2);
    a[1] = null;
    ```
    
10. Что выведет консоль?

Roma
    
    ```jsx
    const students = [“Lena", “Olya", "Ylia", "Roma" ,  "Vova" ];
    console.log(students[3]);
    ```
    
11. Что выведет третья строка?

Яблоко, Лимон, Ананас
