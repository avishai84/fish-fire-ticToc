import React, {Component, Fragment} from 'react';
import Square from '../square/Square';


class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          whosNext: true
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e){
          this.setState({
            whosNext: !this.state.whosNext
          })
      }

    render(){
        const nextPlayer = this.state.whosNext ? 'X' : 'O';
        return (
        <div className="board">
            <p>Board</p>
            <p>Next player is: {nextPlayer}</p>
            <Square onClick={this.handleClick} square={this.state.squares} whosNext={this.state.whosNext}/>
        </div>
        );
    }
}

export default Board;
