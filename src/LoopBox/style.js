import styled from "styled-components";

const LoopBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 750px;
  height: 600px;
  text-align: left;
`;

const Disc = styled.div`
  img {
    animation: ${(props) =>
      props.playing ? "disc-spin infinite 20s linear" : "none"};
    @keyframes disc-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

const InstrumentContainer = styled.div`
  display: grid;
`;

const BpmSelector = styled.div`
  background-color: transparent;
`;

const Sheet = styled.div`
  background-color: transparent;
`;

const Instrument = styled.div`
  background-color: transparent;
`;

const Player = styled.div`
  background-color: transparent;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const InstrumentWrapper = styled.div`
  background-color: transparent;
`;

export {
  LoopBoxWrapper,
  BpmSelector,
  Sheet,
  Player,
  Disc,
  InstrumentContainer,
  Instrument,
  InstrumentWrapper,
};
