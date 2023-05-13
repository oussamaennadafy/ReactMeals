import React, { useContext, useState } from "react";
import ModalWrapper from "./../../../../utils/ModalWrapper";
import cartContext from "./../../../../context/Cart-context";
import Loader from "./../../../../utils/Loader";

function CheckoutModal({ toggleModal }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const { cartState } = useContext(cartContext);

  const sendOrderToServer = (name, address, cart) => {
    setLoader(true);
    fetch("http://192.168.1.111:8000/api/v1/orders", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
        name,
        address,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setLoader(false);
        toggleModal();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !address.trim())
      return setError("please fill all inputes");
    sendOrderToServer(name, address, cartState);
  };

  return (
    <ModalWrapper className="" toggleModal={toggleModal}>
      <h2 className="text-2xl text-center">Checkout</h2>
      <form
        className="w-3/4 flex flex-col mx-auto gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col ">
          <label className="mb-2" htmlFor="name">
            name
          </label>
          <input
            className="border border-gray-200 px-2 py-1"
            placeholder="name"
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <label className="mb-2" htmlFor="address">
            address
          </label>
          <input
            className="border border-gray-200 px-2 py-1"
            placeholder="address"
            type="address"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <p className="text-red-400 text-center">{error}</p>
        <button
          className="px-5 py-2 w-28 h-10 bg-orange-400 mx-auto rounded"
          type="submit"
        >
          {loader ? <Loader /> : "Submit"}
        </button>
      </form>
    </ModalWrapper>
  );
}

export default CheckoutModal;
