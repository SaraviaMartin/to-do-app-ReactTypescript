import { type Todo as Todotype } from "../types"


type Props = TodoType


export const Todo: React.FC<Props> = ({id, title, completed}) => {
    return (
        <div className="view">
            <input 
            type="checkbox"
            className="toggle"
            checked={completed}  
            onChange={() => {}}  
            />
            <label>{title}</label>
            <button 
            className="destroy" 
            onClick={() => {}}
            />
        </div>
    )
}