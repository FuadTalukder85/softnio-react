import "./App.css";
import purple from "../src/assets/purple.png";
import black from "../src/assets/black.png";
import blue from "../src/assets/blue.png";
import cyan from "../src/assets/cyan.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";

function App() {
  const [selectedColor, setSelectedColor] = useState("#6576FF");
  const [activeSize, setActiveSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const colorToImagesMap = {
    "#6576FF": [{ original: purple }, { original: black }],
    "#1FCEC9": [{ original: cyan }, { original: black }],
    "#4B97D3": [{ original: blue }, { original: blue }],
    "#3B4747": [{ original: black }, { original: cyan }],
  };

  const colorNamesMap = {
    "#6576FF": "purple",
    "#1FCEC9": "cyan",
    "#4B97D3": "blue",
    "#3B4747": "black",
  };

  const sizes = [
    { label: "S", price: 69 },
    { label: "M", price: 79 },
    { label: "L", price: 89 },
    { label: "XL", price: 99 },
  ];

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // handle add to cart
  const handleAddToCart = () => {
    const selectedSize = sizes.find((size) => size.label === activeSize);

    const selectedItem = {
      title: "Classy Modern Smart Watch",
      color: colorNamesMap[selectedColor],
      size: activeSize,
      quantity,
      price: selectedSize.price,
      image: colorToImagesMap[selectedColor][0].original,
    };

    setCart([...cart, selectedItem]);
    console.log("Cart:", [...cart, selectedItem]);
  };
  //   handle show modal
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const totalQuantity = cart?.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart?.reduce(
    (sum, item) => sum + item?.price * item.quantity,
    0
  );

  return (
    <div className="w-[1320px] mx-auto py-28">
      <div className="grid grid-cols-2 gap-14 items-center">
        <div className="col-span-1 rounded-lg">
          <ImageGallery
            items={colorToImagesMap[selectedColor]}
            showPlayButton={false}
            showFullscreenButton={false}
            thumbnailPosition="bottom"
            showNav={false}
          />
        </div>
        <div className="col-span-1">
          <h1 className="text-4xl font-bold text-[#364A63]">
            Classy Modern Smart Watch
          </h1>
          <p className="pt-3">
            ★★★★★ <span className="text-[#8091A7] text-sm">(2 Reviews)</span>
          </p>
          <div className="pt-5">
            <span className="text-[#8091A7] line-through text-xl">$99.00</span>
            <span className="text-[#6576FF] font-bold text-2xl ps-2">
              $
              {sizes.find((size) => size.label === activeSize).price * quantity}
              .00
            </span>
          </div>
          <p className="pt-5 text-[#8091A7] text-lg">
            I must explain to you how all this mistaken idea of denoun cing ple
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teaching.
          </p>
          <div className="pt-5">
            <h3 className="text-[#364A63] text-lg font-bold">Brand Color</h3>
            <ul className="pt-1 flex gap-5">
              {Object.keys(colorToImagesMap).map((color) => (
                <li
                  key={color}
                  className="w-5 h-5 rounded-full cursor-pointer flex items-center justify-center"
                  onClick={() => setSelectedColor(color)}
                  style={{
                    boxShadow:
                      selectedColor === color ? `0 0 0 2px ${color}` : "none",
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-5">
            <h3 className="text-[#364A63] text-lg font-bold">Wrist Size</h3>
            <ul className="pt-1 flex gap-4 text-sm">
              {sizes.map((size) => (
                <li key={size.label} className="group">
                  <button
                    onClick={() => setActiveSize(size.label)}
                    className={`text-[#8091A7] border px-5 py-1 rounded-[3px] transition-all duration-300 ${
                      activeSize === size.label
                        ? "border-[#6576FF]"
                        : "border-[#DBDFEA]"
                    }`}
                  >
                    <span
                      className={`pr-2 font-bold transition-all duration-300 ${
                        activeSize === size.label
                          ? "text-[#6576FF]"
                          : "text-[#364A63]"
                      }`}
                    >
                      {size.label}
                    </span>
                    <span className="text-xs">${size.price}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <ul className="flex gap-4 items-center text-[#8091A7]">
              <li>
                <button
                  onClick={handleDecrement}
                  className="border-l border-y border-[#DBDFEA] px-3 py-1 rounded-l-[3px]"
                >
                  -
                </button>
                <button className="text-[#364A63] border border-[#DBDFEA] px-7 py-1">
                  {quantity}
                </button>
                <button
                  onClick={handleIncrement}
                  className="border-r border-y border-[#DBDFEA] px-3 py-1 rounded-r-[3px]"
                >
                  +
                </button>
              </li>
              <li>
                <button
                  onClick={handleAddToCart}
                  className="bg-[#6576FF] text-white px-3 py-1 rounded-[3px]"
                >
                  Add to Cart
                </button>
              </li>
              <li className="text-[#6576FF]">♥</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-28">
        <button
          onClick={handleShowModal}
          className="px-6 py-2 bg-[#FFBB5A] text-[#364A63] font-bold rounded-3xl"
        >
          Checkout{" "}
          <span className="text-sm ml-2 bg-white py-1 px-2 rounded-lg">
            {cart.length}
          </span>
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[650px] px-14 py-16">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600">
                  <th className="py-3">Item</th>
                  <th className="py-3">Color</th>
                  <th className="py-3">Size</th>
                  <th className="py-3">Qnt</th>
                  <th className="py-3 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, index) => (
                  <tr key={index} className="text-sm border-b">
                    <td className="w-6/12 py-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="inline-block w-12 h-12 rounded-md mr-4"
                      />
                      {item.title}
                    </td>
                    <td className="py-3 capitalize">{item.color}</td>
                    <td className="py-3 font-bold">{item.size}</td>
                    <td className="py-3">{item.quantity}</td>
                    <td className="py-3 text-right">
                      ${item.price * item.quantity}.00
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-100 font-bold">
                  <td className="py-3">Total</td>
                  <td></td>
                  <td></td>
                  <td className="py-3">{totalQuantity}</td>
                  <td className="py-3">${totalPrice}.00</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-6">
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">
                Continue Shopping
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
