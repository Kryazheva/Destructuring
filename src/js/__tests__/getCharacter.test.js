/* eslint-disable no-undef */
import getCharacter, { character } from '../app';


test('Проверка деструктурированного объекта', () => {
  const anwear = getCharacter(character);
  expect(anwear).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]);
});
