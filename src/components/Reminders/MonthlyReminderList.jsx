import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RemindersContext } from '../../context/RemindersContext';
import Reminder from './Reminder'



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function MontlyReminderList() {
  const classes = useStyles();


  const reminders = useContext(RemindersContext)
  const montlyReminder = reminders.filter(reminder => reminder.category === 'Monthly')



  return (
    <div className={classes.root}>
      {
        montlyReminder.map(reminder => <Reminder reminder={reminder} key={reminder.id} />)
      }

    </div>
  );
}