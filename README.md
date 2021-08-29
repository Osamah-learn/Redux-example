# Redux

Introduction
React uses a component state that can be modified into the component and pass it to the child component as it gets connected to the parent. Still, this state is not sufficient to manage the state if components are not interrelated.

Redux is a library that allows a React app to create a global state object that can be used in any component across the app by consuming the state object. A Redux state is a standalone object managed globally in the React app. Thus, every route and sub-route should be able to access the global state piece, which is possible using the connect() method. This guide will demonstrate how any app sub-route can access the Redux state.

## Installation

Use the Npm package manager.

```bash
npm install react-redux
npm install react-router-dom
```

## Usage

```ReactJs
import Redux

#import React, { Component } from "react";
#import { connect } from "react-redux";

```

## How Redux work 

 
#### 1-Store - holds our state - There is only one store
#### 2-Action(type of action)- State can be modified using actions - simple object
#### 3-Dispatcher - Action needs to be send by some one - know as dispatching an action
#### 4-Reducer - Receives the action and modified the state to give us anew state
#### 4-only mandatory argument is the action type
#### 5-Subscriber - listens for state change to update the ui (using connect )
# Greetings Osamah Amer 
