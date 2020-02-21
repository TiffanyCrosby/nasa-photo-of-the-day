import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'success'/*'success' and hex color is what you change to get something different */ ? `background: #4caf50;` : null)}
`;

const StyledExplanation = styled.p`
    width: 80vw;
    height: 30vh;
    border: 5px double red;
    text-align: center;
    margin: 0 auto;
    padding: 2%;
`;

const Explanation = ({ explanation }) => {

    return (
        <div>
            <Button type="success">Click Me!!</Button>
            <StyledExplanation>{explanation}</StyledExplanation>
        </div>
    )
}

export default Explanation;