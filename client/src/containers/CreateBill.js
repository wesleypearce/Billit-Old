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
      </div>
    )
  }
}

export default CreateBill