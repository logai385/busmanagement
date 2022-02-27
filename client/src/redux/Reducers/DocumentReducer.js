import { SET_DOCUMENT_LIST } from "../Constants/DocumentConst";

const initialState = {
  documentList: [],
};

const DocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOCUMENT_LIST:
      state.documentList = action.documentList;
      return { ...state };

    default:
      return state;
  }
};

export default DocumentReducer;
