function ListElem(options = {}){
  const ListElemHTML = `
  <li>
    <div>${options.time}</div>
    <img src=${options.img} alt='image'>
    <div>${options.temperature}</div>
  </li>
  `;

  return ListElemHTML;
}
