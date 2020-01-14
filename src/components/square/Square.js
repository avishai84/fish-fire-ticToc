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
      reset: this.props.reset,
      style_icon : 'hover_fish'
    }
    this.setIsShown = this.setIsShown.bind(this);
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
              },200);
            }
          }
        return false;
      }else{
        e.target.innerText = this.props.whosNext ? '🐟' : '🔥';
        this.props.onClick(e, this.props.whosNext ? '🐟' : '🔥');
      }
    }
    this.handleHoverClass(this.props.whosNext ? '🐟' : '🔥');
  }

  handleHoverClass( icon){
    const iconType = icon === '🐟' ? 'hover_fish' : 'hover_fire';
    // //if(!e.target.className.includes('flagged')){
    // const style_icon = 
        // `button:not(.flagged):hover:before{  
        //  content: ${icon};
        //  opacity:0.5`;
        
         this.setState({
          style_icon:iconType
        });
  }

  setIsShown(e, t, c){
    // hover icon class based
    if(!e.target.className.includes('flagged')){
      if(t){
        e.target.className = c;
      }else{
        e.target.classList.remove(c);
     }
    }
    return false;
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


  componentDidUpdate(prevProps) {
    //(don't forget to compare props):
    if (this.props.whosNext !== prevProps.whosNext) {
      this.handleHoverClass(this.props.whosNext ? '🐟' : '🔥');
    }
  }

  render(){
    const style_icon = this.state.style_icon;

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
              <button id="btn_0"
                onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
              <button id="btn_1"
                 onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                 onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
              <button id="btn_2" 
                onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
            </div>
            <div className="row">
              <button id="btn_3" 
                onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
              <button id="btn_4" 
                onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
              <button id="btn_5" 
                onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
            </div>
            <div className="row">
              <button id="btn_6" 
                onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
              <button id="btn_7" 
                onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
              <button id="btn_8" 
                onMouseEnter={(e) => this.setIsShown(e, true, style_icon)}
                onMouseLeave={(e) => this.setIsShown(e, false, style_icon)}
              ></button>
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
