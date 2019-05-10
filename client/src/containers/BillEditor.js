import React from 'react'

class BillEditor extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello!</h3>
      </div>
    )
  }
}

export default BillEditor

// const billEditorStyle = {
//   backgroundColor: 'white'
// }

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     padding: '5px',
//     flexDirection: 'column'
//   },
//   button: {
//     flexGrow: 1,
//     margin: '5px',
//     alignSelf: 'center'
//   }
// })

// class BillEditor extends Component {
//   state = {
//     name: '',
//     cost: 0,
//     dueDate: '',
//     isEdit: false
//   }

//   // On submit of new bill form, a new bill is created and stored in the redux store
//   handleClick = () => {
//     this.props.createBill(this.state)
//   }

//   // Handle input change depending on name property of form field
//   handleInputChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   render() {
//     const { classes } = this.props;
//     let message;
//     if(this.state.isEdit === false) {
//       message = 'Create a Bill';
//     } else {
//       message = 'Edit a Bill';
//     }

//     return (
//       <div style={billEditorStyle}>
//       <h3>{message}</h3>
//       <form className={classes.container} noValidate>
//         <TextField
//           id="name"
//           label="Name"
//           type="text"
//           name="name"
//           defaultValue=""
//           onChange={this.handleInputChange}
//           className={classes.textField}
//         /><br />
//         <TextField
//           id="cost"
//           label="Cost"
//           type="number"
//           name="cost"
//           defaultValue=""
//           onChange={this.handleInputChange}
//           className={classes.textField}
//         /><br />
//         <TextField
//           id="date"
//           label="Due Date"
//           type="date"
//           name="dueDate"
//           defaultValue=""
//           onChange={this.handleInputChange}
//           className={classes.textField}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//       </form>
//       <Button variant="outlined" onClick={this.handleClick} className={classes.button} color="primary">
//         Create
//       </Button>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     bills: state.bills
//   }
// }

// export default compose(
//   withStyles(styles, { name: 'BillEditor' }),
//   connect(mapStateToProps, { createBill })
// )(BillEditor)
