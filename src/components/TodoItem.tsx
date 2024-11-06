import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Item } from "../types/items";

interface TodoItemProps {
    item: Item;
    onToggle: (id: number, checked: boolean) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
  }
  
  export const TodoItem = ({ item, onToggle, onEdit, onDelete }: TodoItemProps) => (
    <li className="flex flex-col space-y-2">
      <div className="space-x-2 place-items-center flex">
        <Checkbox
          className="h-6 w-6"
          checked={item.completed}
          onCheckedChange={(checked) => onToggle(item.id, !!checked)}
        />
        <Label>{item.name}</Label>
      </div>
      <div className="p-0 m-0 space-x-2 flex flex-auto">
        <Button variant="secondary" className="flex-1" onClick={() => onEdit(item.id)}>
          Edit
        </Button>
        <Button variant="destructive" className="flex-1" onClick={() => onDelete(item.id)}>
          Delete
        </Button>
      </div>
    </li>
  );