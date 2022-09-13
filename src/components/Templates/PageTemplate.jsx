import React from "react";
import styled from "styled-components";
import Header from "../Organisms/Header";
import MainContent from "./Content/MainContent";

const styledComp = {
  Template: styled.div``,
};

export default function PageTemplate({ type, onChange, onClick, contentText }) {
  return (
    <styledComp.Template>
      <Header onChange={onChange} onClick={onClick} />
      {type === "main" && <MainContent contentText={contentText} />}
    </styledComp.Template>
  );
}
