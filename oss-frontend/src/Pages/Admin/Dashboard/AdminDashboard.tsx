import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { chartsGridClasses } from "@mui/x-charts/ChartsGrid";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  salesData,
  keyToLabel1,
  colors1,
} from "../../../assets/Data/SalesData";
import {
  productSalesData,
  keyToLabel2,
  colors2,
} from "../../../assets/Data/ProductSalesData";
import { LineChart } from "@mui/x-charts";
import { revenueData, valueFormatter } from "../../../assets/Data/RevenueData";

import Grid from "@mui/material/Grid2";
import { StatCard } from "../../../Components/DashboardCard";
import { Box, Typography } from "@mui/material";

// for stat card

const fetchRegisteredUsers = async () => {
  return new Promise<number>((resolve) => setTimeout(() => resolve(83), 1000));
};
const fetchOrders = async () => {
  return new Promise<number>((resolve) => setTimeout(() => resolve(55), 1000));
};
const fetchCategories = async () => {
  return new Promise<number>((resolve) =>
    setTimeout(() => resolve(8569), 1000)
  );
};

// for graphs
const stackStrategy1 = {
  stack: "total",
  stackOffset: "none",
} as const;

const stackStrategy2 = {
  stack: "total",
  // area: true,
  stackOffset: "none",
} as const;

const customize = {
  height: 300,
  legend: { hidden: true },
  margin: { top: 20, right: 20, bottom: 40, left: 40 },
};

const chartSetting = {
  height: 300,
  legend: { hidden: true },
  margin: { top: 20, right: 20, bottom: 40, left: 40 },
};

export const AdminDashboard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        maxWidth: "100vw",
        // padding: "20px",
        boxSizing: "border-box",
        // margin: "0",
      }}
    >
      {/* stat cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // gap: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <StatCard
                title="Registered Users"
                fetchData={fetchRegisteredUsers}
                icon={<i className="fas fa-users" />}
                bgColor="#4caf50"
                valueKey={""}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <StatCard
                title="All Categories"
                fetchData={fetchCategories}
                icon={<i className="fas fa-dollar-sign" />}
                bgColor="#ff9800"
                valueKey={""}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <StatCard
                title="All Orders"
                fetchData={fetchOrders}
                icon={<i className="fas fa-campaign" />}
                bgColor="#2196f3"
                valueKey={""}
              />
            </Grid>
          </Grid>
        </div>

        {/* graphs */}
        <div style={{ flex: 1 }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              flex: 1,
              minWidth: "300px",
            }}
          >
            <Typography color="grey">Sales Data Over Years</Typography>
            <LineChart
              xAxis={[
                {
                  dataKey: "year",
                  valueFormatter: (value) => value.toString(),
                  min: 2010,
                  max: 2024,
                  disableLine: true,
                },
              ]}
              yAxis={[
                {
                  disableLine: true,
                  min: 100,
                  max: 4000,
                },
              ]}
              series={Object.keys(keyToLabel1).map((key) => ({
                dataKey: key,
                label: keyToLabel1[key],
                color: colors1[key],
                showMark: false,
                ...stackStrategy1,
              }))}
              dataset={salesData}
              // {...customize}
              width={500}
              height={300}
              margin={{ left: 70 }}
            />
          </Box>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px", marginTop: "30px" }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              flex: 1,
              minWidth: "300px",
            }}
          >
            <Typography color="grey">Sales According to Category</Typography>
            <LineChart
              xAxis={[
                {
                  scaleType: "band",
                  dataKey: "month",
                  valueFormatter: (value) => value,
                  disableLine: "true",
                },
              ]}
              yAxis={[{ disableLine: "true" }]}
              series={Object.keys(keyToLabel2).map((key) => ({
                dataKey: key,
                label: keyToLabel2[key],
                color: colors2[key],
                showMark: false,
                ...stackStrategy2,
              }))}
              dataset={productSalesData}
              // {...customize}
              width={500}
              height={300}
              margin={{ left: 70 }}
            />
          </Box>
        </div>

        <div style={{ flex: 1, minWidth: "300px", marginTop: "30px" }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              flex: 1,
              minWidth: "300px",
            }}
          >
            <Typography color="grey">Revenue Over Months</Typography>
            <BarChart
              dataset={revenueData}
              xAxis={[
                { scaleType: "band", dataKey: "month", disableLine: "true" },
              ]}
              series={[
                { dataKey: "revenue", valueFormatter, disableLine: "true" },
              ]}
              grid={{ horizontal: true }}
              sx={{
                [`& .${axisClasses.left} .${axisClasses.label}`]: {
                  transform: "translateX(-10px)",
                },
                [`& .${chartsGridClasses.line}`]: {
                  strokeDasharray: "5 3",
                  strokeWidth: 2,
                },
              }}
              // {...chartSetting}
              width={500}
              height={300}
              margin={{ left: 70 }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
