import styled from 'styled-components';
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Item } from "../../types/items";

interface TodoItemProps {
  item: Item;
  onToggle: (id: number, checked: boolean) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
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

const StyledButton = styled.button`
  flex: 1;
  border: 0;
  border-radius: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #007BFF;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledButtonDestructive = styled(StyledButton)`
  background-color: #dc3545;
  &:hover {
    background-color: #c82333;
  }
`;

export const TodoItem2 = ({ item, onToggle, onEdit, onDelete }: TodoItemProps) => (
  <ListItem>
    <ItemContainer>
      <Checkbox
        className="h-6 w-6"
        checked={item.completed}
        onCheckedChange={(checked) => onToggle(item.id, !!checked)}
      />
      <Label>{item.name}</Label>
    </ItemContainer>
    <ButtonContainer>
      <StyledButton onClick={() => onEdit(item.id)}>
        Edit
      </StyledButton>
      <StyledButtonDestructive onClick={() => onDelete(item.id)}>
        Delete
      </StyledButtonDestructive>
    </ButtonContainer>
  </ListItem>
);