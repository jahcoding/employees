import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {
    let {data, onToggleIncrease} = props;
    let elements = data.map((item) => {
        const {id , ...itemProps} = item;

        return(
            <EmployeesListItem 
            key={id}
            onToggleIncrease={() =>{
                onToggleIncrease(id)
            }}  
            {...itemProps}/>
        )
    })

    console.log(elements)


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;