import React, { useState } from "react";

export default function Expt10() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([...items, { "item": item }]);
    setItem("");
  };

  const handleDelete = (itemToDelete) => {
    const filteredItems = items.filter((it) => it.item !== itemToDelete.item);
    setItems([...filteredItems]);
  };

  const idata = items.map((it, index) => (
    <tr key={index}>
      <td cellPadding="20">
        <span>{it.item}</span>
      </td>
      <td>
        <button onClick={() => handleDelete(it)}>X</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <input
        type="text"
        size="20"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAddItem}>ADD</button>
      <h1>useState() Demo</h1>
      <h1>Add User List</h1>
      <table border="" align="center">
        {idata}
      </table>
    </div>
  );
}
