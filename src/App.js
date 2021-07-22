import React from 'react';
const ItemList = () => (
  <ol>
 <li>Сделать зарядку</li>
 <li>Почистить зубы</li>
 <li>Съесть завтрак</li>
 <li>Пойти на работу</li>
 <li>Забрать пальто из химчистки</li>
 <li>Отвезти кота в вет клинику</li>
 <li>Забрать посылку с почты</li>
 <li>Купить хлеб</li>
</ol>
)

const App = () => (<div>
  <h2>Список дел</h2>
  <ItemList/>
</div>);

export default App;
