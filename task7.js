
// Задача 1: Задайте значения M и N. Напишите программу,
// которая выведет все натуральные числа в промежутке 
// от M до N. Использовать рекурсию, не использовать циклы.

// вывод в консоль осуществляется на рекурсивном возврате.
export function PrintMNRec(M, N) {
    if (M > N) return;
    PrintMNRec(M + 1, N);
    console.log(M);
}

// вывод в консоль осуществляется на рекурсивном спуске.
export function PrintMNRec2(M, N) {
    if (M > N) return;
    console.log(M);
    PrintMNRec(M + 1, N);
}

// Задача 2: Напишите программу вычисления функции
// Аккермана с помощью рекурсии.
// Даны два неотрицательных числа m и n.

export function A(m, n) {
    if (m == 0) return n + 1;
    if (m > 0 && n == 0) A(m - 1, 1);
    if (m > 0 && n > 0) A(m - 1, A(m, n - 1));
    return 0;
}

// Результат вызова:
// console.log(A(1,1))
// 0
//
// console.log(A(1,0))
// 0
//
// console.log(A(0,0))
// 1


// Задача 3: Задайте произвольный массив.
// Выведете его элементы, начиная с конца.
// Использовать рекурсию, не использовать циклы.

export function printArr(arr, i) {
    if (i >= arr.length) return;
    console.log(arr[i]);
    printArr(arr, i + 1)
}

// Результат вызова:
// printArr(['a', 'b', 'c', 'd'], 0)
// a
// b
// c
// d

