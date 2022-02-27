import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_DOCUMENT_LIST_API } from "../../redux/Constants/DocumentConst";
export default function SignDocument() {
  const dispatch = useDispatch();
  const documentList = useSelector(
    (state) => state.DocumentReducer.documentList
  );
  const getDocumentList = () => {
    dispatch({
      type: GET_DOCUMENT_LIST_API,
    });
  };
  useEffect(() => {
    console.log("SignDocument");
    getDocumentList();

    return () => {};
  }, []);
  const formatDate=(strDate)=>{
    let newDate = new Date(strDate).toLocaleDateString();    
    return <td>{newDate}</td> ;
  }
  const renderDocumentList = () => {
    return documentList.map((document, index) => {
      return (
        <tr id={document._id} key={index}>
          <th>{index}</th>
          {formatDate(document.dateSign)}
          
          <td>{document.transporter.plate}</td>
          <td>{document.documentImg}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <div className="container">
        <div className="text-right">
          <button className="btn btn-success" onClick={() => {}}>
            ADD
          </button>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ngày</th>
              <th scope="col">Biển Số</th>
              <th scope="col">File</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{renderDocumentList()}</tbody>
        </table>
      </div>
    </>
  );
}
