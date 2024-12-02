import { Paper, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

// Define a type for the props
interface PageHeaderProps {
  title: string;
  subTitle: string;
  icon: React.ReactNode; // This allows any valid React component or element
}

// Define the useStyles hook with proper typing for the theme
const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  PageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
  },
  pageTitle: {
    paddingLeft: theme.spacing(3),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

// Define the functional component with the props type
const PageHeader: React.FC<PageHeaderProps> = ({ title, subTitle, icon }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          {/* For the title of the page */}
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          {/* For the subtitle of the page */}
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
