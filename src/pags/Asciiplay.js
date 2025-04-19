import { useEffect } from "react";
import Header from "../components/Header/Header.js";
import BurguerMenu from "components/BurguerMenu/BurguerMenu.js";
import TitleBanner from "components/TitleBanner/TitleBanner.js";
import ButtonWhatsapp from "components/ButtonWhatsapp/ButtonWhatsapp.js";
import ASCIIPlayCard from "components/ASCIIPlayCard/ASCIIPlayCard.js";
import { asciiplayCards } from "data/asciiplayCards";

function Asciiplay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BurguerMenu theme="light" />
      <Header theme="dark" />
      <ButtonWhatsapp />
      <TitleBanner title="ASCII Play" image="" />

      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {asciiplayCards.map((card, index) => (
            <ASCIIPlayCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Asciiplay;

