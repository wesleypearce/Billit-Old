import React, { Component } from 'react';
import BillViewer from './containers/BillViewer'
import BillEditor from './containers/BillEditor'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './style.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6a1b9a',
    },
    secondary: {
      light: '#b6ffff',
      main: '#81d4fa',
      contrastText: '#000000',
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
    justifyContent: 'space-evenly'
  },
  billEditor: {
    flexBasis: '40%'
  },
  billViewer: {
    flexBasis: '60%'
  },
  appBar: {
    marginBottom: '30px'
  }
}

class App extends Component {

  render() {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.container}>
        <AppBar className={classes.appBar} position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Billit!
            </Typography>
          </Toolbar>
        </AppBar>
        <BillEditor className={classes.billEditor} />
        <BillViewer className={classes.billViewer} />
      </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
