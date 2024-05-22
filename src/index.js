import storeBuilder from "./store/configureStore";
import * as actions from "./store/api";

const store = storeBuilder();

// store.dispatch(loadBugs());

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    onSuccess: "bugs/bugsReceived",
  })
);
