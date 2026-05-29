import { useState } from "react";

export const AddTransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    customerName: "",
    amount: "",
    date: "",
    product: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.customerName || !form.amount || !form.date) return;

    onAdd({
      transactionId: Date.now(),
      customerName: form.customerName.trim(),
      amount: Number(form.amount),
      purchaseDate: form.date,
      product: form.product.trim(),
    });

    setForm({
      customerName: "",
      amount: "",
      date: "",
      product: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card form-grid">
      <h2>Add Transaction</h2>

      <div className="row">
        <div className="field">
          <label>Customer Name</label>
          <input
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>

        <div className="field">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            placeholder="100"
          />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>Purchase Date</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Product</label>
          <input
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="Shoes"
          />
        </div>
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
};