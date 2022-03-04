import { GET_DOCUMENT_LIST_API, SET_DOCUMENT_LIST } from "../Constants/DocumentConst";

export const getDocumentsAct = () => ({
  type: GET_DOCUMENT_LIST_API,
});
export const setDocumentList = (documentList) => ({
  type: SET_DOCUMENT_LIST,
  payload: documentList,
});