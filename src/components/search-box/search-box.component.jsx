import { Component } from "react";
import './search-box.styles.css';


//const SearchBox = ({ className, placeholder, onChangeHandler }) => {}  //alternative destructuring
//const SearchBox = ({ props: { className, placeholder, onChangeHandler }}) => {}  //alternative destructuring
const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;

  return (
    <input
      // className={this.props.className}
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};


export default SearchBox;