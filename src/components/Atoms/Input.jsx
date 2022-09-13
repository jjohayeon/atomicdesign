import React from "react";
import styled from "styled-components";

const styledComp = {
  InputBox: styled.input`
    width: 180px;
    height: 40px;
    color: #4b3f3c;
    font-size: 1rem;
    font-weight: bold;
    line-height: 40px;
    background-color: #120000;
    outline-style: none;
    border: 0;
    padding: 0 1rem;
  `,
};

export default function Input({ className, onChange }) {
  return (
    <styledComp.InputBox
      className={className}
      placeholder={"Enter Keyword"}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
