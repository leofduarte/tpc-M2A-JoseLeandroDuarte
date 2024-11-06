import { Item } from "../types/items";
import { EditTodoItem } from "./EditTodoItem";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
    items: Item[];
    onToggle: (id: number, checked: boolean) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onSave: (id: number) => void;
    onCancel: (id: number) => void;
    onChange: (id: number, value: string) => void;
  }
  
  export const TodoList = (props: TodoListProps) => (
    <ul className="space-y-2">
      {props.items.length > 0 ? (
        props.items.map((item) =>
          !item.toChange ? (
            <TodoItem key={item.id} item={item} {...props} />
          ) : (
            <EditTodoItem key={item.id} item={item} {...props} />
          )
        )
      ) : (
        <li className="text-center">No items found</li>
      )}
    </ul>
  );