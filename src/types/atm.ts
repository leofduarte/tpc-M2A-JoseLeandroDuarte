export interface Transaction {
  id: string;
  type: 'DEPOSIT' | 'WITHDRAW' | 'INITIAL_DEPOSIT';
  amount: number;
  timestamp: Date;
  balance: number;
}

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  balance: number;
}

export interface ATMState {
  currentUser: User | null;
  balance: number;
  history: Transaction[];
  error: string | null;
}

export interface OperationValidation {
  isValid: boolean;
  error?: string;
}

export const initialATMState: ATMState = {
  currentUser: null,
  balance: 0,
  history: [],
  error: null,
};