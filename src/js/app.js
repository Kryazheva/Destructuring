/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
'use strict';

export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
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
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

// eslint-disable-next-line no-unused-vars
const getCharacter = ({ special }) => {
  return special.map(({
    id, name, icon, description,
  }) => ({
    id, name, icon, description: description || 'Описание недоступно',
  }));
};

export default getCharacter;
