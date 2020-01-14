import React ,{Component} from 'react';
import Players from '../players';
import '../table/table.scss';

let round = 0;
let leftWin = 0;
let rightWin = 0;

class Table extends Component {
    constructor(props){
    super(props);
        this.state = {
            winnerIs : this.props.winnerIs,
            leftWin : 0,
            rightWin : 0
        }
        this.updateWinners = this.updateWinners.bind(this);
        this.determindWinner = this.determindWinner.bind(this);
    }

    updateWinners(winner){
        if(winner === 'left'){
             leftWin += 1;
         
            }
        if(winner === 'right'){
             rightWin += 1;
            }
    }
  
    determindWinner(winner){
        if(winner !== null){
            if(winner === '🐟'){
                return this.updateWinners('left');
            }else if( winner === '🔥'){
                return this.updateWinners('right');
            }
        }
        return;
    };
 
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return{
    //         winnerIs: nextProps.winnerIs,
    //         leftWin : prevState + 1,
    //         rightWin : prevState + 1
    //         // ... other derived state properties
    //       };
    //   }

      static getDerivedStateFromProps(nextProps, prevState) {
        return nextProps.winnerIs !== prevState.winnerIs
          ? {}
          : {winnerIs: nextProps.winnerIs}
      }
      

    render(){

    const winner = this.props.winnerIs;

    if(winner !== null){
        if(winner === '🐟'){
            round = round + 1;
           // sides(winner);
        }else if( winner === '🔥' ){
            round = round + 1;
        }else{
            round = round + 1;
        }
    }

    return (
        <div className="table" onChange={this.determindWinner(this.props.winnerIs)}>
           
            <h5>Round{round > 1 ? 's' : ''}: {round}</h5>
            <ul className="wrapperRound">
            <Players name="player1"/>
                <ul className="left">
                    <li><span role="img" aria-labelledby="fish">🐟</span></li>
                    <li>{leftWin}</li>
                </ul>
                <ul className="right">
                    <li><span role="img" aria-labelledby="fire">🔥</span></li>
                    <li>{rightWin}</li>
                </ul>
                <Players name="player2"/>
            </ul>
           
        </div>
        );
    }
};

export default Table;
