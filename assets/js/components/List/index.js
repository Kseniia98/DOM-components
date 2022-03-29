function List(options = {}){

  let listString = '';

  for(let i = 0; i < options.blocks.length; i++){
    const value = options.blocks[i];

    listString += ListElem(value);
  }

  const ListHTML = `
    <ul>
      ${listString}
    </ul>
  `

  return ListHTML;
}