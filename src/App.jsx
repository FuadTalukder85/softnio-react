import "./App.css";
import img01 from "../src/assets/img01.png";

function App() {
  return (
    <div className="w-[1320px] mx-auto pt-28">
      <div className="grid grid-cols-2 gap-14 items-center">
        <div className="col-span-1">
          <img className="w-full rounded-md" src={img01} alt="" />
        </div>
        <div className="col-span-1">
          <h1 className="text-4xl font-bold text-[#364A63]">
            Classy Modern Smart watch
          </h1>
          <p className="pt-3">
            ★★★★★ <span className="text-[#8091A7] text-sm">(2 Reviews)</span>
          </p>
          {/* price */}
          <div className="pt-5">
            <span className="text-[#8091A7] line-through text-xl">$99.00</span>
            <span className="text-[#6576FF] font-bold text-2xl ps-2">
              $79.00
            </span>
          </div>
          <p className="pt-5 text-[#8091A7] text-lg">
            I must explain to you how all this mistaken idea of denoun cing ple
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teaching.
          </p>
          {/*  */}
          <div className="pt-5 flex gap-10">
            <div>
              <p className="text-[#8091A7] text-sm">Type</p>
              <p className="text-[#364A63] text-lg font-bold">Watch</p>
            </div>
            <div>
              <p className="text-[#8091A7] text-sm">Model Number</p>
              <p className="text-[#364A63] text-lg font-bold">
                Forerunner 290XT
              </p>
            </div>
          </div>
          {/* color */}
          <div className="pt-5">
            <h3 className="text-[#364A63] text-lg font-bold">Brand Color</h3>
            <ul className="pt-1 flex gap-5">
              <li className="w-4 h-4 rounded-full bg-[#6576FF]"></li>
              <li className="w-4 h-4 rounded-full bg-[#1FCEC9]"></li>
              <li className="w-4 h-4 rounded-full bg-[#4B97D3]"></li>
              <li className="w-4 h-4 rounded-full bg-[#3B4747]"></li>
            </ul>
          </div>
          {/* size */}
          <div className="pt-5">
            <h3 className="text-[#364A63] text-lg font-bold">Wrist Size</h3>
            <ul className="pt-1 flex gap-4 text-sm">
              <li className="group">
                <button className="text-[#8091A7] border border-[#DBDFEA] px-5 py-1 rounded-[3px] group-hover:border-[#6576FF] transition-all duration-300">
                  <span className="pr-2 text-[#364A63] font-bold group-hover:text-[#6576FF] transition-all duration-300">
                    S
                  </span>
                  <span className="text-xs">$69</span>
                </button>
              </li>
              <li className="group">
                <button className="text-[#8091A7] border border-[#DBDFEA] px-5 py-1 rounded-[3px] group-hover:border-[#6576FF] transition-all duration-300">
                  <span className="pr-2 text-[#364A63] font-bold group-hover:text-[#6576FF] transition-all duration-300">
                    M
                  </span>
                  <span className="text-xs">$69</span>
                </button>
              </li>
              <li className="group">
                <button className="text-[#8091A7] border border-[#DBDFEA] px-5 py-1 rounded-[3px] group-hover:border-[#6576FF] transition-all duration-300">
                  <span className="pr-2 text-[#364A63] font-bold group-hover:text-[#6576FF] transition-all duration-300">
                    L
                  </span>
                  <span className="text-xs">$69</span>
                </button>
              </li>
              <li className="group">
                <button className="text-[#8091A7] border border-[#DBDFEA] px-5 py-1 rounded-[3px] group-hover:border-[#6576FF] transition-all duration-300">
                  <span className="pr-2 text-[#364A63] font-bold group-hover:text-[#6576FF] transition-all duration-300">
                    XL
                  </span>
                  <span className="text-xs">$69</span>
                </button>
              </li>
            </ul>
          </div>
          {/* cart */}
          <div className="mt-5">
            <ul className="flex gap-4 items-center">
              <li>
                <button className="border-l border-y border-[#DBDFEA] px-3 py-1 rounded-l-[3px]">
                  -
                </button>
                <button className="text-[#DBDFEA] border border-[#DBDFEA] px-7 py-1">
                  0
                </button>
                <button className="border-r border-y border-[#DBDFEA] px-3 py-1 rounded-r-[3px]">
                  +
                </button>
              </li>
              <li>
                <button className="bg-[#6576FF] text-white px-3 py-1 rounded-[3px]">
                  Add to Cart
                </button>
              </li>
              <li className="text-[#6576FF]">♥</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
