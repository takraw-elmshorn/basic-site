import React, {Component} from "react";
import ReactDOM from "react-dom";
import Main from "./component/Main";
import Privacy from "./component/Privacy";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privacy: false
    };
  }

  render() {
    return <div className="container">
      <Main/>


      <div className="row imprint">
        <div className="col">
          <div className="row">
            <div className="col">
              <p>Sukarela Sepak Takraw Elmshorn e.V.<br/>
                Strawinskystr. 12<br/>
                25337 Elmshorn
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Gemeinschaftlich vertretungsberechtigt:</p>
              <p>1. Vorsitzender:<br/>Ismail Salleh</p>
              <p>2. Vorsitzender:<br/>Amran Salleh</p>
              <p>Schatzmeister:<br/>Patrick Sy</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p>
                Registergericht: Amtsgericht Pinneberg<br/>
                Registernummer: VR 1144 EL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row privacy-link">
        <div className="col">
          <a href="" onClick={(e) => {
            this.setState({privacy: !this.state.privacy});
            e.preventDefault();
          }}>Datenschutzerklaerung
            {this.state.privacy ? ' <<': ' >>'}
          </a>
        </div>
      </div>
      {
        this.state.privacy &&
      <div className="row privacy">
        <div className="col">
          <Privacy/>
        </div>
      </div>
      }
    </div>

  };
}

ReactDOM.render(<App />, document.getElementById("app"));