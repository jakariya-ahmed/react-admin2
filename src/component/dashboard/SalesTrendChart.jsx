import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { salesTrendData } from "../../data/dashboardData";

const SalesTrendChart = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h2 className="text-gray-800 font-semibold mb-4">Sales Trend</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={salesTrendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#f59e0b" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesTrendChart;
