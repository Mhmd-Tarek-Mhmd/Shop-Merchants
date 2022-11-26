import alertReducer from "./slices/alert";
import backdropReducer from "./slices/backdrop";
import authedUserReducer from "./slices/authedUser";

const reducer = {
  alert: alertReducer,
  backdrop: backdropReducer,
  authedUser: authedUserReducer,
};

export default reducer;
