import React from 'react';
import styled from 'styled-components';

interface AddTodoFormProps {
  newItemText: string;
  setNewItemText: (text: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h2`
  text-align: center;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  background-color: #f8f9fa;
`;

const StyledButton = styled.button`
  background-color: #007BFF;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const AddTodoForm2 = ({ newItemText, setNewItemText, handleSubmit }: AddTodoFormProps) => (
  <Form onSubmit={handleSubmit}>
    <Title>What needs to be done?</Title>
    <StyledInput
      type="text"
      value={newItemText}
      onChange={(e) => setNewItemText(e.target.value)}
      placeholder="Enter a new item"
    />
    <StyledButton type="submit">Add</StyledButton>
  </Form>
);