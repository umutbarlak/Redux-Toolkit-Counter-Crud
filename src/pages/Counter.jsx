import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const store = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center gap-3 align-items-center">
        <button onClick={() => dispatch(decrease())} className="btn btn-danger">
          Azalt
        </button>
        <span className="fw-bold lead">{store.count}</span>
        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          Arttır
        </button>
        <input
          defaultValue={store.count}
          onChange={(e) => dispatch(setCount(Number(e.target.value)))}
          className="form-control w-25"
          type="number"
        />
      </div>
    </div>
  );
};

export default Counter;
