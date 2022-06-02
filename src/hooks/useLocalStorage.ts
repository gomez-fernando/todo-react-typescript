import { useState } from 'react';

export function useLocalStorage<A>(
  itemName: string,
  initialState: A
): [A, (newItems: A) => void]{
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItems: A;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItems = initialState;
  } else{
    parsedItems = JSON.parse(localStorageItem);
  }

  const [items, setItems] = useState(parsedItems);
  const saveItems = (newItems: A) => {
    setItems(newItems);

    const stringifiedItems = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifiedItems);
  }

  return [items, saveItems];
}