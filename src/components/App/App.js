import React from 'react';
import Card from "../Card"

const App = () => {
  const cardsData = [{
    title: "Sedans",
    description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    imgLink: "./icon-sedans.svg",
    bgColor: "orange",
  }, {
    title: "SUVs",
    description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    imgLink: "./icon-suvs.svg",
    bgColor: "cyan-light",
  }, {
    title: "Luxury",
    description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    imgLink: "./icon-luxury.svg",
    bgColor: "cyan-dark",
  }]

  return (
    <main className="px-6 py-22 mx-auto lg:w-2/3 lg:py-56">
      <h1 className="sr-only">3 Column Card Layout</h1>
      <div className="flex flex-col rounded-lg overflow-hidden lg:flex-row">
        {cardsData.map((cardData, index) => (
          <Card key={index} content={cardData} />
        ))}
      </div>
    </main>
  );
}

export default App;