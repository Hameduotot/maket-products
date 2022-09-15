import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import card from "../../pages/card";
import styles from "./MainCard.module.css";
function MainCard({ CardId }) {
  const cards = useSelector((state) => {
    return Object.keys(state.singlePageData.card).map(
      (id) => state.post.entities[id]
    );
  });
  useEffect(() => console.log("cccc", cards), [cards]);
  // const data = 0

  // {id: 'recEHmzvupvT8ZONH', name: 'albany sectional', price: 109999, image: 'https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52', colors: Array(2), …}
  // 1
  // :
  // {id: 'rec5NBwZ5zCD9nfF0', name: 'albany table', price: 309999, image: 'https:
  // };
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.titles}>
          <li>Item</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
        <hr />
        {cards.map((card) => (
          <>
            <ul className={styles.products}>
              <li>
                <div>
                  <img src={card.image} width={"50px"} height={"50px"} />
                </div>
              </li>
              <li>${card.price / 100}</li>
              <li>{}</li>
              <li>Subtotal</li>
            </ul>
            <hr />
          </>
        ))}
      </div>
    </>
  );
}

export default MainCard;
