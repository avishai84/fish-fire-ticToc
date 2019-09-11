import React, {Component, Fragment} from 'react';
import Square from '../square/Square';


class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          whosNext: true
        };
      }

    render(){
        return (
        <div className="board">
            <p>Board</p>
            <Square square={this.state.squares} whosNext={this.state.whosNext}/>
        </div>
        );
    }
}

export default Board;
