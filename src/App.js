import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      pickupSavings: -3.85
    };
  }

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
        </Grid>
      </div>
    );
  }
}

export default App;
