"use client";

import { useState } from "react";
import { CircleUserRound } from "lucide-react";

export default function BankApp() {
  //   const [balance, setBalance] = useState(1000000);

  let balance = 1000000;

  // Deposit amounts
  const depositAmounts = [100, 200, 500, 1000];

  // Withdraw amounts
  const withdrawAmounts = [100, 200, 500, 1000];

  const updateBalance = (amount: number, isDeposit: boolean) => {
    if (isDeposit) {
      balance += amount;
    } else {
      if (balance >= amount) {
        balance -= amount;
      } else {
        alert("Insufficient funds for this withdrawal.");
      }
    }
    console.log(`Current Balance: $${balance.toLocaleString()}`);
  };

  return (
    <div className="bg-white max-w-sm mx-auto p-4 lg:p-6 lg:max-w-3xl lg:ml-0 rounded-lg border-2 border-gray-300">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">Welcome back</h3>
        {/* <CircleUserRound /> */}
      </div>
      <p className="text-xl">Balance: ${balance.toLocaleString()}</p>{" "}
      {/* Format balance with commas */}
      <section className="flex flex-col lg:flex-row lg:gap-10">
        <section>
          <h4>Save</h4>
          <div className="flex space-x-2">
            {depositAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => updateBalance(amount, true)}
                className="bg-black text-white px-4 py-2 transform transition-transform duration-200 active:scale-95"
              >
                ${amount}
              </button>
            ))}
          </div>
        </section>
        <section>
          <h4>Withdraw</h4>
          <div className="flex space-x-2">
            {withdrawAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => updateBalance(amount, false)}
                className="bg-black text-white px-4 py-2 transform transition-transform duration-200 active:scale-95"
              >
                ${amount}
              </button>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
