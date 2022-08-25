import { Link } from "react-router-dom";
import { RelicLibraryProps } from "relic/library";
import { Layout } from "relic/library/rules";
import { Skill } from "relic/skills";
import { ShortDescription } from "rules/detail";
import RulesText, { ElementsText, ElementText, FormattingProps } from "rules/text";

export interface SkillDetailProps extends RelicLibraryProps {
  skillId: string
  format?: FormattingProps
  fullText?: boolean
  skillLink?: boolean
}

function SkillDetail( { ...props }: SkillDetailProps ): JSX.Element {
  let skill: Skill = props.library.skills.get( props.skillId )!
  let fullText: boolean = props.fullText??false;
  
  return (
    <>
    <div className="skillName">
      {
        props.skillLink ?
        ( <Link className="plain" to={ "view/" + props.skillId }>{ skill.details.name }</Link> ) :
        ( <>{ skill.details.name }</> )
      }
    </div>
    <div className="skillActivation">
      <ElementsText 
        elements={ skill.activations }
        library={ props.library }
        format={ { layout: Layout.Inline } as FormattingProps }
      />
    </div>
    <div className="skillKeywords">
      <ElementsText 
        elements={ skill.keywords }
        library={ props.library }
        format={ { layout: Layout.Delimited } as FormattingProps }
      />
    </div>
    <div className="skillRules">
      { 
        fullText ? 
        ( <RulesText rules={skill.rules} library={props.library}/> ) : 
        ( <ShortDescription details={skill.details}/> ) 
      }
    </div>
    <div className="skillCost">
      <ElementText element={skill.cost} library={props.library}/>
    </div>
    <div className="skillTier">
      { props.library.getTierName( skill.tier ) }
    </div>
    </>
  )
}

export default SkillDetail;