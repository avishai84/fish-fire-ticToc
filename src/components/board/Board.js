import React, {Component, Fragment} from 'react';
import Square from '../square/Square';


class Board extends Component{
    render(){
        return (<div className="board">
        <p>Board</p>
       <Square />
       </div>);
    }
}

export default Board;
