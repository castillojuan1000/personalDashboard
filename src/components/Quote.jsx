import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",

    background: 'transparent',
    color: 'white'

  },


}));

// return <div>{quote === undefined ? staticQuote.text : quote.text}</div>;
export default function Quote1({ quote, staticQuote }) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

            <Typography variant="h6" component="h2">
              {quote === undefined
                ? `${staticQuote.text}  -${staticQuote.author}`
                : `${quote.text}  -${quote.author}`}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}