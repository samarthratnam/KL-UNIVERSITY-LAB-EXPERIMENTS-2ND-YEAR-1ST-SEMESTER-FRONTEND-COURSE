import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: []
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      state.entries.push({
        id: Date.now(),
        rating: action.payload.rating,
        comment: action.payload.comment,
        timestamp: new Date().toISOString()
      });
    }
  }
});

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
