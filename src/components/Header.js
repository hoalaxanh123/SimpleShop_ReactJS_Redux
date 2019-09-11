import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#action">
              <b>TMA</b> Solutions
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#action">
                  <i className="fas fa-home"></i> Trang chủ
                </a>
              </li>
              <li>
                <a href="#action">
                  <i className="fas fa-address-card"></i> Giới thiệu
                </a>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="button" className="btn btn-default">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="#action"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="fas fa-user"></i> Hi, Vuong !{" "}
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#action">
                      <i className="fas fa-user"></i> Tài khoản
                    </a>
                  </li>
                  <li>
                    <a href="#action">
                      <i className="fas fa-file-invoice-dollar"></i> Tra cứu hoá
                      đơn
                    </a>
                  </li>
                  <li>
                    <a href="#action">
                      <i className="fas fa-question-circle"></i> Trợ giúp
                    </a>
                  </li>
                  <li>
                    <a href="#action">
                      <i className="fas fa-sign-out-alt"></i> Đăng xuất
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#2" data-toggle="modal" data-target="#largeShoes">
                  <i className="fas fa-cart-plus"></i> Giỏ hàng
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
