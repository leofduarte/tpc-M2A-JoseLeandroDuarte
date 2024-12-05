import { Button } from "../ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../slices/bankingSlice";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { User } from "../../types/atm";

interface ATMLoginProps {
  onInitialDeposit: (amount: number) => void;
}
export default function ATMLogin({ onInitialDeposit }: ATMLoginProps) {
  const [initialDepositAmount, setInitialDepositAmount] = useState<number>(0);
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<Omit<
    User,
    "balance"
  > | null>(null);

  const [users] = useState<Omit<User, "balance">[]>([
    { id: 1, name: "João", age: 25, email: "joao@email.com" },
    { id: 2, name: "Maria", age: 30, email: "maria@email.com" },
  ]);

  const handleCreateAccount = () => {
    if (selectedUser && initialDepositAmount > 0) {
      const newUser: User = {
        ...selectedUser,
        balance: initialDepositAmount,
      };
      dispatch(loginUser(newUser));
      onInitialDeposit(initialDepositAmount); 
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          ATM - Create Account
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {users.map((user) => (
            <Button
              key={user.id}
              variant={selectedUser?.id === user.id ? "default" : "outline"}
              onClick={() => setSelectedUser(user)}
              className="w-full"
            >
              {user.name}
            </Button>
          ))}
        </div>

        {selectedUser && (
          <div className="space-y-4">
            <div className="p-4 bg-gray-200 rounded-lg">
              <p>Name: {selectedUser.name}</p>
              <p>Email: {selectedUser.email}</p>
              <p>Age: {selectedUser.age}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">First Deposit</label>
              <Input
                className="p-2"
                type="number"
                value={initialDepositAmount}
                onChange={(e) =>
                  setInitialDepositAmount(Number(e.target.value))
                }
                placeholder="Enter initial balance"
                min="0"
              />
            </div>

            <Button
              onClick={handleCreateAccount}
              className="w-full"
              disabled={initialDepositAmount <= 0}
            >
              Create Account
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
