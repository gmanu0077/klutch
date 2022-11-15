import React, { Component ,createContext,AuthContextProvider} from "react";
import axios from "axios";
const player=({setselect})=>{
    console.log('start')
    setselect(localStorage.getItem('select'))
}
const selec=[];
const AuthContext = createContext();

export default class Card extends Component {
  state = {
    roster1: [],
    roster2: [],
    selected: [],
  };
  select = (cred, name) => {
    this.state.selected.push(cred);
    selec.push(cred)
    console.log(name, "mmm");
    console.log(this.state.selected, "sel");
    localStorage.setItem('select',this.state.selected)
    player();

  };
  componentDidMount = async () => {
    const data = await axios.get(
      "https://api.klutchh.in/v1/rosters/128622/129859?game_type=false"
    );
    console.log(data.data.data, "data");
    this.setState({
      roster1: data.data.data.roster1,
      roster2: data.data.data.roster2,
    });
    console.log(this.state, "state");
  };

  render() {
    return (
      <div>
        
        <div className="t1list">
          {this.state.roster1.map((player) => {
            console.log(player.name, "name");
            return (
              <div
                className="container"
                onClick={() => {
                  console.log("yes");
                  this.select(player.credit, player.name);
                }}
              >
                <ul className="playercard1">
                  <li>
                    <div className="pl-img"></div>
                  </li>
                  <li>
                    <div className="plname">{player.name}</div>
                    <p className="credit">{player.credit}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="t2list">
          {this.state.roster2.map((player) => {
            console.log(player.name, "name");
            return (
              <div
                className="container2"
                onClick={() => this.select(player.credit, player.name)}
              >
                <ul className="playercard2">
                  <li>
                    <div className="pl-img"></div>
                  </li>
                  <li>
                    <div className="plname">{player.name}</div>
                    <p className="credit">{player.credit}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>

        <button>preview selection</button>
        <AuthContext.Provider value={{ selec }}>
      {props.children}
    </AuthContext.Provider>
      </div>
    );
  }
}

export { AuthContextProvider,AuthContext };