import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { FunctionComponent } from '../src/components/function-component';
import { ClassComponent } from '../src/components/class-component';

function App( props ) {
  const topPosition = '25px';
  const addText = '+++ Additional greeting words';

  const handleMessageClick = () => {
    console.log('Message clicked..');
  };

  let s1 = {swtch: 1, clor: 'yellow'};

  return (
    <div className="App">
      <header className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
      style={{top: topPosition || '10px'}}>
        <img src={logo} className="App-logo" alt="logo" />
        My First React App
        <h3>Hello world! And { props.name } too!</h3>
        <Message text='Привет, hello friends!' addText={addText} onMessageClick={handleMessageClick}/>
        <FunctionComponent 
          myClassName='header-blue' 
          v1={1+2+3} 
          {...s1}
        />
        <ClassComponent 
          text='Привет'
          myClassName='header-blue' 
          v1={1+2+3} 
          {...s1}
        />
      </header>
      © geekbrains.ru 7
    </div>
  );
}
export default App;