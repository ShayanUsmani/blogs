import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer'
import './assests/css/styles.css'

function App() {
  return (
    <Grid container  direction="column">
      <Grid item>
        <Header />
        <br />
        <br />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
        <Content />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
      <Footer />
    </Grid>

  );
}

export default App;
