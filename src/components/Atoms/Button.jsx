import React from "react";
import styled from "styled-components";

const styledComp = {
  ButtonBox: styled.button`
    width: 120px;
    height: 40px;
    color: #f5f4dc;
    font-size: 1rem;
    font-weight: bold;
    background-color: #c26105;
    border: 0;
    padding: 0 1rem;
    cursor: pointer;
  `,
};

export default function Button({ text, onClick }) {
  return <styledComp.ButtonBox onClick={onClick}>{text}</styledComp.ButtonBox>;
}
