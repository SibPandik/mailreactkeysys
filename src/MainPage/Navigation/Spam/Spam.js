import style from './Spam.module.css';
import {NavLink} from "react-router-dom";


const Spam = () => {
    return (
        <div>
            <button className={style.spamButton}>
                <NavLink to="/spam" className={style.spamLink}>
                    <p className={style.text}>Spam</p>
                </NavLink>
            </button>
        </div>
    );
}

export default Spam