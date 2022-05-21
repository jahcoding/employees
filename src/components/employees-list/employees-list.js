import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {
    let {data, onDelete, onToggleProps} = props;
    let elements = data.map((item) => {
        const {id , ...itemProps} = item;

        return(
            <EmployeesListItem 
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}
            />
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