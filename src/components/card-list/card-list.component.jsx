import { Component } from 'react';
import  Card from '../card/card.component'
import './card-list.styles.css';

//const CardList = (props) => {
//const SearchBox = ({monster: { id, name, email }}) => {}  //alternative destructuring
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;


