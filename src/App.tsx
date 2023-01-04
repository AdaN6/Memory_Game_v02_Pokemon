import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from "./components/List"

interface IState {
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
    name:"Tom Hard",
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
      <AddToList/>
    </div>
  );
}

export default App;
