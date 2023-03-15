import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cuentas: 0,
      seg: 0,
      cps: 0
    };

    this.setCount = this.setCount.bind(this);
    this.reSet = this.reSet.bind(this);
    this.reCover = this.reCover.bind(this);
    this.saveCPS = this.saveCPS.bind(this);


  }

  componentDidMount(){
    setInterval(()=>{
      this.saveCPS();
      
    }, 1000);
  }

  saveCPS(){
      var cps = 0;

      var seg = this.state.seg;

      if(this.state.cuentas > 0){
        cps = this.state.cuentas/this.state.seg
        seg++;
      }else{
        cps = 0;
        seg = 0;
      }

      this.setState({
        cps: parseFloat(cps.toFixed(2)),
        seg: seg
      })
  }

  setCount() {
    var cuenta = this.state.cuentas+1;
    this.setState({
      cuentas: cuenta
    })

    localStorage.setItem('cuentas',cuenta+'')

  }

  reSet() {
    this.setState({
      cuentas: 0
    })
  }

  reCover() {
    var cuenta = parseInt(localStorage.getItem('cuentas'));
    this.setState({
      cuentas: cuenta
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={() => this.setCount()}>Clicks: {this.state.cuentas}</h1>
          <h2>CPS: {this.state.cps}</h2>
          <div onClick={() => this.setCount()} style={{ backgroundColor: "green", height: "200px", width: "500px",color:"gray",cursor:"pointer",userSelect: "none" }}>Click here</div>
          <p>
            <button className='btn btn-success mt-3' onClick={() => this.setCount()}>Click</button>
            <br></br>
            <button className='btn btn-danger my-3' onClick={() => this.reSet()}>Reset</button>
            <br></br>
            <button className='btn btn-warning' onClick={() => this.reCover()}>Recover</button>

          </p>

        </header>
      </div>
    );
  }
}

export default App;
