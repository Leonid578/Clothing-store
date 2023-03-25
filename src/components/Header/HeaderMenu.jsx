import { useState, useContext } from "react";
import CartContext from "../../CartContext";
import {
  LogInContainer,
  // StyledLinkLogo,
  StyledButton,
  Container,
  TopHeader,
  SwitchTheme,
  Tell,
  I,
  SwitchThemeText,
  CloseModal,
  StyledLink1,
  StyledLink2,
  StyledLink3,
  StyledLink4,
  StyledLink5,
  StyledLink6,
} from "./Header.styled";

import { RowLine } from "../Flags/flag.style";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import Flag from "../Flags/flag";
import "./Header.style.css";

// const [active2, setActive2] = useState(false);
// const [active, setActive] = useState(true);
// const { isDark, setIsDark } = useTheme();
// const handleMouseEnter = () => {
//   setActive(false);
// };
// const handleMouseLeave = () => {
//   setActive(true);
// };
// const change = () => {
//   setActive2(!active2);
// };

const HeaderMenu = () => {
  const { items } = useContext(CartContext);

  const [flagActive, setFlagActive] = useState(false);
  const flagChange = () => {
    setFlagActive(!flagActive);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // const prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   const currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     console.log("0");
  //     document.getElementById("header").style.top = "0";
  //   } else {
  //     console.log("-32");
  //     document.getElementById("header").style.top = "-32px";
  //   }
  //   // eslint-disable-next-line no-const-assign
  //   prevScrollpos = currentScrollPos;
  // };

  // const [hidenHeder, setHidenHeder] = useState(0);
  // const [hidenHeder2, setHidenHeder2] = useState(true);

  // useEffect(() => {
  //   let lastScroll = 0;
  //   const defaultOffset = 200;

  //   const scrollPosition = () =>
  //     window.pageYOffset || document.documentElement.scrollTop;

  //   window.addEventListener("scroll", () => {
  //     if (scrollPosition() > hidenHeder && scrollPosition() > defaultOffset) {
  //       setHidenHeder2(false);
  //       console.log("down :", hidenHeder);
  //     } else if (scrollPosition() < hidenHeder) {
  //       setHidenHeder2(true);
  //       console.log("up :", hidenHeder);
  //     }
  //     lastScroll = scrollPosition();
  //     setHidenHeder(lastScroll);
  //   });
  // }, [hidenHeder]);

  // <ButtonSun
  //         onMouseEnter={handleMouseEnter}
  //         onMouseLeave={handleMouseLeave}
  //         onClick={change}
  //       >
  //         {!active2 ? (
  //           active ? (
  //             <img width={20} height={20} src={Sun1} alt="sun" />
  //           ) : (
  //             <img
  //               width={20}
  //               height={20}
  //               src={Sun2}
  //               alt="sun"
  //               onClick={() => setIsDark(!isDark)}
  //             />
  //           )
  //         ) : (
  //           <img
  //             width={22}
  //             height={22}
  //             src={Moon}
  //             alt="sun"
  //             onClick={() => setIsDark(!isDark)}
  //           />
  //         )}
  //       </ButtonSun>
  //  <form>
  //           <Searchh>
  //             <Input type="text" placeholder="Поиск..." id="searchInput" className="search__img" onChange={(event) => setValue(event.target.value)}/>
  //             <Button type="submit">
  //               <Magnifier />
  //             </Button>
  //           </Searchh>
  //         </form>

  return (
    <Container>
      {flagActive && <CloseModal onClick={flagChange} />}

      <TopHeader className="header">
        <span className="row_line">
          <Tell>+380686082451</Tell>
          <span className="delimiter">|</span>
        </span>
        <SwitchTheme className="row_line" onClick={flagChange}>
          {/* <SwitchLanguage>сменить тему</SwitchLanguage> */}
          {items.map((language, index) => {
            return (
              <RowLine key={index}>
                <img
                  src={language.src}
                  alt={language.language}
                  width="18"
                ></img>
                <SwitchThemeText>{language.language}</SwitchThemeText>
              </RowLine>
            );
          })}
          <I />
        </SwitchTheme>
      </TopHeader>

      <LogInContainer>
        {/* <StyledLinkLogo to="/" onClick={scrollTop}>
          LOGO
        </StyledLinkLogo> */}
        <StyledLink1 to="/" onClick={scrollTop}>
          ЗДОРОВЬЕ
        </StyledLink1>
        <StyledLink2 to="/" onClick={scrollTop}>  
          ПЕЧЕНЬ
        </StyledLink2>
        <StyledLink3 to="/" onClick={scrollTop}>
          СЕРДЦЕ
        </StyledLink3>
        <StyledLink4 to="/" onClick={scrollTop}>
          КИШЕЧНИК
        </StyledLink4>
        <StyledLink5 to="/" onClick={scrollTop}>
          ЛИМФА
        </StyledLink5>
        <StyledLink6 to="/" onClick={scrollTop}>
          КОЖА
        </StyledLink6>
        <StyledButton to="/buy" onClick={scrollTop}>
          <Magnifier />
        </StyledButton>
        <Flag flagActive={flagActive} />
      </LogInContainer>
    </Container>
  );
};
export default HeaderMenu;
