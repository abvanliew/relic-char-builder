import RelicLibrary from "relic/library";
import RuleDetail from "relic/library/rules";
import { FormattingProps } from "rules/text";

interface RulesDetailProps {
  details: RuleDetail | undefined
  format?: FormattingProps
}

export function RuleName( {...props}: RulesDetailProps ): JSX.Element {
  if( props.details === undefined ) return <></>
  return (
    <a href={ props.details.refUrl }>
      { props.details.name }
    </a>
  )
}

export function ShortDescription( {...props}: RulesDetailProps ): JSX.Element {
  if( props.details === undefined ) return <></>
  return (
    <div>
      { props.details.shortDescription }
    </div>
  )
}

export function FullDescription( {...props}: RulesDetailProps ): JSX.Element {
  if( props.details === undefined ) return <></>
  return (
    <div>
      { props.details.fullDescription }
    </div>
  )
}

interface KeywordProps {
  id: string
  library: RelicLibrary
  format?: FormattingProps
}

export function KeywordName( {...props}: KeywordProps ): JSX.Element {
  return <RuleName details={ props.library.getKeywordDetail( props.id ) }/>
}