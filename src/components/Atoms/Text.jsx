import React, { Fragment } from "react";
import styled from "styled-components";

const styledComp = {
  DefaultText: styled.span`
    font-size: 1rem;
  `,
  SmallText: styled.span`
    font-size: 0.5rem;
  `,
  LargeText: styled.span`
    font-size: 1.2rem;
  `,
};

export default function Text({ className, type = "default", value }) {
  return (
    <Fragment>
      {type === "default" && (
        <styledComp.DefaultText className={className}>
          {value}
        </styledComp.DefaultText>
      )}
      {type === "small" && (
        <styledComp.SmallText className={className}>
          {value}
        </styledComp.SmallText>
      )}
      {type === "large" && (
        <styledComp.LargeText className={className}>
          {value}
        </styledComp.LargeText>
      )}
    </Fragment>
  );
}
