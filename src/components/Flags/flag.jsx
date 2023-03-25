import { useState, useContext, useEffect } from "react";
import CartContext from "../../CartContext";
import {
  HeaderCountryDropdown,
  DropdownHeaderSpan,
  DropdownHeaderText,
  DropdownHeaderDiv,
  SingleSection,
  I,
  RowLine,
  ArrowSelection,
  Ul,
  Li,
  Div,
  Save,
} from "./flag.style";
import { useTranslation } from "react-i18next";
import "../utils/i18next";
const Flag = ({ flagActive }) => {
  const { i18n } = useTranslation();
  const { addToFlag } = useContext(CartContext);
  const [resultCheck, setResultCheck] = useState(false);
  const [languages, setLanguages] = useState([
    { src: "https://flagcdn.com/ua.svg", language: "Ukraine" },
  ]);
  // const [flagActivee, setFlagActivee] = useState(flagActive);
  // const flagChange = () => {
  //   flagActive(false);
  // };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("language"));

    if (todos[0].language === "English") {
      setLanguages([
        { src: "https://flagcdn.com/us.svg", language: "English" },
      ]);
    } else if (todos[0].language === "Russian") {
      setLanguages([
        { src: "https://flagcdn.com/ru.svg", language: "Russian" },
      ]);
    }
    //  if(todos === null)
    else {
      setLanguages([
        { src: "https://flagcdn.com/ua.svg", language: "Ukraine" },
      ]);
    }
  }, []);

  const handleClick = (event) => {
    const ariaExpanded = event.currentTarget.getAttribute("aria-expanded");
    if (ariaExpanded === "true") {
      event.currentTarget.setAttribute("aria-expanded", false);
      setResultCheck(false);
    } else {
      event.currentTarget.setAttribute("aria-expanded", true);
      setResultCheck(true);
    }
  };
  const languagess = languages[0].language;

  // const changeFlag = () => {
  //   // addToFlag(languages);
  //   flagActive(false);
  //   // flagChange();
  // };
  const changeFlagUa = () => {
    setLanguages([{ src: "https://flagcdn.com/ua.svg", language: "Ukraine" }]);
    setResultCheck(false);
    // addToFlag([{ src: "https://flagcdn.com/ua.svg", language: "Ukraine" }]);

    localStorage.setItem(
      "language",
      JSON.stringify([
        { src: "https://flagcdn.com/ua.svg", language: "Ukraine" },
      ])
    );
  };
  const changeFlagRu = () => {
    setLanguages([{ src: "https://flagcdn.com/ru.svg", language: "Russian" }]);
    setResultCheck(false);
    // addToFlag([{ src: "https://flagcdn.com/ru.svg", language: "Russian" }]);

    localStorage.setItem(
      "language",
      JSON.stringify([
        { src: "https://flagcdn.com/ru.svg", language: "Russian" },
      ])
    );
  };
  const changeFlagEs = () => {
    setLanguages([{ src: "https://flagcdn.com/us.svg", language: "English" }]);
    setResultCheck(false);
    // addToFlag([{ src: "https://flagcdn.com/us.svg", language: "English" }]);

    localStorage.setItem(
      "language",
      JSON.stringify([
        { src: "https://flagcdn.com/us.svg", language: "English" },
      ])
    );
  };
  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleNameChange = (event) => {
    flagActive(event.target.value)
  }

  return (
    flagActive && (
      <HeaderCountryDropdown>
        <Div>
          <DropdownHeaderSpan>Язык сайта</DropdownHeaderSpan>
          <SingleSection onClick={handleClick}>
            <DropdownHeaderDiv>
              {languages.map((language, index) => {
                return (
                  <RowLine key={index}>
                    <img
                      src={language.src}
                      alt={language.language}
                      width="18"
                    ></img>
                    <DropdownHeaderText>{language.language}</DropdownHeaderText>
                  </RowLine>
                );
              })}
              <ArrowSelection>
                <I />
              </ArrowSelection>
            </DropdownHeaderDiv>
            <Ul style={{ display: resultCheck ? "block" : "none" }}>
              <Li
                onClick={changeFlagUa}
                style={{
                  backgroundColor:
                    languagess === "Ukraine" ? "#f4f4f4" : "#fff",
                }}
              >
                <DropdownHeaderDiv onClick={() => changleLanguage("ua")}>
                  <img
                    src="https://flagcdn.com/ua.svg"
                    width="18"
                    alt="Ukraine"
                  ></img>
                  <DropdownHeaderText>Ukraine</DropdownHeaderText>
                </DropdownHeaderDiv>
              </Li>
              <Li
                onClick={changeFlagEs}
                style={{
                  backgroundColor:
                    languagess === "English" ? "#f4f4f4" : "#fff",
                }}
              >
                <DropdownHeaderDiv onClick={() => changleLanguage("eng")}>
                  <img
                    src="https://flagcdn.com/us.svg"
                    width="18"
                    alt="English"
                  ></img>
                  <DropdownHeaderText>English</DropdownHeaderText>
                </DropdownHeaderDiv>
              </Li>
              <Li
                onClick={changeFlagRu}
                style={{
                  backgroundColor:
                    languagess === "Russian" ? "#f4f4f4" : "#fff",
                }}
              >
                <DropdownHeaderDiv onClick={() => changleLanguage("ru")}>
                  <img
                    src="https://flagcdn.com/ru.svg"
                    width="18"
                    alt="Russian"
                  ></img>
                  <DropdownHeaderText>Russian</DropdownHeaderText>
                </DropdownHeaderDiv>
              </Li>
            </Ul>
          </SingleSection>
        </Div>
        <Save 
        // onClick={changeFlag} 
        onChange={handleNameChange}>Сохранить</Save>
      </HeaderCountryDropdown>
    )
  );
};

export default Flag;
