import React, {Component } from 'react';

class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            history: this.props.history
        }
       
    }
  
    handale_onClick_backstep_history( props ){
        //console.log('handale_onClick_backstep_history');
        const btns = document.querySelectorAll('button');
        //console.log(btns);
       // console.log(this.props.history);

        // loop through the buttons,
        // remove all flags,
        // add new array to each button,
        // set flags to new content
       const historyArray = [...this.props.history];
       console.table(historyArray);
        console.log(historyArray.length);
        console.table(btns)
       const prevHistory = historyArray.length - 1;
       console.log('prevHistory ', prevHistory);

        btns.forEach((elem, index) => {
            if(elem.className === 'flagged'){
                elem.className = '';
            }
            if(prevHistory[index] === null){
                if(index !== 9){
                    elem.innerHTML = '';
                }
            }
              this.setState((prevProps, prevState) => {
                    if(prevProps.history !== prevState.history){
                        console.log('hi');
                    }   
              });
        });

        // props.square.forEach((prevBoard, i) => {
        //    console.log(btns[i], prevBoard)
          //btns[i].innerHTML =  prevBoard;
          //this.setState({
           // history: prevHistory
            //});
        // });
   


    }
    turn(e){
        const btn = document.querySelector('.history > button ');
        e.target.parentElement.setAttribute('style', "transition:all 300ms;transform:rotate(365deg)");
        setTimeout((e) => {
            btn.removeAttribute('style');
        }, 500);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        if(this.props.history !== prevState.history){
            console.log('history new'); 
            this.setState({ history: this.props.history });
        }
     
    }


   

    render(){
     //  const updateHistoryFN = this.updateHistory();
        const isDisabled = this.props.history.length > 1 ? '' : 'disabled'; 

        return(
            <div>
                {!isDisabled &&  <p className="history">
                    <button className="back"
                        onMouseDown={this.turn.bind(this)} 
                        onClick={this.handale_onClick_backstep_history.bind(this)} >
                      <span role="img" aria-labelledby="imoji">👈</span>
                    </button></p>
                      }
            </div>
        );
    }
};

export default History;