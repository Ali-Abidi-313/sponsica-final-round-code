"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [brand, setBrand] = useState("");
  const [budget, setBudget] = useState("");
  const [respondMsg, setRespondMsg] = useState("");
  const [offers, setOffers] = useState([]);

  const handleSubmit = async(event) => {
    event.preventDefault(); 

    const res = await fetch("http://localhost:5000/api/offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ brand, budget: Number(budget) }),
    });

    const data = await res.json();
    setRespondMsg(data.message);

    
    setOffers([...offers, { brand, budget }]);

    setBrand("");
    setBudget("");
  };

  return (
    <div>
      <div>
        <h1>Sponsica hii</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Brand Name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <br /> <br />

          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <br /> <br />
          <button type="submit">Submit</button>
        </form>

        <h3>{respondMsg}</h3>

        <ul>
          {offers.map((o, index) => (
            <li key={index}>
              {o.brand} - {o.budget}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )};

