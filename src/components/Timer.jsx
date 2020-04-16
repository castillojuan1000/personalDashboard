import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  buttons: {
    fontWeight: 900,
    color: 'white'
  }
}));

export default function Timer({ handleTime }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button data-milliseconds="1800000" onClick={handleTime} className={classes.buttons}>
          30mins
        </Button>
        <Button data-milliseconds="3600000" onClick={handleTime} className={classes.buttons}>
          1Hr
        </Button>
        <Button data-milliseconds="43200000" onClick={handleTime} className={classes.buttons}>
          12Hrs
        </Button>
        <Button data-milliseconds="86400000" onClick={handleTime} className={classes.buttons}>
          1Day
        </Button>

      </ButtonGroup>
    </div>
  );
}

