import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Grid, Typography } from "@mui/material";
import Charts from "./Charts";
import { cardData } from "./common-data/Common-Data.jsx";

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1152px",
          maxHeight: "auto",
          backgroundColor: "#F7F9FB",
        }}
      >
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} lg={3}>
            <Card
              key={index}
              sx={{
                boxShadow: "none",
                Width: "270px",
                height: "100px",
                border: "1px solid #ccc",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ paddingRight: "5px" }}>{card.icon}</Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      {card.subtitle}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
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
