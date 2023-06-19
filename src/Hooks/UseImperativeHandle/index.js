import React, { useRef, useState } from "react";
import { Button } from "./components";

const UseImperativeHandlePage = () => {
  const [price, setPrice] = useState("");
  const childRef = useRef(null);

  return (
    <div className="mt-3">
      <h5 className="mb-3">Use Imperative Handle</h5>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <Button
          ref={childRef}
          price={price}
          onClick={() => {
            childRef.current.setButtonDisable();
          }}
        />
      </form>
    </div>
  );
};

export default UseImperativeHandlePage;
