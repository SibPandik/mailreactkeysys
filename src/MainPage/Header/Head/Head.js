import style from './Head.module.css'
import avatar from './image/avatar.png'
import ModalProfile from './ModalProfile/ModalProfile'
import {useState} from "react";

const Head = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={style.head}>
            <p className={style.text}>MAIL</p>
            <div className={style.contLogo}>
                <button className={style.avatar} onClick={() => setIsOpen(true)}>
                    <img className={style.pic} src={avatar} alt={avatar}></img>
                </button>
                <ModalProfile open={isOpen} onClose={() => setIsOpen(false)}>Profile</ModalProfile>
            </div>
        </div>
    );
}

export default Head;