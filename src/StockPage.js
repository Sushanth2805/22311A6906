import React, { useState, useEffect } from "react";
import axios from "axios";

const StockPage = () => {
  const [stock, setStock] = useState(null);
  const [ticker, setTicker] = useState("NVDA");
  const [minutes, setMinutes] = useState(50);

  useEffect(() => {
    const fetchStockData = async () => {
      const response = await axios.get(
        `http://20.244.56.144/evaluation-service/stocks/${ticker}?minutes=${minutes}`
      );
      setStock(response.data);
    };
    fetchStockData();
  }, [ticker, minutes]);

  const handleTickerChange = (event) => {
    setTicker(event.target.value);
  };

  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  return (
    <div>
      <h1>Stock Page</h1>
      <select value={ticker} onChange={handleTickerChange}>
        <option value="NVDA">Nvidia Corporation</option>
        <option value="AAPL">Apple Inc.</option>
        <option value="GOOGL">Alphabet Inc. Class A</option>
        {/* Add more options for other stocks */}
      </select>
      <select value={minutes} onChange={handleMinutesChange}>
        <option value={50}>50 minutes</option>
        <option value={100}>100 minutes</option>
        <option value={200}>200 minutes</option>
        {/* Add more options for other time frames */}
      </select>
      {stock && (
        <div>
          <h2>Current Price: {stock.price}</h2>
          <h2>Price History:</h2>
          <ul>
            {stock.map((priceHistory) => (
              <li key={priceHistory.lastUpdatedAt}>
                {priceHistory.price} at {priceHistory.lastUpdatedAt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StockPage;
