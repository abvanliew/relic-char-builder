import { Outlet, Route, Routes } from 'react-router';
import { RelicLibraryProps } from 'relic/library';
import SkillCard from 'skills/card';
import SkillList from 'skills/list';

function SkillPanel( { ...props }: RelicLibraryProps ): JSX.Element {
  return (
    <>
    <Routes>
      <Route path="/" element={ <SkillLayout/> }>
        <Route index element={ <SkillList { ...props }/> }/>
        <Route path="view/:skillId" element={ <SkillCard { ...props }/> } />
      </Route>
    </Routes>
    </>
  )
}

function SkillLayout():JSX.Element {
  return <Outlet/>
}

export default SkillPanel;