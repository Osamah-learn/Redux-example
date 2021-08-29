import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

/* How Redux Work */
// Store - holds our state - There is only one store
// Action(type of action)- State can be modified using actions - simple object
// Dispatcher - Action needs to be send by some one - know as dispatching an action
// Reducer - Receives the action and modified the state to give us anew state
// only mandatory argument is the action type
// Subscriber - listens for state change to update the ui (using connect )

const CounterApp = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TouchableOpacity onPress={props.increaseCounter}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text>{props.counter}</Text>
        <TouchableOpacity onPress={props.decreaseCounter}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};
/* We take our state counter as props  */
const mapStateToProps = (state) => ({ counter: state.counter });

/* We connect our state props with counter App */
export default connect(mapStateToProps, mapDisPatchToProps)(CounterApp);

/* Dispatch The Props */
function mapDisPatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" }),
  };
}

/* Style */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
  },
});
