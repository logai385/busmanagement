import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useHistory  } from "react-router-dom";
import {
  DELETE_TRANSPORTER_API,
  GET_TRANSPORTER_LIST_API,
  SET_EDITING_TRANSPORTER,
} from "../../redux/Constants/TransporterConst";

export default function Transporters() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {transporterList} = useSelector(
    (state) => state.TransporterReducer
  );
  useEffect(() => {
    getTransporterList();
    return () => {};
  }, []);

  const getTransporterList = () => {
    dispatch({
      type: GET_TRANSPORTER_LIST_API,
    });
  };

  const deleteTransporter = (plate) => {
    dispatch({
      type: DELETE_TRANSPORTER_API,
      plate: plate,
    });
  };

  const handleEditTransporter = (transporter) => {
    dispatch({
      type: SET_EDITING_TRANSPORTER,
      transporter: transporter,
    });
    history.push("/transporter/edit");
  }
  const handleClickADD = () => {
    dispatch({
      type: SET_EDITING_TRANSPORTER,
      transporter: {
        id: "",
        plate: "",
        mainLines: [],
        minorLines: [],
      }
    })
    history.push("/transporter/add");
  }
  const renderTransporterList = () => {
    return transporterList.map((transporter, index) => {
      let { _id, plate, mainLines, minorLines } = transporter;
      return (
        <tr id={_id} key={index}>
          <th>{index}</th>
          <td>{plate}</td>
          <td>
            {mainLines
              .reduce((strLine, line) => (strLine += line.lineNumber + " "), "")
              .trim()
              .replace(" ", ", ")}
          </td>
          <td>
            {minorLines
              .reduce((strLine, line) => (strLine += line.lineNumber + " "), "")
              .trim()
              .replace(" ", ", ")}
          </td>
          <td className="text-center">
            <button
              className="btn btn-danger mr-2"
              onClick={() => {
                deleteTransporter(plate);
              }}
            >
              Del
            </button>
            <button className="btn btn-primary" onClick={()=>{
              handleEditTransporter(transporter);
            }}>edit</button>
          </td>
        </tr>
      );
    });
  };


  return (
    <>
      <div className="container">
        <div className="text-right">
          <button className="btn btn-success" onClick={handleClickADD}>
            ADD
          </button>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Biển Số</th>
              <th scope="col">Tuyến Chính</th>
              <th scope="col">Tuyến Tăng tường</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{renderTransporterList()}</tbody>
        </table>
      </div>
    </>
  );
}
