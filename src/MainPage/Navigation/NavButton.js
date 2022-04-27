import style from './NavButton.module.css';
import Draft from './Drafts/Draft';
import Inbox from './Inbox/Inbox';
import Sent from './Sent/Sent'
import Spam from './Spam/Spam';
import Trash from './Trash/Trash';
import Modal from './WriteMail/WriteMail';
import {useState} from "react";

const NavArea = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={style.Button}>
            <div>
                <Inbox />
                <Draft />
                <Sent />
                <Spam />
                <Trash />
                <div className={style.openModal}>
                    <button className={style.sentButton} onClick={() => setIsOpen(true)}>Write mail</button>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)} addMail={props.addMail}></Modal>
                </div>
            </div>
        </div>
    );
}

export default NavArea