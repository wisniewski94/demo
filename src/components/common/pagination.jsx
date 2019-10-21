import React, { Component } from "react";
import "../../styles/pagination.sass";

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { itemsCount, pageSize } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    this.state = {
      value: props.currentPage,
      pagesCount
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  previousPage = e => {
    const { value } = this.state;
    if (value > 1) {
      this.setState(
        prevState => ({
          value: Number(prevState.value) - 1
        }),
        () => {
          this.props.pageChange({ e, value: this.state.value });
        }
      );
    }
  };
  nextPage = e => {
    const { value, pagesCount } = this.state;
    if (value < pagesCount) {
      this.setState(
        prevState => ({
          value: Number(prevState.value) + 1
        }),
        () => {
          this.props.pageChange({ e, value: this.state.value });
        }
      );
    }
  };

  render() {
    const { currentPage, onPaginationSubmit } = this.props;
    const { pagesCount } = this.state;
    return (
      <form
        onSubmit={val =>
          onPaginationSubmit({ e: val, value: this.state.value })
        }
        className="ui pag transparent"
      >
        <button type="button" onClick={this.previousPage}>
          <i className="ui arrow l" />
        </button>
        <div className="ui input transparent">
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            min="1"
            max={pagesCount}
          />
        </div>
        <span>/</span>
        <span className="max">{pagesCount}</span>
        <button type="button" onClick={this.nextPage}>
          <i className="ui arrow r" />
        </button>
      </form>
    );
  }
}

export default Pagination;
