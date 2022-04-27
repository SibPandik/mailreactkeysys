import style from './Sent.module.css';
import {NavLink} from "react-router-dom";

const Sent = () => {
    return (
        <div>
            <button className={style.sentButton}>
                <NavLink to="/sent" className={style.sentLink}>
                    <p className={style.text}>Sent</p>
                </NavLink>
            </button>
        </div>
    );
}

export default Sent