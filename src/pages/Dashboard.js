import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Grid, Typography } from "@mui/material";
import Charts from "./Charts";
import { cardData } from "./common-data/Common-Data.jsx";
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <>
      <Grid 
        container
        spacing={2}
        >
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} lg={3}>
            <Card className="main-card"
              key={index}
            >
              <CardContent>
                <Box className="main-card-content">
                  <Box className="card-icons">
                    {card.icon}
                  </Box>
                  <Box sx={{
                    paddingLeft: "10px",
                    gap: "3px",
                  }}>
                    <Typography className="main-typography" sx={{
                      fontWeight: "600",
                      fontSize: "12px",
                    }} 
                    variant="subtitle2" color="text.secondary">
                      {card.subtitle}
                    </Typography>
                    <Typography className="main-typography"
                      sx={{
                      fontWeight: "700",
                      fontSize: "20px",
                      }}
                      color="text.secondary"
                    >
                      {card.content}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Charts />
    </>
  );
};

export default Dashboard;
