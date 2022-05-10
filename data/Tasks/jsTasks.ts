import { ITask } from "../../interfaces/interfaces";

export const jsTasks: ITask[] = [
  {
    id: "1",
    category: "js",
    title: "Палиндром",
    descr: "Написать функцию проверки слова на палиндром",
    video: "eXjUz2Kuuw4",
    sandboxUrl:
      "https://codesandbox.io/embed/palindrome-dsy89p?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "2",
    category: "js",
    title: "Простое число",
    descr: "Написать функцию проверки на простое число (циклом и рекурсией)",
    video: "MxVMHIgH9fQ",
    sandboxUrl:
      "https://codesandbox.io/embed/prostoe-chislo-4gxemi?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "3",
    category: "js",
    title: "Факториал",
    descr: "Написать функцию на нахождение факториала числа (рекурсией)",
    video: "rh1mP02NFoM",
    sandboxUrl:
      "https://codesandbox.io/embed/musing-black-qiloej?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "4",
    category: "js",
    title: "Степень",
    descr: "Написать функцию возведения числа в степень (циклом и рекурсией)",
    video: "M2nmAAVFLzQ",
    sandboxUrl:
      "https://codesandbox.io/embed/mystifying-meadow-oi9t3q?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "5",
    category: "js",
    title: "Аргументы",
    descr:
      "Написать функцию, которая последовательно выводит все свои аргументы",
    video: "LeDMU9f5ULw",
    sandboxUrl:
      "https://codesandbox.io/embed/argumenty-st9gzz?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "6",
    category: "js",
    title: "Пример замыкания",
    descr: "Напиши пример замыкания функции",
    video: "YaGfHbT9xLY",
    sandboxUrl:
      "https://codesandbox.io/embed/primer-zamykaniya-ijvt80?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "7",
    category: "js",
    title: "Debounce",
    descr:
      "Написать аналог функцию debounce, принимающую на вход функцию и интервал",
    video: "7o5sRSBlKwo",
    sandboxUrl:
      "https://codesandbox.io/embed/keen-clarke-9nfvft?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "8",
    category: "js",
    title: "Promise all",
    descr:
      "Написать аналог promise.all() принимающую на вход массив промисов без значений и возвращающую один промис, который зарезолвится, когда все промисы из массива зарезолвятся. Без обработки ошибок, считаем, что все промисы успешные.",
    video: "-gdOFc8bqCE",
    sandboxUrl:
      "https://codesandbox.io/embed/shy-snow-822qsp?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "9",
    category: "js",
    title: "Сравнение массивов",
    descr:
      "У нас есть 2 массива arr1 и arr2 с одинаковым содержимым [1, 2], то что выведет arr1 == arr2? Как сравнить массивы, чтобы в примере вывелось true?",
    video: "ROOnAq4VhfE",
    sandboxUrl:
      "https://codesandbox.io/embed/sravnenie-massivov-gfwohk?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "10",
    category: "js",
    title: "Клонирование объекта",
    descr: "Сделать глубокую копию объекта",
    video: "6napu-MGQDo",
    sandboxUrl:
      "https://codesandbox.io/embed/holy-resonance-jt9ibt?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "11",
    category: "js",
    title: "Уникальные элементы массива",
    descr: "Сделать все элементы массива уникальными",
    video: "mIYymAuA7AI",
    sandboxUrl:
      "https://codesandbox.io/embed/laughing-orla-0z0d9x?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "12",
    category: "js",
    title: "Фибоначчи",
    descr: "Написать js-функцию, которая возвращает числа Фибоначчи",
    video: "6XOLmjKB4ls",
    sandboxUrl:
      "https://codesandbox.io/embed/funny-hill-lckfn8?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "13",
    category: "js",
    title: "Треугольник",
    descr: "Напишите цикл, который выводит треугольник из # в консоль",
    video: "CBBFGin6_0Y",
    sandboxUrl:
      "https://codesandbox.io/embed/cocky-mcclintock-oyumnk?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "14",
    category: "js",
    title:
      "Есть массив [{name: “width”, value: 10}, {name: “height”, value: 10}]",
    descr: "нужно вывести объект {width: 10, height: 10}",
    video: "m4qMknyBzSo",
    sandboxUrl:
      "https://codesandbox.io/embed/est-massiv-name-width-value-10-name-height-value-10-khgo5w?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "15",
    category: "js",
    title: "Дана строка, состоящая из букв A-Z",
    descr:
      "Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28 и сгенерирует любую ошибку, если на вход пришла невалидная строка",
    video: "K6gY_vQs54A",
    sandboxUrl:
      "https://codesandbox.io/embed/sleepy-dijkstra-0uzlwd?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "16",
    category: "js",
    title: "Сумма на счету",
    descr:
      "Написать ф-ю, принимающую сумму и срок вклада, и возвращающую сумму, которая будет на счету пользователя. Доходность вклада 10%, проценты начисляются каждый год",
    video: "0AohM_oOjBc",
    sandboxUrl:
      "https://codesandbox.io/embed/dank-flower-e6883x?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "17",
    category: "js",
    title: "Плоский массив",
    descr:
      "Написать функцию, которая преобразует массив вида [1, 2, [3, 4], [5, [6,7]], 8] в массив [1, 2, 3, 4, 5, 6, 7, 8]",
    video: "1Wl0XVBBOiQ",
    sandboxUrl:
      "https://codesandbox.io/embed/flamboyant-grothendieck-ddedhe?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "18",
    category: "js",
    title: "Написать функцию balanced",
    descr:
      "Принимает строку и возвращает true или false в зависимости от того, сбалансированы ли фигурные скобки",
    video: "C6CbIReHsNk",
    sandboxUrl:
      "https://codesandbox.io/embed/lucid-bohr-mr5id2?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "19",
    category: "js",
    title: "Перевернуть число",
    descr:
      "Написать функцию которая переворачивает число без перевода в строку",
    video: "0AohM_oOjBc",
    sandboxUrl:
      "https://codesandbox.io/embed/boring-herschel-1hhn9o?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "20",
    category: "js",
    title: "Площадь 3 фигур",
    descr:
      "Напишите функцию которая считала площадь 3 фигур (в функциональном стиле, в Объектно ориентированном стиле)",
    video: "x4Xf4mmbecE",
    sandboxUrl:
      "https://codesandbox.io/embed/sad-frost-468lov?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "21",
    category: "js",
    title: "Функция мемоизации",
    descr:
      "Написать функцию, которая будет мемоизировать другую функцию. Функция принимает один аргумент.",
    video: "chWI2gx8qNE",
    sandboxUrl:
      "https://codesandbox.io/embed/competent-elbakyan-f2g1cq?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "22",
    category: "js",
    title: "Прототипы",
    descr: "Прример прототипного наследования",
    video: "b55hiUlhAzI",
    sandboxUrl:
      "https://codesandbox.io/embed/smoosh-moon-q9vuxh?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "23",
    category: "js",
    title: "Уникальные символы",
    descr: "Все ли сомволы в строке уникальны",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/suspicious-wood-q1xzz3?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "24",
    category: "js",
    title: "Удаление всех повторяющихся значений в строке",
    descr:
      "Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/new-water-4vcmq3?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "25",
    category: "js",
    title: "Какая строка встречается чаще всего",
    descr:
      "Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/beautiful-dream-p595x3?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "26",
    category: "js",
    title: "Каррирование",
    descr:
      "Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).",
    video: "pxgMoBMMMXU",
    sandboxUrl:
      "https://codesandbox.io/embed/modest-bassi-zx4q18?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "27",
    category: "js",
    title: "Является ли массив подмножеством другого массива",
    descr:
      "Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/vigorous-waterfall-5mfxor?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "28",
    category: "js",
    title: "Перевернуть матрицу 3х3",
    descr:
      "Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/morning-cache-v6rqi5?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "29",
    category: "js",
    title: "Бинарный поиск",
    descr:
      "Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть -1.",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/holy-resonance-b4cl29?fontsize=14&hidenavigation=1&theme=dark",
  },
  {
    id: "30",
    category: "js",
    title: "Очередь с О(1) сложностью операций",
    descr:
      "Создайте очередь, в которой буду реализованы операции на добавление элементов в конец очереди, удаление первого элемента и вычисление размера очереди с сложностью алгоритма О(1) .",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/ochered-s-o-1-slozhnostyu-operaciy-pzude9?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "31",
    category: "js",
    title: "Deep Equal",
    descr:
      "Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/withered-bush-4s5mh3?fontsize=14&hidenavigation=1&theme=dark&view=editor  ",
  },
  {
    id: "32",
    category: "js",
    title: "Custom bind",
    descr: "Реализуйте функцию bind.",
    video: "x-EZy6gu_38",
    sandboxUrl:
      "https://codesandbox.io/embed/late-forest-kzdck4?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "33",
    category: "js",
    title: "Richest Customer Wealth",
    descr:
      "You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the customer has in the  bank. Return the wealth that the richest customer has. A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.",
    video: "-rUxM9h7smc",
    sandboxUrl:
      "https://codesandbox.io/embed/infallible-andras-9s5wed?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "34",
    category: "js",
    title: "Plane tickets",
    descr: "Составить историю полетов по имеющимся билетам",
    video: "VeWtYEX8NfU",
    sandboxUrl:
      "https://codesandbox.io/embed/shy-shadow-px2l3x?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
  {
    id: "35",
    category: "js",
    title: "Coder, Decoder",
    descr: "Написать функции шифрующие строку",
    video: "VeWtYEX8NfU",
    sandboxUrl:
      "https://codesandbox.io/embed/coder-decoder-5f1cdr?fontsize=14&hidenavigation=1&theme=dark&view=editor",
  },
];
