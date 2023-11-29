import React, { useState } from "react";

function NewPlantForm({ url, addNewPlant }) {
  const formOutline = {
    name: "",
    image: "",
    price: "",
  };

  const [form, setForm] = useState(formOutline);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: form.price
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        addNewPlant(data)
        setForm(formOutline);
      });
  };

  return (
    <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={handleChange}
          value={form.image}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleChange}
          value={form.price}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
