import { nanoid } from 'nanoid';

export const enum Tab {
  Home = 0,
  CharEditor
}

export interface TabDetails {
  id: string;
  name: string;
  selector: Tab;
}

const Tabs: Array<TabDetails> = [
  { 
    id: nanoid(),
    name: "Home",
    selector: Tab.Home,
  },
  { 
    id: nanoid(),
    name: "Editor",
    selector: Tab.CharEditor,
  },
]

export default Tabs;