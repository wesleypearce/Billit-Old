import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class BillEditor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classes = this.props;

    return (
      <div>
      <h3>Create a Bill</h3>
      <form className={classes.container} noValidate>
        <TextField
          id="name"
          label="Name"
          type="text"
          defaultValue=""
          className={classes.textField}
        /><br />
        <TextField
          id="cost"
          label="Cost"
          type="number"
          defaultValue=""
          className={classes.textField}
        /><br />
        <TextField
          id="date"
          label="Due Date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      </div>
    )
  }
}
// <div className={classes.container}>
//   <FormControl className={classes.formControl}>
//     <InputLabel htmlFor="name">Name</InputLabel>
//     <Input type="text" id="name" value="" />
//   </FormControl>
//   <FormControl className={classes.formControl}>
//     <InputLabel htmlFor="cost">Cost</InputLabel>
//     <Input type="number" id="cost" value="" />
//   </FormControl>
//   <TextField
// </div>

export default BillEditor
