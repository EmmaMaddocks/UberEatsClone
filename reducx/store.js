import { legacy_createStore as createStore } from "redux";

import reducer from "../reducx/reducers";

export default function configureStore(initialState) {
	return createStore(reducer, initialState);
}
