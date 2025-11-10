"use client";
import { useState } from "react";

export const NotesApp = () => {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = (note: string) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">Add Notes</h2>
      <p className="text-gray-600 mb-4" data-testid="desc">
        Write a note and it will appear below.
      </p>

      <NotesForm addNote={addNote} />

      <NotesList notes={notes} />
    </div>
  );
};


type NotesFormProps = {
  addNote: (note: string) => void;
};

export const NotesForm = ({ addNote }: NotesFormProps) => {
  const [noteInput, setNoteInput] = useState("");

  const handleAdd = () => {
    if (!noteInput.trim()) return;
    addNote(noteInput);
    setNoteInput("");
  };

  return (
    <div>
      <input
        className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Write a note..."
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
      />

      <button
        disabled={!noteInput.trim()}
        onClick={handleAdd}
        className="bg-blue-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add Note
      </button>
    </div>
  );
};

type NotesListProps = {
  notes: string[];
};

export const NotesList = ({ notes }: NotesListProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Notes List:</h3>

      {notes.length === 0 && (
        <p className="text-gray-500 mt-2">No notes yet.</p>
      )}

      <ul className="mt-3 space-y-2" data-testid="notes-list">
        {notes.map((note, index) => (
          <li
            key={index}
            className="p-2 bg-gray-100 rounded-md border border-gray-200"
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};
