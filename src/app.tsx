import { useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

import 'styles/index.css';
import RelicLibrary, { RelicLibraryProps } from 'relic/library';
import RelicData, { RelicDataProps } from 'relic/library/data';
import Home from 'views/home';
import CharacterPanel from 'views/character';
import SkillPanel from 'views/skills';

interface AppState {
  library: RelicLibrary
  data: RelicData
}

function App(): JSX.Element {
  const [ appState, setAppState ] = useState<AppState>( { 
    library: new RelicLibrary(), 
    data: new RelicData(), 
  } );

  let libraryProps: RelicLibraryProps = {
    library: appState.library,
  }

  let dataProps: RelicDataProps = {
    library: appState.library, 
    data: appState.data, 
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Body/> }>
          <Route index element={ <Home/> } />
          <Route path="editor/*" element={ <CharacterPanel { ...dataProps }/> }/>
          <Route path="skills/*" element={ <SkillPanel { ...libraryProps }/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Body(): JSX.Element {
  return (
    <div className="main">
      <div className="mainHeader">
        <Link className="plain" to="/">Home</Link>
        <Link className="plain" to="editor">Editor</Link>
        <Link className="plain" to="skills">Skills</Link>
      </div>
      <div className="mainBody">
        <Outlet/>
      </div>
    </div>
  )
}

export default App;