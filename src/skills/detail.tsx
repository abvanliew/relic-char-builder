import { Link } from "react-router-dom";

import { RelicLibraryProps } from "relic/library";
import { RuleLayout } from "relic/library/rules";
import { Skill } from "relic/skills";
import { ShortDescription } from "rules/detail";
import RulesText, { ElementsText, ElementText, FormattingProps } from "rules/text";
import { SkillCell } from "skills/list";

export interface SkillDetailProps extends RelicLibraryProps {
  skillId: string
  format?: FormattingProps
  fullText?: boolean
  skillLink?: boolean
  columns?: Map<SkillCell, boolean>
}

function SkillDetail( { ...props }: SkillDetailProps ): JSX.Element {
  let skill: Skill = props.library.skills.get( props.skillId )!

  return (
    <>
    { DetailName( skill, props ) }
    { DetailAct( skill, props ) }
    { DetailKeys( skill, props ) }
    { DetailRules( skill, props ) }
    { DetailCost( skill, props ) }
    { DetailTier( skill, props ) }
    { DetailReqs( skill, props ) }
    </>
  )
}

function DetailName( skill: Skill, props: SkillDetailProps ):JSX.Element {
  if( props.columns && !props.columns.get( SkillCell.Name ) ) return <></>
  return (
    <div className="skillName">
      {
        props.skillLink ?
        ( <Link className="plain" to={ "view/" + props.skillId }>{ skill.details.name }</Link> ) :
        ( <>{ skill.details.name }</> )
      }
    </div>
  )
}

function DetailAct( skill: Skill, props: SkillDetailProps ):JSX.Element {
  if( props.columns && !props.columns.get( SkillCell.Act ) ) return <></>
  return (
    <div className="skillAct">
      <ElementsText 
        elements={ skill.activations }
        library={ props.library }
        format={ { layout: RuleLayout.Inline } as FormattingProps }
      />
    </div>
  )
}

function DetailKeys( skill: Skill, props: SkillDetailProps ):JSX.Element {
  if( props.columns && !props.columns.get( SkillCell.Keys ) ) return <></>
  return (
    <div className="skillKeys">
      <ElementsText 
        elements={ skill.keywords }
        library={ props.library }
        format={ { layout: RuleLayout.Delimited } as FormattingProps }
      />
    </div>
  )
}

function DetailRules( skill: Skill, props: SkillDetailProps ):JSX.Element {
  if( props.columns && !props.columns.get( SkillCell.Rules ) ) return <></>
  return (
    <div className="skillRules">
      { 
        props.fullText??false ? 
        ( <RulesText rules={skill.rules} library={props.library}/> ) : 
        ( <ShortDescription details={skill.details}/> ) 
      }
    </div>
  )
}

function DetailCost( skill: Skill, props: SkillDetailProps ):JSX.Element {
  if( props.columns && !props.columns.get( SkillCell.Cost ) ) return <></>
  return (
    <div className="skillCost">
      <ElementText element={skill.cost} library={props.library}/>
    </div>
  )
}

function DetailTier( skill: Skill, props: SkillDetailProps ):JSX.Element {
  if( props.columns && !props.columns.get( SkillCell.Tier ) ) return <></>
  return (
    <div className="skillTier">
      { props.library.getTierName( skill.tier ) }
    </div>
  )
}

function DetailReqs( skill: Skill, props: SkillDetailProps ):JSX.Element {
  if( props.columns && !props.columns.get( SkillCell.Reqs ) ) return <></>
  return (
    <div className="skillReqs">
      n/a
    </div>
  )
}



export default SkillDetail;