import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {items, setItems, itemName, setItemName, itemCategory, setItemCategory} ) {

  function onItemFormSubmit(event) {
    event.preventDefault()
    const newId = uuid()
    const newItem = {id: newId, name: itemName, category: itemCategory}
    if (newItem.name !== '') {
      setItems([...items, newItem])
    } else alert('New Item must have a name')
    setItemCategory('Produce')
    event.target.reset()
  }

  function changeItemName(event) {
    setItemName(event.target.value)
  }

  function changeItemCategory(event) {
    setItemCategory(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={changeItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={changeItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
