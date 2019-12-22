import React ,{Component} from 'react';
import History from '../history';
import '../square/square.scss';

class Square extends Component {
  constructor(props){
    super(props);

    this.state = {
      nextPlayer: this.props.whosNext,
      winnerIs : this.props.winnerIs,
      history: this.props.history,
      square: this.props.square,
      reset: this.props.reset
    }
 
  }

  player(e){
    if(e.target.nodeName === "BUTTON"){

      // check if square if occupied
      if(e.target.innerText === '🐟' || e.target.innerText ===  '🔥'){
        if(!e.target.className.includes('flagged')){
          e.target.className = 'flagged';
        }else{
          const target = e.target;
          e.target.classList.add('noEntry');
            if(target.className.includes('noEntry')){
              setTimeout((e) => {
                target.classList.remove('noEntry');
              },400);
            }
          }
        return false;
      }else{
        e.target.innerText = this.props.whosNext ? '🐟' : '🔥';
        this.props.onClick(e, this.props.whosNext ? '🐟' : '🔥');
      }
    }
  }

  previousClickHandler(){
    console.log('previousClickHandler');
    // console.log('clickHandler: ', this.props.history);
    //const historyNow = this.props.history;
    //const index = historyNow.length - 1;
    // console.log('historyNow: ', historyNow.length, index);
    const btns = document.querySelectorAll('button');
    // this.setState((prevState, props) => ({
    //     console: prevState, props,
    //     square: props.history[props.history.length - 1],
    //     squares: props.square.forEach((prevBoard, i) => {
    //       // console.log(btns[i], prevBoard)
    //       btns[i].innerHTML =  prevBoard
    //     })}
      //  ));
  }

  render(){
 
    const winner = this.props.winnerIs === '🐟' ||  this.props.winnerIs  === '🔥'  || this.props.winnerIs === 'a tie!' ? true : false;

  const blanket = () => this.props.winnerIs ? 'blanket': '';
  const blanketClass = blanket();
      
    return (

      <div className="parentSquare">
        <div className={blanketClass}></div>
      <div className="square" onClick={this.player.bind(this)}>
        {winner && <div className='gameOver'><h3>Game Over!</h3></div>}
        <div className="rowsBtn">
          <div className="row">
              <button id="btn_0"></button>
              <button id="btn_1"></button>
              <button id="btn_2"></button>
            </div>
            <div className="row">
              <button id="btn_3"></button>
              <button id="btn_4"></button>
              <button id="btn_5"></button>
            </div>
            <div className="row">
              <button id="btn_6"></button>
              <button id="btn_7"></button>
              <button id="btn_8"></button>
            </div>
        </div>
          
      </div>
        <History history={this.props.history}
       
         />
      </div>

    );
  }

}

export default Square;
