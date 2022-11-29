import alertReducer from "./slices/alert";
import dialogReducer from "./slices/dialog";
import backdropReducer from "./slices/backdrop";
import authedUserReducer from "./slices/authedUser";

const reducer = {
  alert: alertReducer,
  dialog: dialogReducer,
  backdrop: backdropReducer,
  authedUser: authedUserReducer,
};

export default reducer;
