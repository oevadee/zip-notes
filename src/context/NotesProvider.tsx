import { createContext, useContext, ParentComponent, Accessor } from "solid-js";
import axios from "axios";

import { useDataFetch } from "../hooks/useDataFetch";

export interface Note {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  isNew?: boolean;
}

export type NotesContextValue = [
  state: Accessor<Note[] | null>,
  actions: {
    addNote: (note: NoteInput) => void;
    deleteNote: (noteId: string) => void;
  }
];

type NoteInput = {
  title: string;
  description: string;
};

const NotesContext = createContext<NotesContextValue>(undefined);

export const NotesProvider: ParentComponent<{
  notes?: Note[];
}> = (props) => {
  const { data, refetch } = useDataFetch<Note[]>(
    "http://localhost:3000/api/notes",
    "notes"
  );

  const addNote = async (note: NoteInput) => {
    try {
      await axios.post("http://localhost:3000/api/notes", {
        note,
      });
    } catch (err) {
      console.error(err);
    } finally {
      refetch();
    }
  };

  const deleteNote = async (noteSlug: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/notes/${noteSlug}`);
    } catch (err) {
      console.error(err);
    } finally {
      refetch();
    }
  };

  return (
    <NotesContext.Provider value={[data, { addNote, deleteNote }]}>
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("No context provided");
  return context;
};
