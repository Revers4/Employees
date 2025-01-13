import './search-panel.css';

const SearchPanel = ({ searchFilter }) => {

    return (
        <input  onChange={(e) => searchFilter(e.target.value)}
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;