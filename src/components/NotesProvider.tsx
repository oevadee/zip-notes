import { createContext, useContext, ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";

export interface Note {
  title: string;
  text: string;
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
}> = ({ children }) => {
  const [state, setState] = createStore<Note[]>([
    {
      title: "",
      text: "",
    },
  ]);

  const addNote = (note: Note) => setState((state) => [...state, note]);

  return (
    <NotesContext.Provider value={[state, { addNote }]}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
