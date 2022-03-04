import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getDocumentsAct } from "../../redux/Actions/DocumentAction";
import { Table, Tag } from "antd";
export default function SignDocument() {
  const documentList = useSelector(
    (state) => state.DocumentReducer.documentList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getDocumentList();

    return () => {};
  }, []);

  const getDocumentList = () => {
    dispatch(getDocumentsAct());
  };

  const formatDate = (strDate) => {
    let newDate = new Date(strDate).toLocaleDateString("vi-GB");
    return newDate;
  };

  const renderDocumentList = () => {
    const columns = [
      {
        title: "#",
        dataIndex: "#",
        key: "#",
      },
      {
        title: "Ngày",
        dataIndex: "Ngày",
        key: "Ngày",
      },
      {
        title: "Biển Số",
        dataIndex: "Biển Số",
        key: "Biển Số",
        render: (plate) => (
          <Tag color="geekblue" key={plate}>
            {plate}
          </Tag>
        ),
      },
      {
        title: "File",
        dataIndex: "File",
        key: "File",
        render: (text) => (
          <a
            href={`./uploads/${text}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            link
          </a>
        ),
      },
    ];

    const dataSource = documentList.map((document, index) => {
      return {
        "#": index + 1,
        Ngày: formatDate(document.dateSign),
        "Biển Số": document.transporter.plate,
        File: document.documentImg,
      };
    });

    return <Table dataSource={dataSource} columns={columns} />;
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
