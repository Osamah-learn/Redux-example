import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import CounterApp from "./src/CounterApp";
import { createStore } from "redux";
import { Provider } from "react-redux";

/* How Redux Work */
// Store - holds our state - There is only one store
// Action(type of action)- State can be modified using actions - simple object
// Dispatcher - Action needs to be send by some one - know as dispatching an action
// Reducer - Receives the action and modified the state to give us anew state
// only mandatory argument is the action type
// Subscriber - listens for state change to update the ui (using connect )

/* First we build the initial state as  Action */
const initialState = {
  counter: 0,
};
/* second thing we build the reducer to modified the initial state == Action  */
const reducer = (state = initialState,action) => {
  switch(action.type)
  {
    case "INCREASE_COUNTER":
    return{counter:state.counter+1}
    case "DECREASE_COUNTER":
    return{counter:state.counter-1}
  }
  return state;
};
/* third we build the store to hold our state  */
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
