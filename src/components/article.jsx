import React, { Component } from "react";
import { Link } from "react-router-dom";

class Article extends Component {
  state = { descriptionLength: 150 };
  constructor(props) {
    super(props);
    this.timer = null;
  }
  componentDidMount() {
    this.resetElipses();
    window.addEventListener("resize", this.handleResize);
  }

  elipses = text => {
    const { descriptionLength } = this.state;
    const stringLength = text.length;
    return stringLength > descriptionLength
      ? text.substring(0, descriptionLength + 1) + "..."
      : text;
  };

  resetElipses = () => {
    console.log("reset");
    if (window.innerWidth < 700) {
      this.setState({ descriptionLength: 250 });
    } else if (window.innerWidth < 1007) {
      this.setState({ descriptionLength: 300 });
    } else {
      this.setState({ descriptionLength: 150 });
    }
  };

  handleResize = e => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.resetElipses();
    }, 100);
  };

  render() {
    const { data } = this.props;
    return (
      <article className="articleInfo">
        <div className="wrapper">
          <div className="thumb">
            <Link to={"#"}>
              <img src={data.img.thumb} alt="" />
            </Link>
          </div>
          <div className="heading">
            <div className="tags">
              {data.tags.map(tag => (
                <Link to="#" key={tag}>
                  {tag}
                </Link>
              ))}
            </div>
            <Link className="title" to="#">
              {data.title}
            </Link>
          </div>
        </div>
        <div className="content">
          <p className="desc">{this.elipses(data.description)}</p>
          <Link className="more" to="#">
            Czytaj dalej...
          </Link>
        </div>
      </article>
    );
  }
}

export default Article;
