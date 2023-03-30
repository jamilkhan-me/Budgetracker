import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="date" min="2019-01-01" max="2025-01-01" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;