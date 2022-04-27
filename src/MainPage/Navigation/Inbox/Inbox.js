import style from './Inbox.module.css';
import {NavLink} from "react-router-dom";

const Inbox = () => {
    return (
        <div>
            <button className={style.inboxButton}>
                <NavLink to="/inbox" className={style.inboxLink}>
                    <p className={style.text}>Inbox</p>
                </NavLink>
            </button>
        </div>
    );
}

export default Inbox