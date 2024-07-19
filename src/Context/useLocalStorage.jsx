import React from "react";

function useLocalStorage(itemName, defaultValue) {
  const [item, setItem] = React.useState(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      return localStorageItem ? JSON.parse(localStorageItem) : defaultValue;
    } catch (error) {
      console.error("Error parsing localStorage item:", error);
      return defaultValue;
    }
  });

  React.useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(defaultValue));
        parsedItem = defaultValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
    } catch (error) {}
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      console.error("Error saving localStorage item:", error);
    }
  };

  return { item, saveItem };
}

export { useLocalStorage };
