import React from 'react';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { firestore } from '../../firebase'




export default function Reminder({ reminder }) {

  const { text, id } = reminder;

  const action = (
    <Button color="secondary" size="small" onClick={() => {
      firestore.doc(`reminders/${id}`).delete()
    }}>

      Delete
    </Button>
  );




  return (
    <SnackbarContent message={`${text}`} action={action} />
  )
}