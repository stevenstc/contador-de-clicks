import React, { useState, useEffect, Component } from 'react';
import './App.css';


const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);
  const [maxCPS, setMaxCPS] = useState(0);
  const [cps, setCps] = useState(0);
  const [startTime, setStartTime] = useState(null);

  // Función para manejar el clic
  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  useEffect(() => {
    if (startTime === null) {
      setStartTime(Date.now());
    }

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000; // Tiempo en segundos
      setCps(clicks / elapsed); // CPS actual

      // Actualizar el máximo CPS si es necesario
      if (cps > maxCPS) {
        setMaxCPS(cps);
      }

    }, 100);

    // Limpiar intervalos cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [clicks, startTime, cps, maxCPS]);

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Clicks: {clicks}</p>
      <p>CPS: {cps.toFixed(2)}</p>
      <p>Max CPS: {maxCPS.toFixed(2)}</p>
      <p>CPM: {(cps * 60).toFixed(2)}</p>
      <p>Max CPM: {(maxCPS * 60).toFixed(2)}</p>

    </div>
  );
};

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

export default ClickCounter;
