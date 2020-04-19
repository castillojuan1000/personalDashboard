import React from 'react';

import TimerAndQuote from './components/Timer&Quote/TimerAndQuote'
import ExpenseTracker from '../src/components/ExpenseTracker/ExpenseTracker'
import RemindersPage from './components/Reminders/RemindersPage'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '80vh',
    overflow: 'auto'
  },
  removeGap: {

    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <TimerAndQuote />
      <div className={classes.root} >
        <Grid container spacing={3} >

          <Grid item xs={12} sm={6} style={{ paddingRight: 0, paddingBottom: 0 }}>
            <Paper className={classes.paper} >
              <ExpenseTracker />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} style={{ paddingLeft: 0 }}>
            <Paper className={classes.paper}  >
              <RemindersPage />
            </Paper>
          </Grid>

        </Grid>
      </div>
    </>
  );
}

export default App;
