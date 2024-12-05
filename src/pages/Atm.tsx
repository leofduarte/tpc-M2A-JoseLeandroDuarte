import { useEffect, useState } from "react";
import {
  ATMState,
  initialATMState,
  Transaction,
} from "../types/atm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  IconWallet,
  IconHistory,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import {
  deposit,
  withdraw,
  setError,
} from "../slices/bankingSlice";
import { RootState } from "../store/types";
import ATMLogin from "@/components/ATM/ATM-Login";

export default function ATM() {
  const { currentUser, balance, error } = useSelector(
    (state: RootState) => state.banking as ATMState
  );
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(0);
  const [hidenBalance, setHidenBalance] = useState<boolean>(false);
  const [history, setHistory] = useState<Transaction[]>(
    initialATMState.history
  );
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const handleDeposit = () => {
    if (amount <= 0) {
      dispatch(setError("Amount must be positive"));
      return;
    }

    dispatch(deposit(amount));

    const newTransaction: Transaction = {
      id: String(history.length + 1),
      type: "DEPOSIT",
      amount: amount,
      timestamp: new Date(),
      balance: balance + amount,
    };

    setHistory([...history, newTransaction]);
    setAmount(0);
  };

  const handleWithdraw = () => {
    if (amount <= 0) {
      dispatch(setError("Amount must be positive"));
      return;
    }


    if (amount > balance) {
      dispatch(setError("Insufficient funds"));
      return;
    }

    dispatch(withdraw(amount));

    const newTransaction: Transaction = {
      id: String(history.length + 1),
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      balance: balance - amount,
    };

    setHistory([...history, newTransaction]);
    setAmount(0);
  };

  useEffect(() => {
    console.log(history);
  }, [history]);

  const handleInitialDeposit = (initialAmount: number) => {
    const firstTransaction: Transaction = {
      id: "1",
      type: "INITIAL_DEPOSIT",
      amount: initialAmount,
      timestamp: new Date(),
      balance: initialAmount,
    };
    setHistory([firstTransaction]);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-md mx-auto">
        {currentUser ? (
          <>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center text-gray-800">
                  ATM
                </CardTitle>
                <p className="text-center text-gray-500">
                  Manage your transactions
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <IconWallet className="text-primary w-6 h-6" />
                    {hidenBalance ? (
                      <span className="text-2xl font-semibold">********</span>
                    ) : (
                      <span className="text-2xl font-semibold">
                        {balance} €
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    className="flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                    variant="outline"
                    onClick={() => setHidenBalance(!hidenBalance)}
                  >
                    <IconWallet className="w-4 h-4" />
                    <span>Balance</span>
                  </Button>
                  <Button
                    className="flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                    variant="outline"
                    onClick={() => setShowHistory(!showHistory)}
                  >
                    <IconHistory className="w-4 h-4" />
                    <span>History</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <Input
                    placeholder="Enter amount"
                    type="number"
                    value={amount}
                    onChange={(e) => {
                      setAmount(Number(e.target.value));
                    }}
                    className="text-center text-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="default"
                      className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 transition-colors"
                      onClick={handleDeposit}
                    >
                      <IconArrowDown className="w-4 h-4" />
                      <span>Deposit</span>
                    </Button>
                    <Button
                      variant="default"
                      className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 transition-colors"
                      onClick={handleWithdraw}
                    >
                      <IconArrowUp className="w-4 h-4" />
                      <span>Withdraw</span>
                    </Button>
                  </div>
                </div>
                {error && (
                  <div className="bg-red-50 border-red-200 border p-2 rounded-lg text-red-600">
                    {error}
                  </div>
                )}
              </CardContent>
            </Card>

            {showHistory && (
              <>
                {history.length > 0 ? (
                  <div className="mt-4 p-4 space-y-4">
                    <h3 className="text-lg font-semibold text-center">
                      Transaction History
                    </h3>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {history.map((transaction) => (
                        <div
                          key={transaction.id}
                          className={`p-3 rounded-lg ${
                            transaction.type === "WITHDRAW"
                              ? "bg-red-50 border-red-200"
                              : "bg-green-50 border-green-200"
                          } border`}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              {transaction.type === "WITHDRAW" ? (
                                <IconArrowUp className="w-4 h-4 text-red-600" />
                              ) : (
                                <IconArrowDown className="w-4 h-4 text-green-600" />
                              )}
                              <span className="font-medium text-black">
                                {transaction.type === "WITHDRAW"
                                  ? "Withdraw"
                                  : transaction.type === "INITIAL_DEPOSIT"
                                  ? "Initial Deposit"
                                  : "Deposit"}
                              </span>
                            </div>
                            <span className="font-semibold text-black">
                              {transaction.type === "WITHDRAW" ? "-" : "+"}$
                              {transaction.amount}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500 mt-1 flex justify-between">
                            <span>
                              {new Date(transaction.timestamp).toLocaleString()}
                            </span>
                            <span>Balance: ${transaction.balance}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-semibold text-center mt-4">
                      No transaction history
                    </h3>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <ATMLogin onInitialDeposit={handleInitialDeposit} />
        )}
      </div>
    </div>
  );
}
