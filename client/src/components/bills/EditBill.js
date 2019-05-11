import React from 'react'

class EditBill extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Edit a Bill</h1>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" onChange={this.handleInputChange} name="name" type="text" placeholder="" />          
          </div>
        </div>
        <div className="field">
          <label className="label">Cost</label>
          <div className="control">
            <input className="input" onChange={this.handleInputChange} name="cost" type="number" placeholder="" />          
          </div>
        </div>
        <div className="field">
          <label className="label">Due Date</label>
          <div className="control">
            <input className="input" onChange={this.handleInputChange} name="dueDate" type="date" placeholder={Date.now()} />          
          </div>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.handleClick}>Create</button>
        </div>
      </div>
    )
  }
}

export default EditBill