
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8 mx-auto '>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16 w-10/12 mx-auto">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/shop/${title}`} >
            <button className="btn btn-outline border-0 border-b-4 mt-4 w-96  mx-[550px]">Order Your Favorite Food Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;