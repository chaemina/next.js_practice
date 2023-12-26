import React from "react";

const Btn = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <button onClick={onClick} ref={ref}>
      <a href={href}>page 3</a>
    </button>
  );
});

export default Btn;
