import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { firestore } from '../../firebase'



export default function BasicTextFields() {
  const classes = useStyles();
  const [reminderText, setReminderText] = useState('');
  const [category, setCategory] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();

    const reminder = {
      text: reminderText,
      category: category
    }

    firestore.collection('reminders').add(reminder)
    setCategory('')
    setReminderText('')
  }




  return (
    <div className={classes.flex}>
      <Grid container direction="row" justify="center" alignItems="center">

        <form
          className={classes.root}

          onSubmit={handleSubmit}
        >
          <Grid item xs={12} style={{ marginBottom: '1rem' }}>
            <TextField
              id="outlined-basic"
              label="Add A Reminder"
              variant="outlined"
              className={classes.textfield}
              value={reminderText}
              onChange={e => { setReminderText(e.target.value) }}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
              <Select
                native
                value={category}
                onChange={e => { setCategory(e.target.value) }}
                label="Category"
                inputProps={{
                  name: "Category",
                  id: "outlined-age-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value={'Daily'}>Daily</option>
                <option value={'Weekly'}>Weekly</option>
                <option value={'Monthly'}>Monthly</option>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <MyButton type="submit" value="Submit" color="blue">
              Submit
          </MyButton>
          </Grid>
        </form>


      </Grid>
    </div>

  );
}

const useStyles = makeStyles(theme => ({
  flex: {
    flexGrow: 1,
    marginTop: '3rem'
  },
  root: {
    margin: "20px auto",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  textfield: {
    width: "40ch",
    [theme.breakpoints.down('sm')]: {
      width: "22ch",
    },
  },
  formControl: {
    marginLeft: '1rem',
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

//? Submit button
const styles = {
  root: {
    background: props =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: props =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    width: "50%"
  }
};

function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}

MyButtonRaw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["blue", "red"]).isRequired
};

const MyButton = withStyles(styles)(MyButtonRaw);