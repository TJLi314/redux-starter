import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    axios
      .request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      })
      .then((res) => {
        // General
        dispatch(actions.apiCallSuccess(res.data));

        // Specific
        if (onSuccess) dispatch({ type: onSuccess, payload: res.data });
      })
      .catch((err) => {
        // General
        dispatch(actions.apiCallFailed(err));

        //specific
        if (onError) dispatch({ type: onError, err });
      });
  };

export default api;
