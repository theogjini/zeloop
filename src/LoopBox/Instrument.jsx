import React from "react";

import { InstrumentWrapper } from "./style.js";

export default function Instrument(props) {
//   const { timeSig, tempo } = props;
  return (
    <InstrumentWrapper>
      {props.name}
      <div>Hello</div>
    </InstrumentWrapper>
  );
}
