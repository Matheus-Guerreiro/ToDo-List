import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";

export const Container = styled.div`
  width: 80vw;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 350px;
    height: 350px;
  }

  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #3a98d7;
  }

  @media only screen and (max-width: 590px) {
    .title {
      margin-right: 80px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;

  @media only screen and (max-width: 590px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 40px;

  ul {
    margin-top: 60px;
  }
`;

export const Input = styled.input`
  height: 6vh;
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  margin-right: 50px;
  width: 342px;
  padding-left: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #3a98d7;

  &::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #3a98d7;
  }

  @media only screen and (max-width: 590px) {
    margin: 0 0 30px 0;
    width: 262;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  background: #0f9afe;
  box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5);
  font-weight: 700;
  font-size: 17px;
  line-height: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media only screen and (max-width: 590px) {
    width: 230px;
    height: 50px;
  }
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#d0daf1" : "#f6f6f6")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 14px;
  width: 500px;

  li {
    text-decoration: ${(props) => (props.isFinished ? "line-through" : "")};
    list-style: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #3a98d7;
  }

  @media only screen and (max-width: 590px) {
    width: 350px;
  }
`;

export const Trash = styled(FaTrash)`
  :hover {
    cursor: pointer;
  }

  width: 18px;
  height: 20px;
`;

export const Check = styled(FcCheckmark)`
  :hover {
    cursor: pointer;
  }

  width: 20px;
  height: 20px;
`;

export const CheckBoxWrapper = styled.div`
  position: absolute;
  top: -32px;
  left: 20;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 270%;
  left: 370%;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3.5px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  @media only screen and (max-width: 590px) {
    top: 270%;
    left: 270%;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #2ea1b0;
    &::after {
      content: "";
      display: flex;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
