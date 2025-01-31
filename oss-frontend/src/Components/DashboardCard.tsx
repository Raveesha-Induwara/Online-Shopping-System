import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

// Define props for the card
interface StatCardProps {
  title: string;
  valueKey: string; // Key to fetch the value
  fetchData: () => Promise<number>; // Function to fetch data
  icon: JSX.Element; // Icon component
  bgColor: string; // Background color
}

export const StatCard: React.FC<StatCardProps> = ({ title, valueKey, fetchData, icon, bgColor }) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    // Fetch data initially and set up an interval to update
    const updateValue = async () => {
      const newValue = await fetchData();
      setValue(newValue);
    };

    updateValue(); // Fetch immediately
    const interval = setInterval(updateValue, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [fetchData]);

  return (
    <Card
      sx={{
        backgroundColor: bgColor,
        color: 'white',
        borderRadius: 2,
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        width:'150px',
        height:'100px'
      }}
    >
      <Box sx={{ marginRight: 2 }}>{icon}</Box>
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
        <Typography variant="subtitle1">{title}</Typography>
      </CardContent>
    </Card>
  );
};

