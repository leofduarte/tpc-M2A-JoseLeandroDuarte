import { Item } from "../../types/items";
import { EditTodoItem2 } from "./EditTodoItem2";
import { TodoItem2 } from "./ItemTodo2";

interface TodoListProps {
    items: Item[];
    onToggle: (id: number, checked: boolean) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onSave: (id: number) => void;
    onCancel: (id: number) => void;
    onChange: (id: number, value: string) => void;
  }
  
  export const TodoList2 = (props: TodoListProps) => (
    <ul className="space-y-2">
      {props.items.length > 0 ? (
        props.items.map((item) =>
          !item.toChange ? (
            <TodoItem2 key={item.id} item={item} {...props} />
          ) : (
            <EditTodoItem2 key={item.id} item={item} {...props} />
          )
        )
      ) : (
        <li className="text-center">No items found</li>
      )}
    </ul>
  );