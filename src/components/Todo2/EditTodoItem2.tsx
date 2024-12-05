import styled from 'styled-components';
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Item } from "../../types/items";

interface EditTodoItemProps {
  item: Item;
  onSave: (id: number) => void;
  onCancel: (id: number) => void;
  onChange: (id: number, value: string) => void;
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
`;

export const EditTodoItem2 = ({ item, onSave, onCancel, onChange }: EditTodoItemProps) => (
  <ListItem>
    <ItemContainer>
      <Checkbox className="h-6 w-6" />
      <Input
        className="p-2"
        variant="default"
        type="text"
        value={item.name}
        onChange={(e) => onChange(item.id, e.target.value)}
      />
    </ItemContainer>
    <ButtonContainer>
      <Button className="flex-1" onClick={() => onCancel(item.id)}>
        Cancel
      </Button>
      <Button variant="secondary" className="flex-1" onClick={() => onSave(item.id)}>
        Save
      </Button>
    </ButtonContainer>
  </ListItem>
);