import { SET_LINE_LIST } from "../Constants/LineConst";

const initialState = {
  lines: [],
};

const LineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LINE_LIST:
      state.lines = action.lineList;
      return { ...state };
    default:
      return { ...state };
  }
};
export default LineReducer;
