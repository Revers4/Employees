import "./app-filter.css";

const AppFilter = ( { filterBy, changeFilter } ) => {

    return (
        <div className="btn-group">
            <button onClick={(e) => changeFilter(e.currentTarget.name)} 
                    name="none" type="button"
                    className={`btn btn${filterBy === "none" ? "" : "-outline"}-light`}>
                    Все сотрудники
            </button>
            <button onClick={(e) => changeFilter(e.currentTarget.name)} 
                    name="first" type="button"
                    className={`btn btn${filterBy === "first" ? "" : "-outline"}-light`}>
                    На повышение
            </button>
            <button onClick={(e) => changeFilter(e.currentTarget.name)} 
                    name="second" type="button"
                    className={`btn btn${filterBy === "second" ? "" : "-outline"}-light`}>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;