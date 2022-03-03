import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GET_DOCUMENT_LIST_API } from "../../redux/Constants/DocumentConst";
import MUIDataTable from "mui-datatables";
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
    getDocumentList();

    return () => {};
  }, []);
  const formatDate = (strDate) => {
    let newDate = new Date(strDate).toLocaleDateString();
    return newDate;
  };
  const renderDocumentList = () => {
    const columns = ["#", "	Ngày", "Biển Số", "File","action"];

    const data = documentList.map((document, index) => {
      return [
        index + 1,
        formatDate(document.dateSign),
        document.transporter.plate,
        <img
          className="img-thumbnail"
          src={`./uploads/${document.documentImg}`}
          style={{ width: "40px" }}
          alt={document.transporter.plate}
        ></img>,
        <button className="btn-sm btn-outline-danger"><i class="fa fa-times"></i></button>
      ];
    });
    const options = {
      selectableRows: false,
      filter: false,
      viewColumns: false,
      print: false,
      responsive: 'scrollMaxHeight',
    };
    return <MUIDataTable data={data} columns={columns} options={options} />;
  };
  return (
    <>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Quản lý tài liệu</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
             
                  <li className="breadcrumb-item active">Quản lý tài liệu</li>
                  <li className="breadcrumb-item">
                    <Link className="btn-sm btn-primary" to="/documents/add">
                      new
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  {/* <div className="card-header">
                    <h3 className="card-title">
                      DataTable with default features
                    </h3>
                  </div> */}
                  {/* /.card-header */}
                  <div className="card-body">{renderDocumentList()}</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </>
  );
}
