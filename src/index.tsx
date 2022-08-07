import { createRoot } from 'react-dom/client';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Main from 'views/main';
import { Tab } from 'views/tabs';

const root = createRoot( document.getElementById( 'root' )! );
root.render( <Main tab={Tab.Home}/> )
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/">
//         <Route index element={ <Main tab={Tab.Home}/> }/>
//         <Route path="editor" element={ <Main tab={Tab.CharEditor}/> }/>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );