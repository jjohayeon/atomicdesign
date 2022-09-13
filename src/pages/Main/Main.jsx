import React, { useState } from "react";
import PageTemplate from "../../components/Templates/PageTemplate";

export default function Main() {
  const [contentText, setContentText] = useState("");
  const [keyword, setKeyword] = useState("");

  const onChange = (value) => {
    setKeyword(value);
  };
  const onClick = () => {
    setContentText(keyword);
  };
  return (
    <PageTemplate
      type={"main"}
      onChange={onChange}
      onClick={onClick}
      contentText={contentText}
    />
  );
}
