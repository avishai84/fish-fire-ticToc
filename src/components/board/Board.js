import React, {Component, Fragment, useContext} from 'react';
import Square from '../square/Square';
import Table from '../table';
let historyArray = [];

class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          whosNext: true,
          history: [],
          winnerIs : false,
          win : false,
          reset: false
       
        };
        this.handleClick = this.handleClick.bind(this);
        this.reset = this.reset.bind(this);
      }

      handleClick(e){
    
        if(!e.target.className.includes('flagged')){
          const nextPlayer = this.state.whosNext ? '🐟' : '🔥';
          e.target.className = 'flagged';
          const index = Number.parseInt(e.target.id.slice(4));
          const squares = this.state.squares.slice();
          // updating array with player emoji string
            squares[index] = nextPlayer;
            historyArray.push(squares);

            this.setState({
              whosNext: !this.state.whosNext,
              squares: squares,
              history : historyArray
            })
          }
        }

     calculateWinner(squares, history) {
      
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a,b,c] = lines[i];
          //console.log('a: '+a, 'b: '+b, 'c: '+c);
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        
           return(squares[a]);
            //return this.explode(squares[a]);
          }else if(history.length === 9){
            return 'a tie!'
          }
        }
        return null;
      }

      reset(){
        const btns = document.querySelectorAll('button');
        for(let i=1; i < btns.length - 1; i++){
            btns[i].innerHTML = '';
            // clear .flagged
            if(btns[i].className.includes('flagged')){
              btns[i].className = '';
            }
        }
        historyArray = [];
        this.setState({
            squares: Array(9).fill(null),
            whosNext: !this.state.whosNext,
            history: historyArray,
            winnerIs : false,
            win : false,
            reset: false
          }
        )
      }

    render(){
        const nextPlayer = this.state.whosNext ? '🐟' : '🔥';
        let squareTemp = this.state.squares;
        let historyTemp = this.state.history;
       
       // console.log('squareTemp ', squareTemp, 'historyTemp ', historyTemp, 'history:', this.state.history);

        const winnerIs =  this.calculateWinner(squareTemp, historyTemp);
        const reset = (winnerIs === '🐟' ||  winnerIs  === '🔥' || winnerIs === 'a tie!') ? <button className="reset" onClick={this.reset}>New Game</button> : '';
          //e.target.className = 'flagged';
        // const gameOver = (winnerIs) => (winnerIs === '🐟' ||  winnerIs  === '🔥' || winnerIs === 'a tie!') ? 'over': '';
 
        return (
        <div className='board'>
          <div><Table winnerIs={winnerIs}/></div>
          <Fragment>{reset}</Fragment>
           {(winnerIs === '🐟' || winnerIs === '🔥')  && `Winner is: ${winnerIs}`} 
            <p className="nextPlayer">{!winnerIs && `Next player is: ${nextPlayer}`}</p>
            <p>{winnerIs === 'a tie!' && `${winnerIs}`}</p>
            <Square 
              winnerIs={winnerIs} 
              onClick={this.handleClick} 
              square={this.state.squares} 
              whosNext={this.state.whosNext}
              history={this.state.history}
              reset={this.state.reset}
              name={this.props.name}
               />
        </div>
        );
    }
}

export default Board;
