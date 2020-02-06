import React from 'react';
import { Container, AppBar, Button, Toolbar } from "@material-ui/core"
import Routes from './routes'
import './App.css';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes />
      </Container>
    </>
  )
}

export default App;
