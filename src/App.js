import './App.css';
import {BrowserRouter} from "react-router-dom";
import Main from './MainPage/Main'


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-main'>
                <div className='allMain'>
                    <Main messagesData={props.messagesData} addMail={props.addMail}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
