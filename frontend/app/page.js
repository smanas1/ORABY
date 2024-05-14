"use client";
import { useDispatch, useSelector } from "react-redux";
// import { decriment, incriment } from "./redux/counterSlice";
// import Register from "@/Components/Register";
import Login from "@/Components/Login";

export default function Home() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      {/* This part is for redux */}
      {/* <div>
        <button onClick={() => dispatch(incriment())}>Incriment</button>
        {count}
        <button onClick={() => dispatch(decriment())}>Decriment</button>
      </div> */}

      <div className="flex justify-center items-center h-screen">
        <Login />
      </div>
    </>
  );
}
