import styled from 'styled-components';

const LoopBoxWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    width: 750px;
    height: 600px;
    img {
        animation: ${props => props.playing ? 'disc-spin infinite 20s linear' : 'none'};
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

const BpmSelector = styled.div`
    background-color: transparent; 
`;

const Instruments = styled.div`
    background-color: transparent; 
`;

const Melo = styled.div`
    background-color: transparent;
`;

const Snare = styled.div`
    background-color: transparent;
`;

const Kick = styled.div`
    background-color: transparent;
`;

const Bass = styled.div`
    background-color: transparent;
`;

const Player = styled.div`
    background-color: transparent;
`;




export { LoopBoxWrapper, BpmSelector, Instruments, Player, Kick, Snare, Bass, Melo };