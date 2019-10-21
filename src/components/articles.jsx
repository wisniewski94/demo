import React, { Component } from "react";
import "../styles/articles.sass";
import { paginate } from "../utils/paginate";
import Article from "./article";
import Pagination from "./common/pagination";
class Articles extends Component {
  state = {
    currentPage: 1,
    pageSize: 2
  };

  componentDidMount() {
    const { totalCount } = this.getPagedData();
    this.setState({ totalCount });
  }

  getPagedData = () => {
    const { pageSize, currentPage } = this.state;
    const articles = paginate(this.props.data, currentPage, pageSize);
    return { totalCount: this.props.data.length, data: articles };
  };

  handlePaginationSubmit = page => {
    page.e.preventDefault();
    this.setState({ currentPage: page.value });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page.value });
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const { totalCount, data: articles } = this.getPagedData();
    return (
      <React.Fragment>
        {articles.map(i => (
          <Article key={i._id} data={i} />
        ))}
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          pageChange={this.handlePageChange}
          onPaginationSubmit={this.handlePaginationSubmit}
        />
      </React.Fragment>
    );
  }
}

export default Articles;
