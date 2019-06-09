import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { editBill } from '../../actions'

class EditBill extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <h3 className="">{error}</h3>
      )
    }
  }
  renderInput = ({ input, label, type, meta }) => {
    return (
      <div>
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" 
            type={type} 
            {...input} />
          {this.renderError(meta)}
        </div>
      </div>
    )
  }

  onSubmit = (formValues) => {
    console.log(formValues)
    console.log(this.props.bill._id)
    this.props.editBill(this.props.bill._id, formValues)
  }

  render() {
    return (
      <div className="block">
      <h1 className="title">Edit a Bill</h1>
      <h1 className="subtitle">{this.props.bill.name}</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="field">
            <Field name="name" component={this.renderInput} label="Bill name" type="text" />
            <Field name="cost" component={this.renderInput} label="Bill cost" type="number" />
            <Field name="dueDate" component={this.renderInput} label="Bill due date" type="date" />
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.name) {
    errors.name = 'You must enter a name'
  }

  if (!formValues.cost) {
    errors.cost = 'You must enter a cost'
  }

  if (!formValues.dueDate) {
    errors.dueDate = 'You must enter a due date'
  }

  return errors
}

const mapStateToProps = state => {
  return {
    bill: state.bills.selectedBill
  }
}



// const formWrapped = reduxForm({
//   form: 'createBill',
//   validate
// })(CreateBill)

// export default connect(
//   mapStateToProps,
//   { createBill }
// )(formWrapped)

const wrapped = connect(
  mapStateToProps,
  { editBill }
)(EditBill)

export default reduxForm({
  form: 'editBill',
  validate
})(wrapped)