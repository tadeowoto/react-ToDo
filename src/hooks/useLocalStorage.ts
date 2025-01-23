import { useEffect, useState } from "react";

function useLocalStorage(itemName: string, initialValue: any) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItem);
          setItems(parsedItems);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
      setLoading(false);
    }, 2000);
  } , []);
  const saveItems = (newItem: any) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);
  };

  return {
    items,
    saveItems,
    loading,
    error,
  };
}

export { useLocalStorage };
