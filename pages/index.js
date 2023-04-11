import { useCartContext } from "../components/CartContext";
import FormatCurrency from "../components/FormatCurancy";
import NavBar from "../components/NavBar";
import storeItems from "../items.json";
import Image from "next/image";

export default function Home() {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCartContext();
  return (
    <div>
      <NavBar />
      <h1 className=" px-5 py-10 text-2xl font-bold">Home</h1>
      <div className="flex flex-wrap justify-center gap-3 ">
        {storeItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between border  w-48 md:w-64"
          >
            <div>
              <Image
                src={item.imgUrl}
                width={500}
                height={200}
                alt="image"
                className="h-32 md:h-48 grow "
              />
            </div>

            <div className="flex md: justify-between w-full">
              <h1 className="truncate">{item.name}</h1>
              <p>{FormatCurrency(item.price)}</p>
            </div>
            {getItemQuantity(item.id) === 0 ? (
              <div className=" h-20  w-full flex items-center">
                <button
                  onClick={() => increaseCartQuantity(item.id)}
                  className=" bg-blue-700 active:bg-blue-400 p-2 text-white font-bold rounded w-full "
                >
                  ADD TO CART
                </button>
              </div>
            ) : (
              <div className="h-20 flex flex-col items-center">
                <div className="flex gap-3 items-center my-2">
                  <button
                    onClick={() => decreaseCartQuantity(item.id)}
                    className="bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded  "
                  >
                    -
                  </button>
                  <p className="text-sm ">{getItemQuantity(item.id)} In Cart</p>
                  <button
                    onClick={() => increaseCartQuantity(item.id)}
                    className="bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded  "
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-700 active:bg-red-400 px-2 mb-2 text-white font-bold rounded "
                >
                  REMOVE
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
