import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Item } from "../types/items";

interface EditTodoItemProps {
    item: Item;
    onSave: (id: number) => void;
    onCancel: (id: number) => void;
    onChange: (id: number, value: string) => void;
  }
  
  export const EditTodoItem = ({ item, onSave, onCancel, onChange }: EditTodoItemProps) => (
    <li className="flex flex-col space-y-2">
      <div className="space-x-2 place-items-center flex">
        <Checkbox className="h-6 w-6" />
        <Input
          className="p-2"
          variant="default"
          type="text"
          value={item.name}
          onChange={(e) => onChange(item.id, e.target.value)}
        />
      </div>
      <div className="p-0 m-0 space-x-2 flex flex-auto">
        <Button className="flex-1" onClick={() => onCancel(item.id)}>
          Cancel
        </Button>
        <Button variant="secondary" className="flex-1" onClick={() => onSave(item.id)}>
          Save
        </Button>
      </div>
    </li>
  );