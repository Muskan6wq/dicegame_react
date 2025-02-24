import styled from "styled-components";


const RollDice = ({ currentDice, rolldice }) => {

    return (
        <DiceContainer>
            <div className="dice" onClick={rolldice}>
                <img src={`/image/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
};
export default RollDice;

const DiceContainer = styled.div`
display:flex;
margin-top:48px;
flex-direction:column;
align-items:center;


.dice{
cursor:pointer;
}

p{
font-size:24px;
}
`;
