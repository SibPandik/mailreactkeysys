import ReactDOM from "react-dom";
import style from './ModalProfile.module.css'

const ModalProfile = ({ open, onClose }) => {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div className={style.overlay} onClick={() => onClose(false)}></div>
            <div className={style.modalProfile} onClick={l => l.stopPropagation()}>
                Мулюков Кирилл Евгеньевич
                ЧКИ РУК
                ПИ(ПИУ)2
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default ModalProfile