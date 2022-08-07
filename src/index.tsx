import { createRoot } from 'react-dom/client';
import Main from 'views/main';

const root = createRoot( document.getElementById( 'root' )! );
root.render( <Main/> );