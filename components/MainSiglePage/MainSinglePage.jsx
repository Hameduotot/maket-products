import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../features/Readucers/getSinglePage";
import styles from "./MainSinglePage.module.css";

function MainSinglePage({ data }) {
  const [urlImg, setUrlImg] = useState(null);
  const handleClicked = (url) => {
    setUrlImg(url);
  };
  const toCapitalizeWord = (sentence) => {
    return sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
  };
  const dispatch = useDispatch();

  const router = useRouter();
  return (
    <div>
      <div className={styles.navigation}>
        <h1>
          <span>Home / Products </span>
          <span> / {toCapitalizeWord(data.name)}</span>
        </h1>
      </div>
      <a
        className={styles.backtoproducts}
        onClick={() => router.push("/product")}
      >
        BACK TO PRODUCTS
      </a>
      <div className={styles.details}>
        <div className={styles.left}>
          <h2>{toCapitalizeWord(data.name)}</h2>
          <div></div>
          <div>{data.price.toFixed(2) / 100} $</div>
          <div></div>
          <p>{data.description}</p>
          <div>Available : In Stock</div>
          <div>SKU : RecQ0fMd8T0Vk211E</div>
          <div>Brand : Liddy</div>
          <hr />
          <div>Colors</div>
          <div>
            <button>+</button>
            <span>number</span>
            <button>-</button>
          </div>
          <a
            className={styles.backtoproducts}
            onClick={() => dispatch(addToCard(data))}
          >
            ADD TO CARD{" "}
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.imgbig}>
            <img src={urlImg === null ? data.images[0].url : urlImg} />
          </div>
          <div className={styles.imgs}>
            {data.images.map((img) => (
              <div
                key={img.id}
                className={styles.immes}
                onClick={() => handleClicked(img.url)}
              >
                <img src={img.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSinglePage;
