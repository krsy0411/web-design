import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import WeatherGraph from "../Graph/WeatherGraph";
import WindGraph from "../Graph/WindGraph";
import "swiper/css";
import "swiper/css/navigation";
import { HumidityGraph } from "../Graph/HumidityGraph";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export function WeatherTab() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="날씨" />
          <Tab label="습도" />
          <Tab label="바람" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <WeatherGraph />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HumidityGraph />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WindGraph />
      </TabPanel>
    </Box>
  );
}