import style from './Trash.module.css';
import {NavLink} from "react-router-dom";

const Trash = () => {
    return (
        <div>
            <button className={style.trashButton}>
                <NavLink to="/trash" className={style.trashLink}>
                    <p className={style.text}>Trash</p>
                </NavLink>
            </button>
        </div>
    );
}

export default Trash