import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

const Dashboard = () => {
  const cardData = [
      {subtitle: "Total Points Spend", content: "£ 5240.21 " },
      {subtitle: "Total Points Spend", content: "£ 9,963.54 " },
      {subtitle: "Total Points Spend", content: "£ 9,963.54 " },
      {subtitle: "Total Points Spend", content: "£ 9,963.54 " },
      {subtitle: "Total Points Spend", content: "£ 9,963.54 " },
      {subtitle: "Total Points Spend", content: "£ 9,963.54 " },
      {subtitle: "Total Points Spend", content: "£ 9,963.54 " },
      {subtitle: "Total Points Spend", content: "£ 9,963.54 " },
  ];

  return (
    <>
      <Grid  container
      spacing={2} // Adjust the spacing between Grid items
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: '1152px',
        margin: '0 auto',
        maxHeight: '224px'
      }}>
        {cardData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
          <Card key={index} sx={{ Width: '270px', height: '100px' }}>
            <CardContent>
              {/* <Typography variant="h7" component="div">
                {card.title}
              </Typography> */}
              <Typography variant="subtitle2" sx={{ mb: 1.5 }} color="text.secondary">
                {card.subtitle}
              </Typography>
              <Typography sx={{
                fontWeight: "bold",
              }} color="text.secondary">
                {card.content}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
