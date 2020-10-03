import React, { useState } from "react";
import classes from "./ProductForm.module.css";

const ProductForm = () => {
  const [productForm, setProductForm] = useState({
    senderName: "",
    senderSurname: "",
    senderAddress: "",
    receiverName: "",
    receiverSurname: "",
    receiverAddress: "",
    goodsType: "convert",
    delivery: "standart",
  });

  const changeField = (e, type) => {
    const value = e.currentTarget.value;

    switch (type) {
      case "senderName":
        setProductForm({ ...productForm, senderName: value });
        break;
      case "senderSurname":
        setProductForm({ ...productForm, senderSurname: value });
        break;
      case "senderAddress":
        setProductForm({ ...productForm, senderAddress: value });
        break;
      case "receiverName":
        setProductForm({ ...productForm, receiverName: value });
        break;
      case "receiverSurname":
        setProductForm({ ...productForm, receiverSurname: value });
        break;
      case "receiverAddress":
        setProductForm({ ...productForm, receiverAddress: value });
        break;
      case "goodsType":
        setProductForm({ ...productForm, goodsType: value });
        break;
      case "delivery":
        setProductForm({ ...productForm, delivery: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const basePrice = 5;
    let sum = basePrice;

    if(productForm.goodsType === 'box'){
      sum+=5;
    } else if (productForm.goodsType === 'convert'){
      sum+=3;
    } else {
      sum+=1;
    }

    if(productForm.delivery === ''){
      sum+=5;
    } else {
      sum+=3;
    } 

    alert(JSON.stringify(productForm, 0, 2));
    alert(`sum: ${sum}`)
  }

  return (
    <>
      <h2 className={classes.formTitle}>Product Form</h2>
      <form action="" className={classes.productForm}>
        <label htmlFor="senderName">Sender first name</label>
        <input
          type="text"
          name="senderName"
          onChange={(e) => changeField(e, "senderName")}
          placeholder="Sender first name..."
        />

        <label htmlFor="senderSurname">Sender surname</label>
        <input
          type="text"
          name="senderSurname"
          placeholder="Sender last name..."
          onChange={(e) => changeField(e, "senderSurname")}
        />

        <label htmlFor="senderAddress">Sender address</label>
        <input
          type="address"
          name="senderAddress"
          placeholder="senderAddress"
          onChange={(e) => changeField(e, "senderAddress")}
        />

        <label htmlFor="receiverName">Receiver first name</label>
        <input
          type="text"
          name="receiverName"
          placeholder="Receiver first name..."
          onChange={(e) => changeField(e, "receiverName")}
        />

        <label htmlFor="receiverSurname">Receiver surname</label>
        <input
          type="text"
          name="receiverSurname"
          placeholder="Receiver last name..."
          onChange={(e) => changeField(e, "receiverSurname")}
        />

        <label htmlFor="receiverAddress">Receiver address</label>
        <input
          type="receiverAddress"
          name="receiverAddress"
          placeholder="Receiver address"
          onChange={(e) => changeField(e, "receiverAddress")}
        />

        <p>Тип груза</p>

        <div className={classes.radios}>
          <div>
            <label htmlFor="convert">Convert</label>
            <input
              type="radio"
              name="goodsType"
              id="convert"
              value="convert"
              checked={'convert' === productForm.goodsType}
              onChange={(e) => changeField(e, "goodsType")}
            />
          </div>

          <div>
            <label htmlFor="pocket">Pocket</label>
            <input
              type="radio"
              name="goodsType"
              id="pocket"
              value="pocket"
              checked={'pocket' === productForm.goodsType}
              onChange={(e) => changeField(e, "goodsType")}
            />
          </div>

          <div className={classes.radios}>
            <label htmlFor="pocket">Box</label>
            <input
              type="radio"
              name="goodsType"
              id="box"
              value="box"
              checked={'box' === productForm.goodsType}
              onChange={(e) => changeField(e, "goodsType")}
            />
          </div>
        </div>

        <p>Тип доставки</p>

        <div className={classes.radios}>
          <div>
            <label htmlFor="standart">Standart</label>
            <input
              type="radio"
              name="delivery"
              id="standart"
              value="standart"
              checked={'standart' === productForm.delivery}
              onChange={(e) => changeField(e, "delivery")}
            />
          </div>

          <div>
            <label htmlFor="pocket">Express</label>
            <input
              type="radio"
              name="delivery"
              id="express"
              value="express"
              checked={'express' === productForm.delivery}
              onChange={(e) => changeField(e, "delivery")}
            />
          </div>
        </div>

        <button type="submit" onClick={handleSubmit}>Send</button>
        <pre>{JSON.stringify(productForm, 0, 2)};</pre>
      </form>
    </>
  );
};

export default ProductForm;
