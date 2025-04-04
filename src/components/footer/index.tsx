import logo from "../../public/assets/logo.png";
import instagramIcon from "../../public/icons/instagram.png";
import facebookIcon from "../../public/icons/facebook.png";
import twittericon from "../../public/icons/twitter.png";
import { FooterContainer, FooterLinks, FooterText } from "./style";

export const Footer = () => (
  <FooterContainer>
    <div>
      <img src={logo} alt="Efood" />
      <FooterLinks>
        <li>
          <a href="#">
            <img src={instagramIcon} alt="Nosso Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebookIcon} alt="Nosso Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twittericon} alt="Nosso Twitter" />
          </a>
        </li>
      </FooterLinks>
    </div>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </FooterContainer>
);
