import "./app-info.css";

const AppInfo = ( { employeesNumber, increaseNumber } ) => {


    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesNumber}</h2>
            <h2>Премию получат: {increaseNumber}</h2>
        </div>
    )
}

export default AppInfo;