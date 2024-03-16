import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isTrue, setIsTrue] = useState(true)

    const handleClick = () => {
        setIsTrue(!isTrue)
    }
  return (
    <header className="w-full py-4 px-6 border-b">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl md:text-2xl">კონტაქტები</h1>
        </div>
        <div>
          <Link to={isTrue ? "/" : "/create"}>
            <button onClick={handleClick} className="font-semibold bg-slate-950 text-white px-4 md:px-5 rounded py-3">
              {isTrue ? "ნახე კონტაქტები" : "დაამატე"}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
