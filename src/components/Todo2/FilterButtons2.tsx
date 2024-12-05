import styled from 'styled-components';
import { FilterType } from '../../types/items';

interface FilterButtonsProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
`;

const StyledButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  border: 1px solid;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#007BFF' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#6b7280')};
  border-color: ${({ isActive }) => (isActive ? '#007BFF' : '#d1d5db')};

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#0056b3' : '#f3f4f6')};
  }
`;

export const FilterButtons2 = ({ activeFilter, setActiveFilter }: FilterButtonsProps) => (
  <Container>
    {Object.values(FilterType).map((filter) => (
      <StyledButton
        key={filter}
        isActive={activeFilter === filter}
        onClick={() => setActiveFilter(filter)}
      >
        {filter}
      </StyledButton>
    ))}
  </Container>
);