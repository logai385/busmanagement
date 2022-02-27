import React, { useEffect, useState } from "react";
import { Link, useParams,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GET_LINE_LIST_API } from "../../redux/Constants/LineConst";

import Select from "react-select";
import { ADD_TRANSPORTER_API, UPDATE_TRANSPORTER_API } from "../../redux/Constants/TransporterConst";

export default function TransporterCU(props) {
  const { action } = useParams();
  console.log(action);
const history = useHistory();
  const dispatch = useDispatch();
  const lineList = useSelector((state) => state.LineReducer.lines);
  const editingTransporter = useSelector(
    (state) => state.TransporterReducer.editingTransporter
  );
  const [transporter, setTransporter] = useState({
    id: editingTransporter._id,
    plate: editingTransporter.plate,
    mainLines: editingTransporter.mainLines,
    minorLines: editingTransporter.minorLines,
  });
  const getLineList = () => {
    dispatch({
      type: GET_LINE_LIST_API,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (action === "add") {
      dispatch({
        type: ADD_TRANSPORTER_API,
        transporter: transporter,
      });

    }else{
      dispatch({
        type: UPDATE_TRANSPORTER_API,
        transporter: transporter,
      });
    }


  };
  useEffect(() => {
    getLineList();
    return () => {};
  }, []);
  const handleNameChange = (e) => {
    let { value } = e.target;
    value = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    setTransporter({
      ...transporter,
      plate: value,
    });
  };
  const handleMainLineChange = (selectedOption) => {
    let newLines = transporter.mainLines;
    newLines = selectedOption.map((option) => {
      return { _id: option.value, lineNumber: option.label };
    });
    setTransporter({ ...transporter, mainLines: newLines });
    console.log(newLines);
  };
  const handleMinorLineChange = (selectedOption) => {
    let newLines = transporter.minorLines;
    newLines = selectedOption.map((option) => {
      return { _id: option.value, lineNumber: option.label };
    });
    setTransporter({ ...transporter, minorLines: newLines });
  };

  const renderMainLineList = () => {
    const opLines = lineList.map((line, index) => {
      let { _id, lineNumber } = line;
      return { value: _id, label: lineNumber };
    });
    const selectedLines = transporter.mainLines.map((line) => {
      return { value: line._id, label: line.lineNumber };
    });
    return (
      <Select
        isMulti
        options={opLines}
        value={selectedLines}
        name="mainLines"
        onChange={handleMainLineChange}
      />
    );
  };
  const renderSubLineList = () => {
    const opLines = lineList.map((line, index) => {
      let { _id, lineNumber } = line;
      return { value: _id, label: lineNumber };
    });
    const selectedLines = transporter.minorLines.map((line) => {
      return { value: line._id, label: line.lineNumber };
    });
    return (
      <Select
        isMulti
        value={selectedLines}
        options={opLines}
        name="minorLines"
        onChange={handleMinorLineChange}
      />
    );
  };
  return (
    <div className="container">
      <Link to="/" className="btn btn-info">
        back
      </Link>

      <form onSubmit={handleOnSubmit}>
        <input name="id" type="hidden" value={transporter.id} />
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Biển Số</label>
            <input
              type="text"
              className="form-control"
              name="plate"
              onChange={handleNameChange}
              value={transporter.plate}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Tuyến chính</label>

          {renderMainLineList()}
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Tuyến tăng cường</label>

          {renderSubLineList()}
        </div>
        <div className="form-group text-right">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
