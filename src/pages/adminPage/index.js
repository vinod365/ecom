import "./style.css";
import ProductList from "../../components/productList";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const [vendorList, setVendorList] = useState([1, 2, 3]);
  const [approvalList, setApprovalList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setVendorList(JSON.parse(localStorage.getItem("VendorList")));
    setApprovalList(JSON.parse(localStorage.getItem("ApprovalList")));
    setProductList(JSON.parse(localStorage.getItem("ProductList")));
  }, []);

  function handleOnItemClick(e) {
    const temp = JSON.parse(localStorage.getItem("ProductList"));
    temp.push(e);
    console.log(temp);
    localStorage.setItem("ProductList", JSON.stringify(temp));
    setVendorList(JSON.parse(localStorage.getItem("VendorList")));
    setApprovalList(JSON.parse(localStorage.getItem("ApprovalList")));
  }
  function handleOnVendorClick(e) {
    const temp = JSON.parse(localStorage.getItem("ApprovalList"));
    temp.push(e);
    console.log(temp);
    localStorage.setItem("ApprovalList", JSON.stringify(temp));
    setVendorList(JSON.parse(localStorage.getItem("VendorList")));
    setApprovalList(JSON.parse(localStorage.getItem("ApprovalList")));
  }

  function handleOnRemoveClick(e) {
    const temp = JSON.parse(localStorage.getItem("ProductList"));
    console.log(temp);
    localStorage.setItem(
      "ProductList",
      JSON.stringify(temp.filter((el) => el != e))
    );
    setProductList(JSON.parse(localStorage.getItem("ProductList")));
  }

  function handleOnApproveClick(e) {
    const temp = JSON.parse(localStorage.getItem("ApprovalList"));
    // console.log(temp);
    localStorage.setItem(
      "ApprovalList",
      JSON.stringify(temp.filter((el) => el != e))
    );

    const temp2 = JSON.parse(localStorage.getItem("ProductList"));

    temp2.push(e);

    localStorage.setItem("ProductList", JSON.stringify(temp2));

    setApprovalList(JSON.parse(localStorage.getItem("ApprovalList")));
    setProductList(JSON.parse(localStorage.getItem("ProductList")));
  }

  return (
    <div className="custmer__page">
      <ProductList
        onClick={handleOnRemoveClick}
        productList={productList}
        btnText2={"Remove"}
        heading={"Item List"}
      ></ProductList>
      <ProductList
        onClick={handleOnApproveClick}
        productList={approvalList}
        setCartList={setApprovalList}
        btnText2={"Approve"}
        heading={"Approval List"}
      ></ProductList>
    </div>
  );
};

export default AdminPage;
