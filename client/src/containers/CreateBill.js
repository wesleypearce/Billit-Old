import React from 'react'

class CreateBill extends React.Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Name" />          
          </div>
        </div>
        <div className="field">
          <label className="label">Cost</label>
          <div className="control">
            <input className="input" type="number" placeholder="0" />          
          </div>
        </div>
        <div className="field">
          <label className="label">Due Date</label>
          <div className="control">
            <input className="input" type="date" placeholder={Date.now()} />          
          </div>
        </div>
      </div>
    )
  }
}

export default CreateBill