import style from './WriteMail.module.css'
import ReactDOM from "react-dom";
import React from "react";

const Modal = ({ open, onClose }, props) => {
    if (!open) return null

    let closeModal = () => {
        onClose(false)
    }

    let newThemeMailElement = React.createRef()
    let newTextMailElement = React.createRef()


    let addMail = () => {
        let theme = newThemeMailElement.current.value;
        let mailText = newTextMailElement.current.value;
        props.addMail(theme);
        props.addMail(mailText)
    }

    return ReactDOM.createPortal(
        <>
            <div className={style.overlay} onClick={() => onClose(false)}></div>
            <div className={style.modal} onClick={e => e.stopPropagation()}>
                <h1 className={style.hyperText}>Написать сообщение</h1>
                <label>Кому: </label><input className={style.toWhom}></input> <br/>
                <label>Тема: </label><input className={style.Theme} ref={newTextMailElement}></input>
                <textarea className={style.mesText} ref={newThemeMailElement}></textarea>
                <button className={style.sentMes} onClick={addMail}>Sent</button>

            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;