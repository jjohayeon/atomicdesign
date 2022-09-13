import React from "react";
import styled from "styled-components";
import Text from "../Atoms/Text";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";

const styledComp = {
  Container: styled.div`
    display: inline-block;
  `,
  AreaBox: styled.div`
    display: flex;
    ${({ type }) =>
      type === "title" &&
      `
    height: 20px;
    line-height: 20px;
  `}
  `,
  SearchBarInput: styled(Input)`
    margin-right: 10px;
  `,
};

export default function SearchBar({ onChange, onClick }) {
  return (
    <styledComp.Container>
      <styledComp.AreaBox type={"title"}>
        <Text value={"SEARCH THE SITE"} />
      </styledComp.AreaBox>
      <styledComp.AreaBox>
        <styledComp.SearchBarInput onChange={onChange} />
        <Button text={"SEARCH"} onClick={onClick} />
      </styledComp.AreaBox>
    </styledComp.Container>
  );
}
