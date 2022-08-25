import { RelicLibraryProps } from 'relic/library';
import SkillDetail from 'skills/detail'

import 'styles/skills.css';

interface SkillListProps extends RelicLibraryProps {
  fullText?: boolean
}

function SkillList( { ...props }: SkillListProps ):JSX.Element {
  let elements: Array<JSX.Element> = []
  let fullText: boolean = props.fullText??false;
  for( let key of props.library.skills.keys() )
    elements.push( ( 
      <SkillDetail key={ key } skillId={ key } library={ props.library } skillLink={ true }/> 
    ) )
  
  return ( 
    <>
    <div className="skillLineGrid">
      <div className="skillName">Name</div>
      <div className="skillActivation">Activation</div>
      <div className="skillKeywords">Keywords</div>
      <div className="skillRules">{ fullText ? "Rules" : "Summary" }</div>
      <div className="skillCost">Cost</div>
      <div className="skillTier">Tier</div>
      { elements }
    </div> 
    </> 
  )
}


export default SkillList;