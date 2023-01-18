// import { get } from "immer/dist/internal";
import { useState, useEffect } from "react";
import {
  Input,
  Searchh,
  Leftarroww,
  LeftarrowwText,
  Container,
} from "../Header/Header.styled";
import { ReactComponent as Leftarrow } from "../../images/svg/leftarrowsign.svg";
import productsJson from "../Products/ItemProducts.json";
import "../Products/Products.css";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  // const getProducts = () => {
  //   get("products.title").then((response) => {
  //     setProduct(response.json);
  //   });
  // };
  useEffect(() => {
    const getProducts = () => {
      setProducts(productsJson);
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(value.toLowerCase());
  });
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const onTextChanged = (event) => {
    const text = event.target.value.trim();

    setValue(text);
  };

  const handleAnswerChange = (event) => {
    if (value !== "") {
    }
  };
  return (
    <Container>
      <Leftarroww to="/" onClick={scrollTop}>
        <Leftarrow width={22} height={22} />
        <LeftarrowwText>Назад</LeftarrowwText>
      </Leftarroww>
      <Searchh>
        <Input
          type="text"
          placeholder="Поиск..."
          onChange={onTextChanged}
          onKeyPress={handleAnswerChange}
        />
      </Searchh>
      <section className="cards__content">
        <ul className="cards__ul">
          {filteredProducts.map((country, index) => {
            return (
              <li className="card" key={index}>
                <div className="product__img">
                  <img
                    src={require("../../images/jpg/" + country.img + ".jpg")}
                    alt="country.img"
                    width={300}
                    height={350}
                  />
                </div>
                <div className="card__inf">
                  <div className="product__name">
                    <span> {country.volume}</span>
                  </div>
                  <div className="product__cost">
                    <p>{country.title}</p>
                  </div>
                  <div className="product__btn">
                    <button className="btn__go">Перейти</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
};

export default Search;
