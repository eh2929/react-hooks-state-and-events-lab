import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setIncCart] = useState(false);

  const handleButtonClick = () => {
    setIncCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
