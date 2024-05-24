import storeBuilder from "./store/configureStore";
import { loadBugs, addBug, resolveBug, addUserToBug } from "./store/bugs";

const store = storeBuilder();

store.dispatch(loadBugs());
// store.dispatch(addBug({ description: "a" }));
store.dispatch(resolveBug(3));

store.dispatch(addUserToBug(4, 69));
