import React from 'react';
import { connect } from 'react-redux';

import Checkout from '../checkout/checkout'

const sort = items => {
  return items.sort((a, b) => {
    if (a.id !== b.id) {
      return a.id - b.id;
    }
  });
};

function Cart(props) {
  return (
    <div>
    <table>
      <thead>
        <tr>
        {props.cart.length > 0 &&
          <th>Item</th>}
          {props.cart.length > 0 &&
          <th>Quantity</th>}
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => {
          return (
            <tr>
              <td> {item.name}</td>
              <td> {item.quantity}</td>
              <td>
                <button onClick={e => props.addToCart(item)}>+</button>
              </td>
              <td>
                <button onClick={e => props.removeFromCart(item)}>-</button>
              </td>
              <td>
                <button onClick={e => props.removeAllFromCart(item)}>
                  Remove all
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
      {props.cart.length > 0 ?
        <button>Checkout</button> : <h4>Your cart is empty</h4>}
        <Checkout />
        </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: 'REMOVE', payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: 'REMOVE_ALL', payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
