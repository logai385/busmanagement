import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MainSidebar extends Component {
  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <img
            src="./img/logo.png"
            alt="logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Quản Lý Tuyến</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://randomuser.me/api/portraits/men/6.jpg"
                className="img-circle elevation-2"
                alt="UserImage"
              />
            </div>
            <div className="info">
              <a href="/" className="d-block">
                Nhân viên 1
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/dashboard"
                >
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </NavLink>
              </li>

              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Quản lý nghiệp vụ
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/qlbus"
                    >
                      <i class="far fa-circle nav-icon"></i>
                      <p>Quản lý Bus</p>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <a href="pages/tables/simple.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Đăng ký Tuyến</p>
                    </a>
                  </li>

                 
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}
