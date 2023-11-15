import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Grid, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Charts from "./Charts";

const Dashboard = () => {
  const cardData = [
    {
      icon: <ShoppingCartCheckoutIcon />,
      subtitle: "Total Points Spend",
      content: "£ 5240.21 ",
    },
    {
      icon: <ShoppingCartCheckoutIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <ShoppingCartCheckoutIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <ShoppingCartCheckoutIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <ShoppingCartCheckoutIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <ShoppingCartCheckoutIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <ShoppingCartCheckoutIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <ShoppingCartCheckoutIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
  ];

  return (
    <>
      <Grid
        container
        spacing={2} // Adjust the spacing between Grid items
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1152px",
          // margin: "0 auto",
          maxHeight: "224px",
        }}
      >
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} lg={3}>
            <Card
              key={index}
              sx={{ boxShadow: "none", Width: "270px", height: "100px",  border: "1px solid #ccc" }}
            >
              <CardContent>
                <Box sx={{
                  display: "flex", alignItems: "center"
                }}>
                  <Box sx={{paddingRight:'5px'}}>{card.icon}</Box>
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
