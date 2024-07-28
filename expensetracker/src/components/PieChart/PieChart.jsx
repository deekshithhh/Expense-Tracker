/* eslint-disable react/prop-types */
import React from "react";
import "./PieChart.css";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const CustomExpenseLegend = ({ payload }) => {
  return (
    <ul className="expenselegend">
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ color: "white" }}>
          <span
            style={{
              marginRight: 4,
              backgroundColor: entry.color,
              display: "inline-block",
              width: 26,
              height: 8,
            }}
          ></span>
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

const PieChartComponent = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
         <Legend iconType="rect" verticalAlign="bottom" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );


  //   return (
  //   <ResponsiveContainer width="100%" height={250}>
  //     <PieChart width={400} height={400}>
  //       <Pie
  //         data={data}
  //         cx="50%"
  //         cy="50%"
  //         labelLine={false}
          
  //         outerRadius={80}
  //         fill="#8884d8"
  //         dataKey="value"
  //       >
  //         {data.map((entry, index) => (
  //           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  //         ))}
  //       </Pie>
  //       <Legend iconType="rect" verticalAlign="bottom" />
  //     </PieChart>
  //   </ResponsiveContainer>
  // );
};

export default PieChartComponent;
