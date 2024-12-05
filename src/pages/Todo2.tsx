import React, { useState, useEffect } from "react";
import "../App.css";
import { Item, FilterType } from "../types/items";
import { AddTodoForm2 } from "../components/Todo2/AddTodoForm2";
import { TodoHeader } from "../components/Todo/HeaderTodo";
import { SearchBar2 } from "../components/Todo2/SearchBar2";
import { FilterButtons2 } from "../components/Todo2/FilterButtons2";
import { TodoList2 } from "../components/Todo2/ListTodo2";

function Todo2() {
  const [items, setItems] = React.useState<Item[]>([
    { id: 1, name: "Buy groceries", completed: false, toChange: false },
    { id: 2, name: "Walk the dog", completed: true, toChange: false },
    { id: 3, name: "Do laundry", completed: false, toChange: false },
  ]);
  const [newItemText, setNewItemText] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>(FilterType.ALL);
  const [searchText, setSearchText] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const initialMaxId = Math.max(...[0, ...items.map((item) => item.id)]);
  const [nextId, setNextId] = useState(initialMaxId + 1);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesFilter = (() => {
      switch (activeFilter) {
        case FilterType.ACTIVE:
          return !item.completed;
        case FilterType.COMPLETED:
          return item.completed;
        case FilterType.ALL:
        default:
          return true;
      }
    })();

    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    document.title = 'P8 - ' + items.length + ' items';
  }, [items]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;

    const newItem: Item = {
      id: nextId,
      name: newItemText,
      completed: false,
      toChange: false,
    };

    setItems([...items, newItem]);
    setNewItemText("");
    setNextId(nextId + 1);

    console.log("item added:", items);
  };

  return (
    <div className="w-full justify-center items-center flex flex-col my-8">
      <div className="w-3/5 space-y-4">
        <TodoHeader />
        <SearchBar2
          searchText={searchText}
          isSearchVisible={isSearchVisible}
          setSearchText={setSearchText}
          setIsSearchVisible={setIsSearchVisible}
        />
        <AddTodoForm2
          newItemText={newItemText}
          setNewItemText={setNewItemText}
          handleSubmit={handleSubmit}
        />
        <FilterButtons2
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <TodoList2
          items={filteredItems}
          onToggle={(id, checked) => {
            setItems(
              items.map((i) => (i.id === id ? { ...i, completed: checked } : i))
            );
          }}
          onEdit={(id) => {
            setItems(
              items.map((i) => (i.id === id ? { ...i, toChange: true } : i))
            );
          }}
          onDelete={(id) => {
            setItems(items.filter((i) => i.id !== id));
          }}
          onSave={(id) => {
            setItems(
              items.map((i) => (i.id === id ? { ...i, toChange: false } : i))
            );
          }}
          onCancel={(id) => {
            setItems(
              items.map((i) => (i.id === id ? { ...i, toChange: false } : i))
            );
          }}
          onChange={(id, value) => {
            setItems(
              items.map((i) => (i.id === id ? { ...i, name: value } : i))
            );
          }}
        />
      </div>
    </div>
  );
}

export default Todo2;
