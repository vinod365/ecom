import ProductItem from "../productItem";
import "./style.css";

const ProductList = ({
  productList,
  onClick,
  setCartList,
  btnText1,
  btnText2,
  heading,
}) => {
  return (
    <div className="product__list">
      <div className="heading">
        <p className="heading--text">{heading}</p>
      </div>
      <div className="proudct__list__items">
        {productList.length == 0 ? (
          <img className=".img" src="https://t4.ftcdn.net/jpg/04/75/01/23/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg"></img>
        ) : (
          productList.map((e) => (
            <ProductItem
              onClick={() => onClick(e)}
              btnText1={e}
              btnText2={btnText2}
              number={e}
            ></ProductItem>
          ))
        )}
        {/* {productList.map((e) => (
          <ProductItem
            onClick={() => onClick(e)}
            btnText1={e}
            btnText2={btnText2}
            number={e}
          ></ProductItem>
        ))} */}
      </div>
    </div>
  );
};

export default ProductList;
