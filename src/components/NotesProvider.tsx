import { createContext, useContext, ParentComponent } from "solid-js";
import { createStore, produce } from "solid-js/store";

export interface Note {
  title: string;
  text: string;
  isNew?: boolean;
  createdAt: Date;
}

export type NotesContextValue = [
  state: Note[],
  actions: {
    addNote: (note: Note) => void;
  }
];

const NotesContext = createContext<NotesContextValue>([
  [],
  {
    addNote: () => {},
  },
]);

export const NotesProvider: ParentComponent<{
  notes?: Note[];
}> = (props) => {
  const [state, setState] = createStore<Note[]>([
    {
      title: "Test",
      text: "Test text",
      createdAt: new Date("December 17, 1995 03:24:00"),
    },
    {
      title: "Test 2",
      text: "Test textfsdfdsfdsikljfklsd jklfj dskljf klsdj klfjds kj flksdj lkfdsjkl sdfjlks djfklfjdskl 2",
      createdAt: new Date("December 17, 1995 03:24:00"),
    },
  ]);

  const addNote = (note: Note) => {
    setState(produce((notes) => notes.push(note)));
  };

  return (
    <NotesContext.Provider value={[state, { addNote }]}>
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("No context provided");
  return context;
};
