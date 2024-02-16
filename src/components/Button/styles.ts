import styled from "styled-components"
import { cores } from "../../styles"
import { Props } from "."

const ButtonContainer = styled.button<Props>`
    display: block;
    margin-top: 20px;
    padding: 4px;
    color: ${cores.pink};
    background-color: ${cores.white};
    border-color: ${cores.white};
    cursor: pointer;
    font-weight: bold;
    border-style: none;
    text-align: center;
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`

export default ButtonContainer
