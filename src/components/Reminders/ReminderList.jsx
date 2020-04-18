import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
    Delete
  </Button>
);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function ReminderList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent message="I love snacks." action={action} />
    </div>
  );
}