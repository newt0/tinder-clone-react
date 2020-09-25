import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Emma Watson",
      url:
        "https://media.vogue.co.jp/photos/5f02fee724df9f42f221464f/master/w_720%2cc_limit/_Emma-Watson-vogue-240620-credit-Alasdair-McLellan-Art-Partner.jpg",
    },
    {
      name: "Kanna Hashimoto",
      url:
        "https://www.discovery-n.co.jp/wp-content/uploads/2016/12/bf5cbef773c70449c9d1389e01edc8b6.jpg",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name}>
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
              preventSwipe={["up", "down"]}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
