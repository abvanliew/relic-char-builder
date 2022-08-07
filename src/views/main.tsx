import { useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

import 'styles/index.css';
import Home from 'views/home';
import CharacterEditor from 'charEditor/main';
import GameLibrary from 'gameData/library';

interface AppState {
  library: GameLibrary;
}

function Main(): JSX.Element {
  const [ appState, setAppState ] = useState<AppState>({ library: new GameLibrary() });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="editor" element={<CharacterEditor library={ appState.library }/>}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Body(): JSX.Element {
  return (
    <div className='grid'>
      <div className='gridHeader'>
        <Link className='plain' to={"/"}>Home</Link>
        <Link className='plain' to={"editor"}>Editor</Link>
      </div>
      <div className='gridMain'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Main;