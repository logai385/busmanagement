import { SET_EDITING_TRANSPORTER, SET_TRANSPORTER_LIST } from "../Constants/TransporterConst";

const initialState = {
  transporterList: [],
  editingTransporter: {},
};
const TransporterReducer = (state = initialState, atction) => {
  switch (atction.type) {
    case SET_TRANSPORTER_LIST:
      state.transporterList = atction.transporterList;
      return { ...state };
    case SET_EDITING_TRANSPORTER:
      state.editingTransporter = atction.transporter;
      return { ...state };
    default:
      return { ...state };
  }
};
export default TransporterReducer;