import { useState } from "react";
import EmojiPickerPopup from "../Layout/EmojiPickerPopup";
const AddExpenseForm = ({ onAddExpense }) => {
  const [income, setIncome] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });
  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  return (
    <div className="">
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <label htmlFor="category of expense" className=" px-2 font-medium">
        Expense Category
      </label>
      <input
        className="w-full py-3 px-4 border mb-2  mt-2 rounded-lg   font-medium bg-gray-200"
        value={income.source}
        onChange={({ target }) => handleChange("category", target.value)}
        label=" Expense Category"
        placeholder="Rent, Groceries"
        type="text"
      />

      <label htmlFor="Amount" className=" px-2 font-medium">
        Amount
      </label>
      <input
        className="w-full py-3 px-4 border mb-2 mt-2 rounded-lg font-medium bg-gray-200 "
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        type="number"
      />

      <label htmlFor="Date" className=" px-2 font-medium">
        Date
      </label>
      <input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        type="date"
        className="w-full py-3 px-4 border mb-2  mt-2 rounded-lg font-medium bg-gray-200"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-green-500 text-xl font-medium text-white py-1 px-2 rounded-lg"
          onClick={() => onAddExpense(income)}
        >
          Add Expense{" "}
        </button>
      </div>
    </div>
  );
};
export default AddExpenseForm;
