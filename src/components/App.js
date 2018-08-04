import React, { Component } from 'react';
import BillViewer from '../containers/BillViewer'
import BillEditor from '../containers/BillEditor'
import '../style.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline'
  }
})

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classes = this.props

    return (
      <div className="my-container">
        <BillEditor />
        <BillViewer />
      </div>
    );
  }
}

export default App;
