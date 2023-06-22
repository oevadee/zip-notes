import { nanoid } from "nanoid";
import { createContext, useContext, ParentComponent } from "solid-js";
import { createStore, produce } from "solid-js/store";

export interface Note {
  id: string;
  title: string;
  text: string;
  isNew?: boolean;
  createdAt: Date;
}

export type NotesContextValue = [
  state: Note[],
  actions: {
    addNote: (note: Note) => void;
    deleteNote: (noteId: string) => void;
  }
];

const NotesContext = createContext<NotesContextValue>([
  [],
  {
    addNote: () => {},
    deleteNote: () => {},
  },
]);

export const NotesProvider: ParentComponent<{
  notes?: Note[];
}> = (props) => {
  const [state, setState] = createStore<Note[]>([
    {
      id: nanoid(),
      title: "Test",
      text: "Test text",
      createdAt: new Date("December 17, 1995 03:24:00"),
    },
    {
      id: nanoid(),
      title: "Test 2",
      text: "Test textfsdfdsfdsikljfklsd jklfj dskljf klsdj klfjds kj flksdj lkfdsjkl sdfjlks djfklfjdskl 2",
      createdAt: new Date("December 17, 1995 03:24:00"),
    },
  ]);

  const addNote = (note: Note) => {
    setState(produce((notes) => notes.push(note)));
  };

  const deleteNote = (noteId: string) => {
    console.log(noteId);
    setState(
      produce((notes) => {
        const index = notes.findIndex((note) => note.id === noteId);
        if (index > -1) {
          // only splice array when item is found
          notes.splice(index, 1); // 2nd parameter means remove one item only
        }
      })
    );
  };

  return (
    <NotesContext.Provider value={[state, { addNote, deleteNote }]}>
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("No context provided");
  return context;
};
