import style from './Draft.module.css';
import {NavLink} from "react-router-dom";

const Draft = () => {
    return (
        <div>
            <button className={style.draftButton}>
                <NavLink to="/drafts" className={style.draftLink}>
                    <p className={style.text}>Drafts</p>
                </NavLink>
            </button>
        </div>
    );
}

export default Draft
