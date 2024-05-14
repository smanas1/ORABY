import counterReducer from "./counterSlice";
import emailSlice from "./emailSlice";
import userSlice from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    counter: counterReducer,
    email: emailSlice,
    user: userSlice,
  },
});

export default store;
