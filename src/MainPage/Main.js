import NavigationButton from './Navigation/NavButton';
import Head from './Header/Head/Head'
import BackgroundMessages from './AllMails/BlockMessages/BackgroundMessages';
import style from './Main.module.css'



const Main = (props) => {
    return (
            <div className={style.appWrapper}>


                <div className={style.header}>
                    <Head/>
                </div>

                <div className={style.navigation}>
                    <NavigationButton />
                </div>

                <div className={style.allMails}>
                    <BackgroundMessages messagesData={props.messagesData} addMail={props.addMail}/>
                </div>

            </div>
    );
}

export default Main;