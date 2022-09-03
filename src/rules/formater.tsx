import { Fragment } from "react";
import { RuleLayout } from "relic/library/rules";

interface ListFormaterProps {
  elements: Array<JSX.Element>
  layout: RuleLayout
  sep?: string
}

function ListFormater( { ...props }: ListFormaterProps ): JSX.Element {
  let elements: Array<JSX.Element> = []
  let sep: string = props.sep??", "
  for(  let [ key, val ] of props.elements.entries() )
    if( props.layout === RuleLayout.Inline )
      elements.push( <Fragment key={ key }>{ val }{ key < props.elements.length - 1 ? " " : "" }</Fragment> )
    else if( props.layout === RuleLayout.Delimited )
      elements.push( <Fragment key={ key }>{ val }{ key < props.elements.length - 1 ? sep : "" }</Fragment> )
    else if( props.layout === RuleLayout.Paragraph )
      elements.push( <p key={ key }>{ val }</p> )
  return <>{ elements }</>
}

export default ListFormater;