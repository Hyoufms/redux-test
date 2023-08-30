# 1. Counter App Simplified Version
1. removed state from `Count`
2. created in `src`:
   - src
     - redux
       - store.js
       - counter_redux.js
3. .store.js:
   1. createStore()
   2. It is neccessary to pass a reducer to createStore() when call it.
   3. It is neccessary to export a store object
4. .count_reducer.js:
   1. reducer is a function. It receives `preState`, `action`, and returns modified `State`
   2. reducer can both initialize state and modify state
   3. when reducer is called first time, store will be triggered, and preState will be undefined.
5. Check if the state of `store` has changed or not. if it changed, render `<App/>` again.
   **redux only manage state, do not re-render the page with state change.**

# Async action
1. Async action is actualize with action creator
2. when data is return by async tasks, async action would be needed to manipulate state
3. how to:
   1. `npm install redux-thunk`, import and configure it in store with middleware
   2. the function that create action returns a function instead. Async task is written in function returned.
   3. within the async task, a sync action is used to manipulate data.
4. Async action is not obligate. Execute async action after receiving result from async task is acceptable.

# optimized react-redux
1. container components and UI components are merged into one file
2. use `<Provider store={store} >` to distribute store among container components
3. containers can check state changes in redux and re-render
4. mapDispatchToProps can be simplified as an object
5. how to connect a components with redux?
   1. define UI components withour export
   2. import `connect` to create an exported container:
   ```js
   connect (
      state => ({key: value}), //map state to props
      {key:value} //map dispatch (method for manipulating state) to props
   ) (UI component)
   ```
   3. use `this.props.xxxx` to read and manipulate state in UI components.