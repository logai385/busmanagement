import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DatePicker, Select, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { GET_TRANSPORTER_LIST_API } from "../../redux/Constants/TransporterConst";
import { ADD_DOCUMENT_API } from "../../redux/Constants/DocumentConst";
const { Option } = Select;
export default function AddSignDocument() {
  const [document, setDocument] = useState({
    dateSign: "",
    transporter: "",
    documentImg: "134",
  });
  const dispatch = useDispatch();
  const transporterList = useSelector(
    (state) => state.TransporterReducer.transporterList
  );
  const handleDateChange = (date, dateString) => {
    setDocument({ ...document, dateSign: dateString });
  };
  const handleSelectChange = (value) => {
    setDocument({ ...document, transporter: value });
  };
  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    setDocument({ ...document, documentImg: file });
  };
  const getTransporterList = () => {
    dispatch({
      type: GET_TRANSPORTER_LIST_API,
    });
  };

  useEffect(() => {
    getTransporterList();
    return () => {};
  }, []);

  const renderTransorter = () => {
    const defOption = transporterList.map((transporter) => {
      return (
        <Option key={transporter._id} value={transporter._id}>
          {transporter.plate}
        </Option>
      );
    });
    // console.log(transporterList);
    return (
      <Select
        name="transporter"
        size="large"
        style={{ width: "100%" }}
        onChange={handleSelectChange}
      >
        {defOption}
      </Select>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({
    //     type: ADD_DOCUMENT_API,
    //     data: document,
    // })
    const formData = new FormData();
    formData.append("dateSign", document.dateSign);
    formData.append("transporter", document.transporter);
    formData.append("documentImg", document.documentImg);
    dispatch({
      type: ADD_DOCUMENT_API,
      data: formData,
    });
  };
  return (
    <>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1><Link to='/documents'><i className="fa fa-angle-double-left"></i></Link>  Quản lý tài liệu</h1>
              </div>
             
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content signDocument">
        
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Đăng ký Xe</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="card-body">
                <input name="id" type="hidden" />
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="inputEmail4">Ngày</label>
                    <DatePicker
                      name="dateSign"
                      size="large"
                      style={{ width: "100%" }}
                      onChange={handleDateChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress ">Số Xe</label>

                  {renderTransorter()}
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">File </label>
                  <Input
                    size="large"
                    type="file"
                    name="documentImg"
                    onChange={handleChangeFile}
                  ></Input>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer text-right">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}