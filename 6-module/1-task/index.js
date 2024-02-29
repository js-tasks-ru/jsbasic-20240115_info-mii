/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.row = rows;
    //Создаем таблицу    
    this.elem = document.createElement('table');
    //Создание HTML структуры таблицы С помощью innerHTML в элемент таблицы this.elem добавляется HTML структура таблицы, включая thead с заголовками столбцов и tbody, в котором вызывается метод createRows(), который, вероятно, создает строки таблицы.
    this.elem.innerHTML =
      `
    <thead>
    <th>Имя</th>
    <th>Возраст</th>
    <th>Зарплата</th>
    <th>Город</th>
    <th></th>
    <tbody>${this.createRows()}<tbody>
    `;
    this.elem.addEventListener('click', (event) => event.target.closest('tr').remove());
    document.body.appendChild(this.elem);
  }

  //Здесь мы используем метод map() для преобразования массива строк в массив строк HTML, затем метод join('') для объединения строк в одну строку. Каждая строка представляет собой ячейку таблицы с именем, возрастом, зарплатой и городом пользователя, а также кнопкой для удаления.
  createRows() {
    let rowsData = this.row;
    //2. Объявляем переменную rowsHTML и присваиваем ей пустую строку. В эту переменную будем добавлять HTML-код для каждой строки таблицы.
    let rowsHTML = '';
//Каждую итерацию цикла добавляем к переменной rowsHTML кусок HTML-кода, представляющий строку таблицы. В этом куске кода вставляем значения из rowsData[i] (имя, возраст, зарплата, город) в ячейки таблицы. В последней ячейке добавляем кнопку "X" для каждой строки.
    for (let i = 0; i < rowsData.length; i++) {
        rowsHTML += 
            `<tr>
                <td>${rowsData[i].name}</td>
                <td>${rowsData[i].age}</td>
                <td>${rowsData[i].salary}</td>
                <td>${rowsData[i].city}</td>
                <td><button>X</button></td>
            </tr>`
        ;
    }
//Возвращаем собранную строку HTML для всех строк таблицы.
    return rowsHTML;
}
}