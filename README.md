lesson2

ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ:
Дописать нашу программу по видео:
1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)
2) Проверить, чтобы все работало и не было ошибок в консоли
3) Добавить папку со вторым уроком в свой репозиторий на GitHub

lesson2hard

ДОПОЛНИТЕЛЬНОЕ (УСЛОЖНЕННОЕ) ЗАДАНИЕ № 1:
Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице

1) Создать массив week и записать в него дни недели в виде строк
·        Вывести на экран все дни недели
·        Каждый из них с новой строчки
·        Выходные дни - жирным шрифтом
·        Текущий день - курсивом (пока можно задать текущий день вручную, без работы с объектом даты)

2) Создать массив arr = []
·        Записать в него 7 любых многозначных чисел в виде строк
·        Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)

3) Добавить папку с усложненным заданием в свой репозиторий на GitHub

ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ № 2:
1) Скачать файл с дополнительными задачами, прикрепленный в уроке
2) Прорешать задачки на понимание JS
·       Если возникают затруднения - воспользуйтесь console.log().
·       Ответ присылать не нужно

lesson1

ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ:
1) Создать HTML страницу и подключить к ней файл скрипта
2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
·      Первая будет спрашивать "Ваш бюджет на месяц?"
·      Вторая "Введите дату в формате YYYY-MM-DD"
3) Создать объект appData, который будет содержать такие данные:
·      бюджет (передаем сюда переменную из п.2)
·      данные времени - timeData (передаем сюда переменную из п.2)
·      объект с обязательными расходами - expenses (смотри пункт 4)
·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
·      массив данных с доп. доходом - income (оставляем пока пустым)
·      свойство savings (выставляем его как false)
4) Задать пользователю по 2 раза вопросы:
    “Введите обязательную статью расходов в этом месяце”
    “Во сколько обойдется?”
    Записать ответы в объект expenses в формате: 
    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
6) Проверить, чтобы все работало без ошибок в консоли
7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием

lesson1hard

ДОПОЛНИТЕЛЬНОЕ (УСЛОЖНЕННОЕ) ЗАДАНИЕ:
Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
1) Создать переменную num со значением 33721
·        Вывести в консоль произведение (умножение) цифр этого числа
2) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
·        Вывести на экран первые 2 цифры полученного числа
3) Создать свой репозиторий на GitHub и поместить туда папку с усложненным заданием
