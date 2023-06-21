import "./style.css";

const ProductItem = ({ onClick, number, btnText1, btnText2 }) => {
  return (
    <div className="product__item">
      <div className="product__item--img">
        <p className="productNumber">{`Product ${number}`}</p>
      </div>
      <div className="product__btns">
        <button className="product__btn">{btnText1}</button>
        <button onClick={onClick} className="product__btn">
          {btnText2}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
