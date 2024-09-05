import React from 'react';
import FigureBox from './Figurebox';
import Graph from './Graph';
import Alert from './Alerts';
import Map from './MapEmbed';

function Dashboard() {
  // Example ship data
  const shipData = {
    ShipName: "DCI DREDGE XII",
    latitude: 9.9389,
    longitude: 76.1777,
    PositionReport: {
      Sog: 0.2,
      TrueHeading: 333,
      RateOfTurn: 18,
      NavigationalStatus: 0,
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl">REALTIME OIL SPILL MONITORING</h1>
      </div>

      <div className="mb-6 m-5 flex space-x-4">
        <FigureBox title="Anomalies Detected" value="32" />
        <FigureBox title="Confirmed Spills" value="5" />
        <FigureBox title="Ships Being Monitored" value="1538" />
        <Graph />
      </div>

      <div className="flex space-x-4">
        {/* Pass the ship data and coordinates to the Map */}
        <div className="w-1/2 bg-gray-100 p-4 rounded-lg">
          <div className="text-center text-lg font-semibold">Map View</div>
          <Map lat={shipData.latitude} lng={shipData.longitude} shipData={shipData} />
        </div>

        <div className="w-1/2 space-y-4">
          <Alert name="Alert 1" />
          <Alert name="Alert 2" />
          <Alert name="Alert 3" />
          <Alert name="Alert 4" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
