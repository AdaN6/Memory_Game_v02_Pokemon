
interface IProps {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}


const List: React.FC<IProps> = ({ people }) => {
  
// added JSX.Element to define what to return
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (<li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url} />
                    <h2>{person.name}</h2>
                </div>
                <p> {person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }
  
    return (
    <div>
     <ul>
        {renderList()}
     </ul>
    </div>
  )
}

export default List
