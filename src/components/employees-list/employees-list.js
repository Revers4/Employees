import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

function EmployeesList({ data, onChange,  onDelete }){
    
    const employees = data.map(item => {
        const { id, ...itemProps } = item
        
        return( <EmployeesListItem 
            {...itemProps} 
            key={id} 
            onChange={(e) => onChange(id, e.currentTarget.dataset.name)} 
            onDelete={() => onDelete(id)}/> 
        )}
    )

    return (
    <ul className="app-list list-group">
            {employees}
    </ul>
    )
}

export default EmployeesList;

{/* <> Это фрагмент </> */}