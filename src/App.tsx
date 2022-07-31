import React, { useState, useRef } from 'react';
import Home from 'views/home';
import CharacterEditor from 'views/editor';
import GameLibrary from 'GameLibrary'
import Tabs, { Tab } from 'views/tabs'

interface AppState {
  tab: Tab;
  library: GameLibrary;
}

interface AppProps {
  tab: Tab;
}

function App( { tab }: AppProps ) {
  const [ appState, setAppState ] = useState<AppState>({ tab: tab } as AppState);

  function loadGameData() {
    if( appState.library === null ) {
      console.log( "GameData null" )
    }
  }

  function changeTab( e: React.MouseEvent<HTMLDivElement, MouseEvent> )
  {
    let newTab: Tab | undefined = Tabs.find( ( tab ) => { return tab.id === e.currentTarget.id } )?.selector;
    if( newTab !== undefined && newTab !== appState.tab ) 
    { setAppState( { ...appState, tab: newTab } ) }
  }

  loadGameData();

  return (
    <>
    <div>
      { Tabs.map( ( tab ) =>{ 
        return (
          <div key={tab.id} id={tab.id} onClick={changeTab}>{tab.name}</div>
        )
      } ) }
    </div>
    <div> { 
      appState.tab === Tab.Home ? <Home/> : 
      appState.tab === Tab.CharEditor ? <CharacterEditor/> : 
      <div>Error</div>
    } 
    </div>
    </>
  )
}

export default App;




// const inputRef = useRef<HTMLInputElement>(null!);
// function setText()
// {
//   let trimed = inputRef.current.value.trim();
//   if( !!trimed ) { setAppData( { ...curAppData, test: trimed } ) }
// }
// return (
//   <>
//     <input ref={inputRef} type="text"/>
//     <button onClick={setText}>set</button>
//     <div>{ curAppData.test }</div>
//   </>
// )