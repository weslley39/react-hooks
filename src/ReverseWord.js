import React, { useMemo } from "react";

const ReverseWord = ({ value }) => {
  const reverseWord = word =>
    word
      .split("")
      .reverse()
      .join("");
  const valueReversed = useMemo(() => reverseWord(value), [value]);
  return <div>{valueReversed}</div>;
};

export default ReverseWord;
