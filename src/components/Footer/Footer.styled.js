import styled from "styled-components";

export const Footerr = styled.footer`
  height: 250px;
  padding: 20px 20px;
  // background-image: linear-gradient(90deg, #8748cf, #27cc8d);

  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  // position: relative;
  background-color: antiquewhite;
`;

export const Container = styled.div`
  // display: flex;
  text-align: center;
  justify-content: center;
  width: 80%;
  // padding: 20px;
  margin: 0 auto 0 auto;
`;

export const FooterLogo = styled.a`
  display: block;
  align-items: center;
  // max-width: 180px;
  max-width: 50px;
  margin: 0 auto 50px;
  color: #fff;

  @media screen and (max-width: 480px) {
    // max-width: 216px;
    max-width: 50px;
    margin-bottom: 30px;
  }
`;

export const LogInContainer = styled.div`
  // min-height: 300px;
  // display: flex;
  // background-color: #212121;

  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const FooterItem = styled.ul`
  display: flex;

  @media screen and (min-width: 320px) {
    padding: 10px;
    height: 170px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    height: 170px;
  }
`;

export const FooterLi = styled.li`
  // background: tomato;
  // display: flex;

  @media screen and (min-width: 320px) {
    // width: 70px;
    margin: 0 10px 10px;
  }

  @media screen and (min-width: 768px) {
    // width: 150px;
    margin: 0 10px 10px;
    padding: 5px;
  }
`;

export const FooterLink = styled.a`
  color: white;
  display: block;
  padding: 5px;

  @media screen and (min-width: 320px) {
    height: 15px;
    padding: 4px;
  }

  @media screen and (min-width: 768px) {
    height: 20px;
    padding: 6px;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 20px;

  // color: #000;
  // height: 14px;
  // margin: 0 0 20px 0;
`;

export const FooterButton = styled.button`
  padding: 10px 24px;
  color: #fff;
  background-image: linear-gradient(90deg, #13e780, #03daf2);
  border-radius: 20px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  z-index: 1;
  display: inline-block;
`;

export const FooterImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const FooterLiImg = styled.li`
  display: flex;
  margin: 0 9px;
`;

export const BottomFooter = styled.div`
  margin-top: 50px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-weight: 300;
`;

export const BottomFooterText = styled.p`
  // margin-top: 50px;
  margin: 50px auto auto 0;
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-weight: 300;
`;
