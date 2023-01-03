
interface IProps {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}


const List: React.FC<IProps> = ({ people }) => {
  return (
    <div>
     <ul>
        {people.map(person => {
            return (
            <div>{person.name}</div>)
        })}
     </ul>
    </div>
  )
}

export default List
