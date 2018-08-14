import React, { Component } from 'react';
import BillViewer from '../containers/BillViewer'
import BillEditor from '../containers/BillEditor'
import '../style.css'

const jumbotronStyle = {
  fontFamily: 'Roboto',
  fontSize: '16px',
  backgroundColor: 'rgb(61, 3, 108)',
  color: 'white',
  textAlign: 'center'
}

class App extends Component {
  render() {
    return (
      <div>
        <div style={jumbotronStyle} className="jumbotron">
          <h1>Billit!</h1>
          <p>
            A quick, effective way to stay up to speed with your upcoming bills.
          </p>
        </div>
        <div className="my-container">
          <BillEditor />
          <BillViewer />
        </div>
      </div>
    )
  }
}

export default App;
