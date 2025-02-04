import "./app-filter.css";

const AppFilter = ( { filterBy, filterEmployees } ) => {

    const buttonData = [
        {name: 'all', label: "Все сотрудники"},
        {name: 'increase', label: "На повышение"},
        {name: 'more1000', label: "З/П больше 1000$"},
    ]

    const buttons = buttonData.map(button => {
        const { name, label } = button
        let className =  filterBy === name ? "btn-light" : "btn-outline-light"
        
        return( 
            <button 
                type="button"
                onClick={() => filterEmployees(name)}
                className={"btn " + className}>
                {label}
            </button>
        )})

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;