import { debug } from "console";
import RelicLibrary from "relic/library";
import { GroupValueType, Layout, RuleElement, VsElement } from "relic/library/rules";
import { KeywordName } from "rules/detail";
import ListFormater from "rules/formater";

interface RulesTextProps {
  rules: Map<string, GroupValueType>
  library: RelicLibrary
  format?: FormattingProps
}

export interface FormattingProps {
  layout?: Layout
}

function RulesText( { ...props }: RulesTextProps ): JSX.Element {
  let elements: Array<JSX.Element> = []

  for( let [ key, val ] of props.rules.entries() ) {
    if( typeof val === 'string' )
      elements.push( 
        <div key={ key }>{ val }</div> 
      )
    else if( 'rules' in val )
      elements.push( 
        <div key={ key }>
          <RulesText 
            rules={ val.rules } 
            library={ props.library } 
          /> 
        </div>
      )
    else if( 'id' in val )
      elements.push( 
        <div key={ key }>
          <ElementText 
            element={ val } 
            library={ props.library } 
          /> 
        </div>
      )
    else if( 'ability' in val && 'defense' in val )
      elements.push( 
        <VsText 
          key={ key } 
          vs={ val } 
          library={ props.library }
        /> 
      )
  }

  return <div>{ elements }</div>
}

interface VsTextProps {
  vs: VsElement
  library: RelicLibrary
}

function VsText( { ...props }: VsTextProps ): JSX.Element {
  return (
    <>
    <div>
      <KeywordName 
        id={ props.vs.ability.id } 
        library={ props.library }
      />
      <> <a>vs</a> </>
      <KeywordName 
        id={ props.vs.defense.id } 
        library={ props.library }
      />
    </div>
    </>
  )
}

interface ElementTextProps {
  element: RuleElement
  library: RelicLibrary
}

export function ElementText( { ...props }: ElementTextProps ): JSX.Element {
  return (
    <>
      <KeywordName id={ props.element.id } library={ props.library }/>
      <ElementValue {...props}/>
    </>
  )
}

function ElementValue( { ...props }: ElementTextProps ): JSX.Element {
  if( props.element.value === undefined ) 
    return <></>
  if( typeof props.element.value === 'string' || typeof props.element.value === 'number' )
    return <>: { props.element.value }</>
  else if( 'rules' in props.element.value )
    return <>: <RulesText rules={props.element.value.rules} library={props.library}/></>
  return <></>
}

interface ElementsTextProps {
  elements: Map<string, RuleElement> | undefined
  library: RelicLibrary
  format?: FormattingProps
}

export function ElementsText( { ...props }: ElementsTextProps ): JSX.Element {
  if( props.elements === undefined ) 
    return <></>

  let elements: Array<JSX.Element> = []
  for(  let [ key, val ] of props.elements.entries() )
    elements.push( 
      <ElementText 
        key={ key } 
        element={ val } 
        library={ props.library } 
      />  
    )

  if( props.format )
    return <ListFormater 
      elements={ elements } 
      layout={ props.format?.layout??Layout.Inline } 
    />

  return <>{ elements }</>
}

export default RulesText;