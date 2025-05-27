import React, { useState, useEffect } from "react";
import axios from "axios";

const CorrelationHeatmapPage = () => {
  const [correlationData, setCorrelationData] = useState(null);
  const [minutes, setMinutes] = useState(50);

  useEffect(() => {
    const fetchCorrelationData = async () => {
      const response = await axios.get(
        `http://20.244.56.144/evaluation-service/correlation?minutes=${minutes}`
      );
      setCorrelationData(response.data);
    };
    fetchCorrelationData();
  }, [minutes]);

  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  return (
    <div>
      <h1>Correlation Heatmap Page</h1>
      <select value={minutes} onChange={handleMinutesChange}>
        <option value={50}>50 minutes</option>
        <option value={100}>100 minutes</option>
        <option value={200}>200 minutes</option>
        {/* Add more options for other time frames */}
      </select>
      {correlationData && (
        <div>
          <h2>Correlation Heatmap:</h2>
          {/* Render the correlation heatmap using a library like react-heatmap */}
          {/* For simplicity, let's just display the correlation data as a table */}
          <table>
            <thead>
              <tr>
                <th>Stock 1</th>
                <th>Stock 2</th>
                <th>Correlation Coefficient</th>
              </tr>
            </thead>
            <tbody>
              {correlationData.map((correlation) => (
                <tr key={correlation.stock1 + correlation.stock2}>
                  <td>{correlation.stock1}</td>
                  <td>{correlation.stock2}</td>
                  <td>{correlation.coefficient}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CorrelationHeatmapPage;
