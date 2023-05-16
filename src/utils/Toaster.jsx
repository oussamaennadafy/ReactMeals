import { useContext, useEffect } from "react";
import toasterContext from "../context/Toaster-Context";

function Toaster() {
  const { toasterState, dispatchToaster } = useContext(toasterContext);

  useEffect(() => {
    if (toasterState.display) {
      const timerId = setTimeout(() => {
        dispatchToaster({ type: "HIDE" });
      }, 3000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [toasterState.display]);

  const color =
    toasterState.status === "success"
      ? "before:bg-green-700"
      : "before:bg-red-700";

  if (!toasterState.display) return null;
  return (
    <div
      className={`toster fixed -left-[400px] toaster-slide-in bottom-10 w-80 h-[72px] ${color} p-3 pl-5 before:content-[''] before:absolute before:left-0 rounded-l before:w-1 border border-gray-200 border-l-0 bg-white rounded-sm flex items-center justify-between`}
    >
      <div className="">
        <p>{toasterState.status}</p>
        <span className="text-sm text-gray-500">{toasterState.message}</span>
      </div>
      <button
        onClick={() => dispatchToaster({ type: "HIDE" })}
        className="cursor-pointer h-full flex items-center min-w-10"
      >
        <img
          src="./assets/close.png"
          alt="close icon"
          className="w-4 h-4 opacity-50"
        />
      </button>
    </div>
  );
}

export default Toaster;
