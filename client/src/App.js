import React, { Component } from 'react';
import BillViewer from './containers/BillViewer'
import BillEditor from './containers/BillEditor'
import CreateBill from './containers/CreateBill'
import BillList from './containers/BillList'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import './style.css'
import '../node_modules/bulma/css/bulma.min.css'

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#6a1b9a',
//     },
//     secondary: {
//       light: '#b6ffff',
//       main: '#81d4fa',
//       contrastText: '#000000',
//     },
//   },
// })
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      light: '#8bf6ff',
      main: '#4fc3f7',
      contrastText: '#fafafa',
    },
  },
})

const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  billEditor: {
    flexBasis: '40%',
  },
  billViewer: {
    flexBasis: '60%'
  },
  appBar: {
    marginBottom: '30px'
  },
  flex: {
    flexGrow: 1
  },
  card: {
    minWidth: 275,
  }
}

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <BillList />
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
