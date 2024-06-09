import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cuenta: 0,
      seg: 0,
      cps: 0
    };

    this.setCount = this.setCount.bind(this);
    this.reSet = this.reSet.bind(this);
    this.reCover = this.reCover.bind(this);
    this.saveCPS = this.saveCPS.bind(this);


  }

  componentDidMount() {
    setInterval(() => {
      this.saveCPS();

    }, 1000);
  }

  saveCPS() {
    var cps = 0;

    var seg = this.state.seg;

    if (this.state.cuenta > 0) {
      cps = this.state.cuenta / this.state.seg
      seg++;
    } else {
      cps = 0;
      seg = 0;
    }

    this.setState({
      cps: parseFloat(cps.toFixed(2)),
      seg: seg
    })
  }

  setCount() {
    let cuenta = this.state.cuenta + 1;

    this.setState({
      cuenta
    })

    localStorage.setItem('cuenta', cuenta + '')

  }

  reSet() {
    this.setState({
      cuenta: 0
    })
  }

  reCover() {
    let cuenta = parseInt(localStorage.getItem('cuenta'));
    this.setState({
      cuenta
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={() => this.setCount()}>Clicks: {this.state.cuenta}</h1>
          <h2>CPS: {this.state.cps}</h2>
          <div onClick={() => this.setCount()} style={{ backgroundColor: "green", height: "200px", width: "500px", color: "white", cursor: "pointer", userSelect: "none", borderRadius: "5px", padding: "80px" }}>Click here</div>
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
