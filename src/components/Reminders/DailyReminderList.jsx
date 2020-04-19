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

export default function DailyReminderList() {
  const classes = useStyles();


  const reminders = useContext(RemindersContext)
  const dailyReminder = reminders.filter(reminder => reminder.category === 'Daily')



  return (
    <div className={classes.root}>
      {
        dailyReminder.map(reminder => <Reminder reminder={reminder} key={reminder.id} />)
      }

    </div>
  );
}