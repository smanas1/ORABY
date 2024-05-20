const { createSlice } = require("@reduxjs/toolkit");

export const descriptionSlice = createSlice({
  name: "description",
  initialState: {
    des: "",
  },
  reducers: {
    getDescription: (state, action) => {
      console.log(action);
      state.des = action.payload;
    },
  },
});

export const { getDescription } = descriptionSlice.actions;
export default descriptionSlice.reducer;
