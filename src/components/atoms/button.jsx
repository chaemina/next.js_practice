"use client";

import React from "react";
import styled from "styled-components";

const BlueButton = styled.button`
  background-color: white;
  border: solid 2px blue;
`;

const Btn = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <BlueButton onClick={onClick} ref={ref}>
      <a href={href}>page 3</a>
    </BlueButton>
  );
});

export default Btn;
