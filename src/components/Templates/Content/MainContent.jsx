import React from "react";
import styled from "styled-components";
import Text from "../../Atoms/Text";

const styledComp = {
  Container: styled.div`
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid #101010;
    margin: 20px 4vw;
  `,
};

export default function MainContent({ contentText }) {
  return (
    <styledComp.Container>
      <Text type={"large"} value={"Search Button Click! Show Keyword"} />
      <Text type={"large"} value={`CurrentKeyword: ${contentText}`} />
    </styledComp.Container>
  );
}
