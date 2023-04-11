import React from "react";
import NavBar from "../components/NavBar";
import storeItems from "../items.json";
import { useCartContext } from "../components/CartContext";
import Image from "next/image";
import FormatCurrency from "../components/FormatCurancy";

const Cart = () => {
  const {
    cartItems,
    cartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    increaseCartQuantity,
  } = useCartContext();
  console.log({ cartItems });

  if (cartItems.length === 0) {
    return (
      <div>
        <NavBar />
        <h1 className="flex justify-center items-center text-2xl font-bold">
          Votre panier est vide
        </h1>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-3 p-2 ">
        {storeItems.map((itemAll) => (
          <div key={itemAll.id}>
            <div>
              {cartItems.map((item) => (
                <div key={item.id}>
                  {itemAll.id === item.id ? (
                    <div className="flex h-32 md:h-48  border p-3 ">
                      <div>
                        <Image
                          src={itemAll.imgUrl}
                          width={100}
                          height={100}
                          alt="image"
                          className=" h-full w-32 md:w-48 lg:w-64 grow border p-1 "
                        />
                      </div>
                      <div className="h-full w-full flex flex-col  justify-between pl-2 ">
                        <div className=" flex justify-between bg-red-30">
                          <div className=" flex ">
                            <h1>{itemAll.name}</h1>
                            {item.quantity > 1 && (
                              <h1 className="px-2 text-[10px] text-slate-500">
                                x {item.quantity}
                              </h1>
                            )}
                          </div>
                          {/* total produit */}
                          <div>
                            {FormatCurrency(item.quantity * itemAll.price)}
                          </div>
                        </div>
                        <div className=" flex justify-between items-center bg-red-30">
                          <div className="text-slate-500 text-sm">
                            {FormatCurrency(itemAll.price)}
                          </div>
                          <div className="flex gap-3 my-2">
                            <button
                              onClick={() => decreaseCartQuantity(item.id)}
                              className={
                                item.quantity !== 1
                                  ? "bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded  "
                                  : "bg-red-700 active:bg-red-400 px-2 text-white font-bold rounded  "
                              }
                            >
                              -
                            </button>
                            <p>{getItemQuantity(item.id)}</p>
                            <button
                              onClick={() => increaseCartQuantity(item.id)}
                              className="bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded  "
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className=" flex justify-end p-5">
          Total:{"  "}
          <span className="font-bold">
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </span>
        </div>
        <div className=" flex justify-center">
          <button className="w-32 md:w-64 flex justify-center text-xl font-bold text-white   bg-blue-500 active:bg-blue-300 rounded">
            PAYER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
