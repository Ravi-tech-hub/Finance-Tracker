import { useState } from "react";
import EmojiPickerPopup from "../Layout/EmojiPickerPopup";
const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });
  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  return (
    <div className="space-y-4">
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <label htmlFor="income-source" className="text-sm font-medium text-slate-700">
        Income Source
      </label>
      <input
        id="income-source"
        className="w-full py-3 px-4 border border-slate-200 mt-2 rounded-lg font-medium bg-slate-50 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Salary, freelance, investment"
        type="text"
      />

      <label htmlFor="income-amount" className="text-sm font-medium text-slate-700">
        Amount
      </label>
      <input
        id="income-amount"
        className="w-full py-3 px-4 border border-slate-200 mt-2 rounded-lg font-medium bg-slate-50 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        type="number"
      />

      <label htmlFor="income-date" className="text-sm font-medium text-slate-700">
        Date
      </label>
      <input
        id="income-date"
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        type="date"
        className="w-full py-3 px-4 border border-slate-200 mt-2 rounded-lg font-medium bg-slate-50 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-emerald-600 text-sm font-semibold text-white py-2.5 px-4 rounded-lg hover:bg-emerald-700"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};
export default AddIncomeForm;
