import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createBill } from '../../actions'

class CreateBill extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <h3 className="">{error}</h3>
      )
    }
  }
  renderInput = ({ input, label, type, meta }) => {
    console.log(meta)
    return (
      <div>
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type={type} {...input} />
          {this.renderError(meta)}
        </div>
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.createBill(formValues)
  }

  render() {
    return (
      <div className="block">
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
    bills: state.bills
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
  { createBill }
)(CreateBill)

export default reduxForm({
  form: 'createBill',
  validate
})(wrapped)