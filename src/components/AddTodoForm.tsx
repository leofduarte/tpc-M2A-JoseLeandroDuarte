import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface AddTodoFormProps {
    newItemText: string;
    setNewItemText: (text: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
  }
  
  export const AddTodoForm = ({ newItemText, setNewItemText, handleSubmit }: AddTodoFormProps) => (
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
      <h2 className="text-center">What needs to be done?</h2>
      <Input
        className="p-2"
        variant="default"
        type="text"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Enter a new item"
      />
      <Button variant="secondary" type="submit">Add</Button>
    </form>
  );