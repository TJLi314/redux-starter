import storeBuilder from "./store/configureStore";
import { loadBugs } from "./store/bugs";

const store = storeBuilder();

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(loadBugs()), 2000);
