import React, {Component, Fragment} from 'react';
import Square from '../square/Square';


class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null)
        };
      }

    render(){
        return (
        <div className="board">
            <p>Board</p>
            <Square square={this.props.square}/>
        </div>
        );
    }
}

export default Board;
