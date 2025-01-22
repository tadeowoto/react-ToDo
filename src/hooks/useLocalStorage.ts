import { useState } from "react";

function useLocalStorage(itemName : string, initialValue : any) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItems;
  
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems = []
    }else{
      parsedItems = JSON.parse(localStorageItem);
    }
    const [items, setItems] = useState(parsedItems);
    const saveItems = (newItem : any) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem)
    }
  
    return [items , saveItems]
    
  }

  export { useLocalStorage }