import "./style.css";
import ProductList from "../../components/productList";
import { useEffect, useState } from "react";

const VendorPage = () => {
  const [vendorList, setVendorList] = useState([1, 2, 3]);
  const [approvalList, setApprovalList] = useState([]);

  useEffect(() => {
    setVendorList(JSON.parse(localStorage.getItem("VendorList")));
    setApprovalList(JSON.parse(localStorage.getItem("ApprovalList")));
  }, []);

  function handleOnVendorClick(e) {
    const temp = JSON.parse(localStorage.getItem("ApprovalList"));
    temp.push(e);
    console.log(temp);
    localStorage.setItem("ApprovalList", JSON.stringify(temp));
    setVendorList(JSON.parse(localStorage.getItem("VendorList")));
    setApprovalList(JSON.parse(localStorage.getItem("ApprovalList")));
  }

  function handleOnRemoveClick(e) {
    const temp = JSON.parse(localStorage.getItem("ApprovalList"));
    console.log(temp);
    localStorage.setItem(
      "ApprovalList",
      JSON.stringify(temp.filter((el) => el != e))
    );
    setApprovalList(JSON.parse(localStorage.getItem("ApprovalList")));
  }

  return (
    <div className="custmer__page">
      <ProductList
        onClick={handleOnVendorClick}
        productList={vendorList}
        btnText2={"Add for approval"}
        heading={"Vendor List"}
      ></ProductList>
      <ProductList
        onClick={handleOnRemoveClick}
        productList={approvalList}
        setCartList={setApprovalList}
        btnText2={"Remove"}
        heading={"Approval List"}
      ></ProductList>
    </div>
  );
};

export default VendorPage;
