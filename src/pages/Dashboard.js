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
          Width: "1168px",
          Height: "843",
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
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "lightgrey",
                      width: "42px",
                      height: "42px",
                      marginLeft: '10px',
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Box sx={{
                    paddingLeft: "10px",
                    gap: "3px",
                  }}>
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
