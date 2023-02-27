import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  border-bottom: 1px ffffff solid;
  height: 92px;
  width: 100%;
  display: block;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  transition: transform 0.1s linear;

  @media screen and (max-width: 1023px) {
    height: 60px;
  }
`;

export const SwitchLanguage = styled.div`
  margin: 0 8px 0 8px;
  opacity: 0.5;
  cursor:pointer;
  user-select:none;
`;

export const SwitchTheme = styled.div`
  margin: 0 8px 0 8px;
  opacity: 0.5;
  cursor:pointer;
  user-select:none;
`;

export const TopHeader = styled.div`
  margin: 0 auto 0 auto;
  justify-content: space-between;
  border-bottom: 1px ffffff solid;
  height: 32px;
  width: 80%;
  display: flex;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  transition: top 0.3s;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const Tell = styled.a`
  padding: 3px 0;
  opacity: 0.5;

  &:hover {
    color: #212121;
  }
`;

// export const Delimiter = styled.span`

// `;

export const StyledLinkLogo = styled(NavLink)`
  font-family: "Abril Fatface";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #fff;
  color: #212121;
  opacity: 0.5;
  display: inline-block;
  padding-top: 19px;
  padding-bottom: 14px;
  user-select:none;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const StyledButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  border-radius: 50%;
  position: absolute;
  margin-top: 18px;
  margin-left: calc(80% - 30px);

  &:hover {
    cursor: pointer;
    background-color: #f5f7fa;
  }
  &.active {
    background-color: #f5f7fa;
  }
`;

export const LogInContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0px auto 0 auto;
`;

export const Button = styled.span`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  border-radius: 50%;
  position: absolute;
  margin-top: 18px;
  margin-left: 1230px;
  top: 0;
  left: 0;
  &:hover {
    cursor: pointer;
    background-color: #f5f7fa;
  }
  &.active {
    background-color: #f5f7fa;
  }
`;

export const ButtonSun = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  margin: 16px 0 0 0;
  background-color: #f5f7fa;
  border: none;
  border-radius: 50%;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #f5f7fa;
  }
  &.active {
    background-color: #f5f7fa;
  }
`;

export const Input = styled.input`
  &:hover {
    cursor: text;
  }

  @media screen and (min-width: 320px) {
    width: 100px;
    height: 28px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 28px;
    margin-right: 15px;
  }
`;

export const Searchh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundChange = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  padding: 5px;
`;

export const DropContainer = styled.div`
  display: flex;
  margin: 5px auto;
  text-align: center;
  @media screen and (max-width: 1023px) {
    opacity: 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
`;

export const DropLi = styled.li`
  z-index: 1;
  width: 120px;
`;

export const MenuLinks = styled.a`
  color: rgba(255, 255, 255, 0.6);
  padding: 12px 16px;
  display: block;
`;

export const DropMenu = styled.ul`
  background-color: green;
  box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 19px 0 21px 0;
  position: absolute;
  top: 0;
  transform: translateY(101%);
  transition: transform;
  transition-duration: 1s;
`;

export const Div = styled.div`
  height: 175px;
  margin-top: 10px;
  position: relative;
`;

export const DivLinks = styled.div`
  // &:focus ${DropMenu} {
  //   transform: translateY(0%);
  //   opacity: 1;
  // }
  // &:hover ${DropMenu} {
  //   transform: translateY(0%);
  //   opacity: 1;
  // }
`;

export const MenuLi = styled.li`
  color: black;
  font-size: 16px;
`;

export const ContainerSearch = styled.div`
  margin: 0 0 0 auto;
  width: 300px;
  display: flex;
`;

export const FillSpace = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
`;

export const I = styled.i`
  font-size: 24px;
  opacity: 0.5;

  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin: 0 0 3px 3px;
  cursor: pointer;
`;
