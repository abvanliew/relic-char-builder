import { useParams } from "react-router-dom";
import { RelicLibraryProps } from "relic/library";
import SkillDetail from "skills/detail";


function SkillCard( { ...props }: RelicLibraryProps ): JSX.Element {
  const params = useParams();
  let [ skillId, skillValid ] = props.library.getSkillDetail( params.skillId )
  return ( 
    <>
    {
      skillValid ? (
        <div className="skillCardGrid">
          <SkillDetail library={ props.library } skillId={ params.skillId! } fullText={ true }/> 
        </div>
      ) : <></>
    }
    </> 
  )
}

export default SkillCard;