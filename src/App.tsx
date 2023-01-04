import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from "./components/List"

// you can export interface if you have the same props between the parents and the child
export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

 const [people, setPeople] = useState<IState["people"]>([
  {
    name:"Tom Hardy",
    url:"https://www.biography.com/.image/t_share/MTE5NTU2MzE2NjUyOTk2MTA3/9th-annual-ves-awards---red-carpet.jpg",
    age: 35,
    note:"what do you want"
  }
 ])

  return (
    <div className="App">
      <h1>
        People invited to my Party
      </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
