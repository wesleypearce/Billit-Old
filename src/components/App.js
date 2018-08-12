import React, { Component } from 'react';
import BillViewer from '../containers/BillViewer'
import BillEditor from '../containers/BillEditor'
import '../style.css'

class App extends Component {
  render() {
    return (
      <div className="my-container">
        <BillEditor />
        <BillViewer />
      </div>
    );
  }
}

export default App;
