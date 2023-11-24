import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import AdjustIcon from '@mui/icons-material/Adjust';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
export const cardData = [
    {
      icon: <AutorenewIcon />,
      subtitle: "Total Points Spend",
      content: "£ 5240.21 ",
    },
    {
      icon: <VolunteerActivismIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <ChangeCircleIcon />,
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
      icon: <AdjustIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <PersonPinIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
    {
      icon: <LocalActivityIcon />,
      subtitle: "Total Points Spend",
      content: "£ 9,963.54 ",
    },
  ];

  export const series = [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 60, 35, 42]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 105, 91, 114]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 36, 26, 45]
  }];


  export const state = {
    series: series,
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "22%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };