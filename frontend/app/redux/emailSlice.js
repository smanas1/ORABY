const { createSlice } = require("@reduxjs/toolkit");

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    email: "",
  },
  reducers: {
    getEmail: (state, action) => {
      console.log(action);
      state.email = action.payload;
    },
  },
});

export const { getEmail } = emailSlice.actions;
export default emailSlice.reducer;
