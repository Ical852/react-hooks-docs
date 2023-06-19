import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const Button = forwardRef((props, ref) => {
  const { price, onClick } = props;
  const buttonRef = useRef(null);

  const [disable, setDisable] = useState(false);
  const setButtonDisable = () => {
    if (price > 5000) {
      setDisable(true);
      return;
    }
    setDisable(false);
  };

  useImperativeHandle(ref, () => ({
    setButtonDisable: () => {
      setButtonDisable();
    },
  }));

  return (
    <button
      ref={buttonRef}
      type="button"
      class="btn btn-primary"
      disabled={disable}
      onClick={onClick}
    >
      Check
    </button>
  );
});

export default Button;
