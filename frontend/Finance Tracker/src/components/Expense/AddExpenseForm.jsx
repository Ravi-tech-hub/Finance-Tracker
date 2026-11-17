import { useState } from "react";
import EmojiPickerPopup from "../Layout/EmojiPickerPopup";
const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });
  const handleChange = (key, value) =>
    setExpense({ ...expense, [key]: value });

  return (
    <div className="space-y-4">
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <label
        htmlFor="expense-category"
        className="text-sm font-medium text-slate-700"
      >
        Expense Category
      </label>
      <input
        id="expense-category"
        className="w-full py-3 px-4 border border-slate-200 mt-2 rounded-lg font-medium bg-slate-50 outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
        value={expense.category}
        onChange={({ target }) => handleChange("category", target.value)}
        label=" Expense Category"
        placeholder="Rent, groceries, transport"
        type="text"
      />

      <label
        htmlFor="expense-amount"
        className="text-sm font-medium text-slate-700"
      >
        Amount
      </label>
      <input
        id="expense-amount"
        className="w-full py-3 px-4 border border-slate-200 mt-2 rounded-lg font-medium bg-slate-50 outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
        value={expense.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        type="number"
      />

      <label htmlFor="expense-date" className="text-sm font-medium text-slate-700">
        Date
      </label>
      <input
        id="expense-date"
        value={expense.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        type="date"
        className="w-full py-3 px-4 border border-slate-200 mt-2 rounded-lg font-medium bg-slate-50 outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-rose-600 text-sm font-semibold text-white py-2.5 px-4 rounded-lg hover:bg-rose-700"
          onClick={() => onAddExpense(expense)}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};
export default AddExpenseForm;
