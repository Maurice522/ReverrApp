import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Artical: 'dhk',
  mentorData: [],
};
export const ArticalSlice = createSlice({
  name: 'ArticalReducer',
  initialState,
  reducers: {
    setArtical: (state, action) => {
      state.Artical = action.payload;
    },
    setMentorData: (state, action) => {
      state.mentorData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setArtical, setUsers, setMentorData} = ArticalSlice.actions;

export default ArticalSlice.reducer;
