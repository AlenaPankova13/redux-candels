import { useDispatch } from "react-redux";
import { filterCategory } from "../../redux/candelSlice";

const FilteredCategories = ({category}) => {
    const dispatch = useDispatch()
    return (
            <div>
                <button className="button-category" onClick={() => dispatch(filterCategory(category))}>{category}</button>
            </div>
    )
}

export default FilteredCategories;
