import style from './OneMessage.module.css';

const OneMessages = (props) => {
    return (
        <div className={style.oneMessage}>
            <div className={style.Theme}>{props.theme}</div>
            <div className={style.TextMes}>{props.mailText}</div>
        </div>
    );
}

export default OneMessages;