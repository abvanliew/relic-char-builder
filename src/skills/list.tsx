import { useState } from 'react';

import 'styles/skills.css';
import { RelicLibraryProps } from 'relic/library';
import SkillDetail from 'skills/detail'
import Checkbox from 'util/toggle';

interface SkillListState {
  columns: Map<SkillCell, boolean>
  showConfig: boolean
  fullRules: boolean
}

export enum SkillCell {
  Name = 0,
  Act,
  Keys,
  Rules,
  Cost,
  Tier,
  Reqs
}

const ColumnTitles: Map<SkillCell, string> = new Map<SkillCell, string> ( [
  [ SkillCell.Name, "Name" ], 
  [ SkillCell.Act, "Activation" ], 
  [ SkillCell.Keys, "Keywords" ], 
  [ SkillCell.Rules, "Rules" ], 
  [ SkillCell.Cost, "Cost" ], 
  [ SkillCell.Tier, "Tier" ], 
  [ SkillCell.Reqs, "Requirements" ], 
] )

function DefaultListState(): SkillListState {
  return {
    showConfig: true, 
    fullRules: false, 
    columns: new Map<SkillCell, boolean>( [
      [ SkillCell.Name, true ], 
      [ SkillCell.Act, true ], 
      [ SkillCell.Keys, true ], 
      [ SkillCell.Rules, true ], 
      [ SkillCell.Cost, false ], 
      [ SkillCell.Tier, false ], 
      [ SkillCell.Reqs, false ], 
    ] ), 
  }
}

function SkillList( { ...props }: RelicLibraryProps ):JSX.Element {
  const [ listState, setState ] = useState<SkillListState>( DefaultListState() )
  function toggleColumn( key: number, value: boolean ) {
    setState( 
      { 
        ...listState, 
        columns: new Map<SkillCell, boolean>( [ ...listState.columns, [ key, value ] ] ) 
      } 
    )
  }

  console.log( listState.columns )

  let [ configPanel, headers, colOrder ] = SkillListConfig( { 
    columns: listState.columns, 
    toggleHandler: toggleColumn, 
  } )

  let rows: Array<JSX.Element> = []
  for( let key of props.library.skills.keys() )
    rows.push( ( 
      <SkillDetail 
        key={ key } 
        skillId={ key } 
        library={ props.library } 
        columns={ listState.columns } 
        skillLink={ true } 
      /> 
    ) )

  return ( 
    <>
    <div>
      <div>CFG</div>
      { listState.showConfig ? configPanel : null }
    </div>
    <div className="skillRowGrid" style={ { gridTemplateAreas: `\"${ colOrder }\"` } }>
      { headers }
      { rows }
    </div>
    </>
  )
}

interface ListConfigProps {
  columns: Map<SkillCell, boolean>
  toggleHandler: ( key: number, value: boolean ) => void
}

function SkillListConfig( { ...props }: ListConfigProps ): [ JSX.Element, JSX.Element, string ] {
  let configs: Array<JSX.Element> = [];
  let headers: Array<JSX.Element> = [];
  let colNames: Array<string> = [];
  for( let [ key, val ] of props.columns.entries() ) {
    let displayName: string = ColumnTitles.get( key )??"";
      
    if( key !== SkillCell.Name ) {
      configs.push( 
        <Checkbox 
          key={ key } 
          id={ key } 
          label={ displayName } 
          value={ val } 
          toggleHandler={ props.toggleHandler } 
        />
      );
    }
  
    if( val ) {
      colNames.push( SkillCell[ key ] );
      headers.push( <div key={ key } className={ `skill${ SkillCell[ key ] } skillHeader` }>{ displayName }</div> );
    }
  }

  return [ <>{ configs }</>, <>{ headers }</>, colNames.join( " " ) ];
}

export default SkillList;