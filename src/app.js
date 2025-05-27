import React from "react";
import StockPage from "./StockPage";
import CorrelationHeatmapPage from "./CorrelationHeatmapPage";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Stock Price Aggregation App</h1>
        <nav>
          <ul>
            <li>
              <a href="/stock-page">Stock Page</a>
            </li>
            <li>
              <a href="/correlation-heatmap-page">Correlation Heatmap Page</a>
            </li>
          </ul>
        </nav>
        <StockPage />
        <CorrelationHeatmapPage />
      </div>
    </React.StrictMode>
  );
};

export default App;
