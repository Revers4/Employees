import './search-panel.css';

const SearchPanel = ({ searchEmployees }) => {

    return (
        <input  onChange={(e) => searchEmployees(e.target.value)}
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;