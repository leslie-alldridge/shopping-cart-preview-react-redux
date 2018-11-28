import { createStore, combineReducers } from 'redux';
import cartReducer from '../features/cart/reducer';
import promoCodeReducer from '../features/checkout/reducers/index'

const rootReducer = combineReducers({
  cart: cartReducer,
  promoCode: promoCodeReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
