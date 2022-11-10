import Main from "./components/Main";
import Header from "./components/Header";
import { useState } from 'react';

function App () {

  const data = {
    name: [ 'The WET Codebase', 'Goodbye, Clean Code', 'My Decade In Review', 'What Are The React Team Principles' ],
    time: [ 'Sunday 4th, 2020', 'Friday 22nd 2019', 'Saturday 11th 2018', 'Thursday 4th 2015' ],
    duration: [ '11', '5', '5', '5' ],
    para: [ 'Come waste your time with me', 'Let clean code guide you. Then let it go.', 'A personal reflection', '' ]
  }

  let theme = '';

  const [themeMode, setNewThemeMode] = useState( theme );

  function onChange ( themeMode ) {
    setNewThemeMode( themeMode );
  }

  return (
    <div className={ `main ${ themeMode }` }>
      <div className="center">
      <Header onChange={onChange} />
      <Main themeChange={themeMode} title={ data.name[0] } time={data.time[0]} duration={data.duration[0]} para={data.para[0]} />
      <Main themeChange={themeMode} title={ data.name[1] } time={data.time[1]} duration={data.duration[1]} para={data.para[1]}/>
      <Main themeChange={themeMode} title={ data.name[2] } time={data.time[2]} duration={data.duration[2]} para={data.para[2]}/>
      <Main themeChange={themeMode} title={ data.name[3] } time={data.time[3]} duration={data.duration[3]} para={data.para[3]}/>
      </div>
    </div>
  );
}

export default App;