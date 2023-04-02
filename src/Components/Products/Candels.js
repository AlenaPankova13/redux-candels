import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/candelSlice";
import Cover from "../Cover/Cover";
import { data } from "../Data/Data";
import Filter from "../Filter/Filter";
import Infobox from "../Infobox/Infobox";
import Candel from "./Candel";
import Footer from "../Footer/Footer";

const Candels = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    
    return(
        <div>
            <div>
                <Cover />
            </div>
            <div>
                <Infobox />
            </div>        
            <div>
                <Filter />
            </div>
            <div className="products">
            {data
            .filter(category => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === category.type;
            })
            .map(candel => <Candel key={candel.id} candel={candel}/>)
            }
            </div>
            <div>
                <Footer/>
            </div>
        </div> 
    ) 
}

export default Candels;