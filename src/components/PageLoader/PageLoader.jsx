import React, { Component } from "react";
import loaderImg from "assets/img/loader.gif";
import { connect } from "react-redux";

class PageLoader extends Component {
  state = {};
  render() {
    const { loading } = this.props;

    if (!loading) return null;

    return (
      <div className="loading-container">
        <div className="loading">
          <img src={loaderImg}></img>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ loading: state.application.loading });

export default connect(mapStateToProps)(PageLoader);
