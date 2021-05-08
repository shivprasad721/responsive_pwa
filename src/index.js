import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import "./index.css";
import swDev from './swDev';

ReactDOM.render(
    <>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </>,
    document.getElementById("root")
);
swDev();