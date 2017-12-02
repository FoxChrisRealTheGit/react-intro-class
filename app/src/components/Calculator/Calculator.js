import React, {Component} from 'react';
import calculatorImg from '../../calculator.png';

class Calculator extends Component{
  constructor(){
    super();

    this.state = {
      headerInput: 'Calculator',
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false
    }
  }

    updateHeader(val){
      this.setState({headerInput: val})
    }

    setDisplay(num){
      var display= this.state.display === '0'?num: this.state.display +num;
      this.setState({ display: (this.state.display.length < 13) ? display : this.state.display })
    }

    setOperator(operator){
      if(this.state.operator === ''){
        var temp = this.state.display;
        this.setState({operator: operator, temp: Number(temp), display: '0'})
      }
    }

    calculate(){
      if(!this.state.operator){
        return;
      }else if(this.resetDisplay === true){
        this.setState({temp: this.state.display, resetDisplay: false})
        
      }

      var result;
      switch(this.state.operator){
        case '*':
        result = this.state.temp * Number(this.state.display);
        this.setState({display: result, operator:'', resetDisplay:true});
        break;
        case '/':
        result = this.state.temp / Number(this.state.display);
        this.setState({display: result, operator:'',resetDisplay:true});
        break;
        case '+':
        result = this.state.temp + Number(this.state.display);
        this.setState({display: result, operator:'',resetDisplay:true});
        break;
        case '-':
        result = this.state.temp - Number(this.state.display);
        this.setState({display: result, operator:'',resetDisplay:true});
        break;
      }

    }

    clearDisplay(){
      this.setState({display: '0', operator: '', temp: 0, resetDisplay: false})
    }

    render(){
        return (
            <div id="calculator-container">
              <input id="header-input" onChange ={(e)=> this.updateHeader(e.target.value)} />
              <h1 id="header"> {this.state.headerInput} </h1>
              <img className="remove-highlight" src={calculatorImg} alt="calculator" />
              <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                  <span className="total">{this.state.display}</span>
                </div>
          
                <div className="btn clear" onClick={()=>this.clearDisplay()}></div>
          
                <div className="btn zero" onClick={()=>this.setDisplay('0')}></div>
                <div className="btn one" onClick={()=>this.setDisplay('1')}></div>
                <div className="btn two" onClick={()=>this.setDisplay('2')}></div>
                <div className="btn three" onClick={()=>this.setDisplay('3')}></div>
                <div className="btn four" onClick={()=>this.setDisplay('4')}></div>
                <div className="btn five" onClick={()=>this.setDisplay('5')}></div>
                <div className="btn six" onClick={()=>this.setDisplay('6')}></div>
                <div className="btn seven" onClick={()=>this.setDisplay('7')}></div>
                <div className="btn eight" onClick={()=>this.setDisplay('8')}></div>
                <div className="btn nine" onClick={()=>this.setDisplay('9')}></div>
          
                <div className="btn equal" onClick = {() => this.calculate()}></div>
                <div className="btn multiply" onClick = {()=>this.setOperator('*')}></div>
                <div className="btn divide" onClick = {()=>this.setOperator('/')}></div>
                <div className="btn subtract" onClick = {()=>this.setOperator('-')}></div>
                <div className="btn add" onClick = {()=>this.setOperator('+')}></div>
              </div>
            </div>
          )
    }
}

export default Calculator