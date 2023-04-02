import FilteredCategories from "./FilteredCategories";

const Filter = () => {
    return(
        <div className="filter-container" id='filter'>
            <div className="filter">
                {['ALL', 'COCONUT', 'SOY'].map(category => <FilteredCategories key={category} category={category}/>)}
            </div>
        </div>
    )
}

export default Filter;