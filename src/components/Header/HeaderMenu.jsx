import React from "react";
import { useState } from "react";
import {
  LogInContainer,
  HeaderLogo,
  Button,
  Input,
  Search,
  DropContainer,
  DropLi,
  DropMenu,
  MenuLinks,
  ButtonSun,
  MenuLi,
  Menu,
  Div,
} from "./Header.styled";

import Sun1 from "../../images/png/Sun.png";
import Sun2 from "../../images/gif/Sun.gif";
import Moon from "../../images/png/moon.png";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";

const HeaderMenu = () => {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);

  const handleMouseEnter = () => {
    setActive(false);
  };

  const handleMouseLeave = () => {
    setActive(true);
  };

  const change = () => {
    setActive2(!active2);
  };
  return (
    <LogInContainer>
      <HeaderLogo>LOGO</HeaderLogo>

      <DropContainer>
        <Menu>
          <MenuLi>
            <MenuLinks> Drop Menu 1</MenuLinks>
            <Div>
              <DropMenu>
                <DropLi>
                  <MenuLinks>Link 1</MenuLinks>
                </DropLi>
                <DropLi>
                  <MenuLinks>Link 2</MenuLinks>
                </DropLi>
                <DropLi>
                  <MenuLinks>Link 3</MenuLinks>
                </DropLi>
              </DropMenu>
            </Div>
          </MenuLi>
          <MenuLi>
            <MenuLinks> Drop Menu 1</MenuLinks>
            <Div>
              <DropMenu>
                <DropLi>
                  <MenuLinks>Link 1</MenuLinks>
                </DropLi>
                <DropLi>
                  <MenuLinks>Link 2</MenuLinks>
                </DropLi>
                <DropLi>
                  <MenuLinks>Link 3</MenuLinks>
                </DropLi>
              </DropMenu>
            </Div>
          </MenuLi>
          <MenuLi>
            <MenuLinks> Drop Menu 1</MenuLinks>
            <Div>
              <DropMenu>
                <DropLi>
                  <MenuLinks>Link 1</MenuLinks>
                </DropLi>
                <DropLi>
                  <MenuLinks>Link 2</MenuLinks>
                </DropLi>
                <DropLi>
                  <MenuLinks>Link 3</MenuLinks>
                </DropLi>
              </DropMenu>
            </Div>
          </MenuLi>
          <MenuLi>
            <MenuLinks> Drop Menu 1</MenuLinks>
            <Div>
              <DropMenu>
                <DropLi>
                  <MenuLinks>Link 1</MenuLinks>
                </DropLi>
                <DropLi>
                  <MenuLinks>Link 2</MenuLinks>
                </DropLi>
                <DropLi>
                  <MenuLinks>Link 3</MenuLinks>
                </DropLi>
              </DropMenu>
            </Div>
          </MenuLi>

        </Menu>
      </DropContainer>

      <ButtonSun
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={change}
      >
        {!active2 ? (
          active ? (
            <img width={20} height={20} src={Sun1} alt="sun" />
          ) : (
            <img width={20} height={20} src={Sun2} alt="sun" />
          )
        ) : (
          <img width={22} height={22} src={Moon} alt="sun" />
        )}
      </ButtonSun>
      <form>
        <Search>
          <Input type="text" placeholder="Поиск..." id="searchInput" />
          <Button type="submit">
            <Magnifier />
          </Button>
        </Search>
      </form>
    </LogInContainer>
  );
};

export default HeaderMenu;
