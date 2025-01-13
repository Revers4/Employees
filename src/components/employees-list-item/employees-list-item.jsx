import './employees-list-item.css';

function EmployeesListItem({ name, salary, like, increase, onChange, onDelete }) {

    let result = "list-group-item d-flex justify-content-between"

    if (like) { result += " like" }
    if (increase) { result += " increase" }

    return (
        <li className={result}>
            <span data-name="like" onClick={onChange} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    data-name="increase"
                    onClick={onChange}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    onClick={onDelete}
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;