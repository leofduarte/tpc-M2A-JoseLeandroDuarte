import styled from 'styled-components';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchText: string;
  isSearchVisible: boolean;
  setSearchText: (text: string) => void;
  setIsSearchVisible: (visible: boolean) => void;
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
`;

const SearchContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  width: 100%;
  height: ${({ isVisible }) => (isVisible ? 'auto' : '0')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  overflow: hidden;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  background-color: #f8f9fa;
  border: 1px solid #ccc;
`;

export const SearchBar2 = ({ searchText, isSearchVisible, setSearchText, setIsSearchVisible }: SearchBarProps) => (
  <Container>
    <ToggleButton onClick={() => setIsSearchVisible(!isSearchVisible)}>
      <Search className="h-5 w-5" />
    </ToggleButton>
    <SearchContainer isVisible={isSearchVisible}>
      <StyledInput
        type="text"
        placeholder="Search todos..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </SearchContainer>
  </Container>
);