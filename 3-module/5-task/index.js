function getMinMax(str) {
  const numbers = str.split(' ').filter(num => +num);

  // Находим минимальное и максимальное значение
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  // Возвращаем объект с минимальным и максимальным значением
  return { min,max };
}
