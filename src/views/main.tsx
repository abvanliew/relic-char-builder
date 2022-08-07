import React, { useState } from 'react';
import Tabs, { Tab } from 'views/tabs';
import Home from 'views/home';
import GameLibrary from 'gameData/library';
import CharacterEditor from 'charEditor/main';
import 'styles/index.css';

interface AppState {
  tab: Tab;
  library: GameLibrary;
}

interface AppProps {
  tab: Tab;
}

function Main( { ...props }: AppProps ): JSX.Element {
  const [ appState, setAppState ] = useState<AppState>({ tab: props.tab } as AppState);
  loadGameData();

  function loadGameData() {
    if( appState.library === null || appState.library === undefined ) {
      setAppState( { ...appState, library: new GameLibrary() } );
    }
  }

  function changeTab( e: React.MouseEvent<HTMLDivElement, MouseEvent> ) {
    let newTab: Tab | undefined = Tabs.find( ( tab ) => { return tab.id === e.currentTarget.id } )?.selector;
    if( newTab !== undefined && newTab !== appState.tab ) { 
      setAppState( { ...appState, tab: newTab } ) 
    }
  }

  function TabList(): JSX.Element {
    return (
      <> { Tabs.map( ( tab ) => { 
        return <div key={tab.id} id={tab.id} onClick={changeTab}>{tab.name}</div> 
      } ) } </> 
    )
  }

  return (
    <>
    <div className='grid'>
      <div className='gridHeader'>
        <TabList/>
      </div>
      <div className='gridMain'> 
        { 
          appState.tab === Tab.Home ? <Home/> : 
          appState.tab === Tab.CharEditor ? <CharacterEditor library={appState.library}/> : 
          <div>Error</div>
        } 
      </div>
    </div>
    </>
  )
}

export default Main;