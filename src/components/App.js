import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [itemCategory, setItemCategory] = useState('Produce')
  const [itemName, setItemName] = useState('')


  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
      items={items}
      setItems={setItems}
      itemName={itemName}
      setItemName={setItemName}
      itemCategory={itemCategory}
      setItemCategory={setItemCategory}
      />
    </div>
  );
}

export default App;
