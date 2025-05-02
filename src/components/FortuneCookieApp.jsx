import { useState } from "react";
import FortuneDisplay from "./FortuneDisplay";

import "../App.css";

const FortuneCookieApp = () => {
  const [fortune, setFortune] = useState();
  const [loading, setLoading] = useState(false);
  const [fortuneList, setFortuneList] = useState([]);

  const getFortune = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/fortune-cookie.json?key=789f2410"
      );
      const data = await response.json();
      console.log(11111, data.message);
      setFortune(data.message);
      //   shto ne liste
      setFortuneList((prevList) => [...prevList, data.message]);
    } catch (error) {
      console.error("Error", error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="fortune-title">Crack the Fortune Cookie 🥠</div>
      <div className="fortune-cookie" onClick={getFortune}>
        🥠
      </div>
      {loading ? <p>Loading... </p> : <FortuneDisplay fortune={fortune} />}

      <button className="get-another-btn" onClick={getFortune}>
        Get Another Fortune
      </button>

      <h3>Fortunes List:</h3>
      <ul className="fortune-list">
        {fortuneList.map((fortuneItem, index) => (
          <li key={index}>{fortuneItem}</li>
        ))}
      </ul>
    </>
  );
};

export default FortuneCookieApp;
