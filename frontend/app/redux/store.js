import counterReducer from "./counterSlice";
import emailSlice from "./emailSlice";
import descriptionSlice from "./productdescriptionSlice";
import userSlice from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    counter: counterReducer,
    email: emailSlice,
    user: userSlice,
    des: descriptionSlice,
  },
});

export default store;
