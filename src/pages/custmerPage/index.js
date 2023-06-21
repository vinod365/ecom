import "./style.css";
import ProductList from "../../components/productList";
import { useEffect, useState } from "react";

const CustmerPage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    setCartList(JSON.parse(localStorage.getItem("CartList")));
    setProductList(JSON.parse(localStorage.getItem("ProductList")));
  }, []);

  function handleOnAddToCartClick(e) {
    const temp = JSON.parse(localStorage.getItem("CartList"));
    temp.push(e);
    console.log(temp);
    localStorage.setItem("CartList", JSON.stringify(temp));
    setCartList(JSON.parse(localStorage.getItem("CartList")));
  }

  function handleOnRemoveClick(e) {
    const temp = JSON.parse(localStorage.getItem("CartList"));
    console.log(temp);
    localStorage.setItem(
      "CartList",
      JSON.stringify(temp.filter((el) => el != e))
    );
    setCartList(JSON.parse(localStorage.getItem("CartList")));
  }

  return (
    <div className="custmer__page">
      <ProductList
        onClick={handleOnAddToCartClick}
        productList={productList}
        btnText2={"Add to cart"}
        heading={"Product List"}
      ></ProductList>
      <ProductList
        onClick={handleOnRemoveClick}
        productList={cartList}
        setCartList={setCartList}
        btnText2={"Remove"}
        heading={"Your cart"}
      ></ProductList>
    </div>
  );
};

export default CustmerPage;
