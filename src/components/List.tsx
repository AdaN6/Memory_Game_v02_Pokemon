import { NamedImportsOrExports } from "typescript"

interface IProps {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}


const List: React.FC<IProps> = ({people}) => {
  return (
    <div>
      ho
    </div>
  )
}

export default List
