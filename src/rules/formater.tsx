import { Layout } from "relic/library/rules";

interface ListFormaterProps {
  elements: Array<JSX.Element>
  layout: Layout
  sep?: string
}

function ListFormater( { ...props }: ListFormaterProps ): JSX.Element {
  let elements: Array<JSX.Element> = []
  let sep: string = props.sep??", "
  for(  let [ key, val ] of props.elements.entries() )
    if( props.layout === Layout.Inline )
      elements.push( <>{ val }{ key < props.elements.length - 1 ? " " : "" }</> )
    else if( props.layout === Layout.Delimited )
      elements.push( <>{ val }{ key < props.elements.length - 1 ? sep : "" }</> )
    else if( props.layout === Layout.Paragraph )
      elements.push( <p>{ val }</p> )
  return <>{ elements }</>
}

export default ListFormater;