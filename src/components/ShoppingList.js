import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

//Deliverable: itsemsToDisplay must match search

function ShoppingList({ items, setItems, itemName, setItemName, itemCategory, setItemCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const [searchText, setSearchText] = useState('')

  function onSearchChange(event) {
    setSearchText(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    
    if (selectedCategory === "All" || item.category === selectedCategory) {
      return item.name === searchText || searchText === ''
    }
    return false
  })

  return (
    <div className="ShoppingList">
      <ItemForm
      items={items}
      setItems={setItems}
      itemName={itemName}
      setItemName={setItemName}
      itemCategory={itemCategory}
      setItemCategory={setItemCategory}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} searchText={searchText} setSearchText={setSearchText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
