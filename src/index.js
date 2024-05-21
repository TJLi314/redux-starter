import storeBuilder from "./store/configureStore";

const store = storeBuilder();

store.dispatch((dispatch, getState) => {
  // Call an API
  // When the promise is resolved => dispatch()
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
  console.log(getState());
  // If the promise is rejected => dispatch()
});

store.dispatch({
  type: "error",
  payload: { message: "An error occurred." },
});
