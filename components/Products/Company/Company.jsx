import React from "react";

function Company() {
  return (
    <div>
      <select name="products" id="products">
        <option value="all">all</option>
        <option value="marcos">marcos</option>
        <option value="liddy">liddy</option>
        <option value="ikea">ikea</option>
        <option value="caressa">caressa</option>
      </select>
    </div>
  );
}

export default Company;
