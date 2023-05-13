import React from "react";

function ModalWrapper({ children, toggleModal, className }) {
  return (
    <>
      <div
        onClick={toggleModal}
        className="w-screen h-screen fixed top-0 left-0 bg-black opacity-50 z-10"
      />
      <section
        className={`${className} w-11/12 overflow-auto sm:w-3/4 md:w-1/2 bg-white flex flex-col fixed top-1/2 left-1/2 p-5 -translate-x-1/2 -translate-y-1/2 rounded-md scale-modal z-20`}
      >
        {children}
      </section>
    </>
  );
}

export default ModalWrapper;
