import style from './BackgroundMessages.module.css';
import OneMessages from "./OneMessage/OneMessage";

const BackgroundMessages = (props) => {



    let messageElements = props.messagesData.map( messageMap => <OneMessages theme={messageMap.theme} mailText={messageMap.mailText}/>)

    return (
        <div className={style.blockMessages}>
            { messageElements }
        </div>
    );
}

export default BackgroundMessages;