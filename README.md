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