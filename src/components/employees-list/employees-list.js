import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {
    let {data} = props;
    let elements = data.map((item) => {
        const {...itemProps} = item;

        return(
            <EmployeesListItem {...itemProps}/>
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