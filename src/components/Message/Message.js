import './Message.style.scss';

export const Message = ({ name, number, bold }) => {
return (
    <h3 className={"message" + (!bold ? "  header" : "")}>
      Message: {name}, {number}, 
        </h3>
        );
}; 

//import React from "react";

/*export class Message extends React.Component {
  render() {
      const { name, number, doSmth } = this.props;
    return (
      <h3 onClick={doSmth}>
         Message: {name}, {number}
      </h3>
    );
  }
} */
