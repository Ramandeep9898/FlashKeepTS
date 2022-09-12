import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type CreatedNote = {
  title?: string | null;
  body?: string | null;
  priority?: string | null;
  color?: string | null;
};

type UserProfileType =
  | {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    }
  | object;

type Tag = string;

export type NotesType = {
  bgcolor: string;
  content: string;
  createdAt: string;
  date: Date;
  tags: Tag[];
  time: string;
  _id: string;
  trash: NotesType[];
  archives: NotesType[];
  notes: NotesType[];
  priority: string;
  title: string;
};
type NoteToEdit = {
  _id: string;
  title: string;
  content: string;
  bgcolor: string;
  priority: string;
  tags: Tag[];
};

interface NotesInitialStateProps {
  userProfile: UserProfileType;
  notes: NotesType[];
  archive: NotesType[];
  trash: NotesType[];
  noteToEdit: NoteToEdit | null;
  byPriority: string | null;
  byTags: any[];
  byDate: string | null;
  bySearch: string;
}

const initialState: NotesInitialStateProps = {
  userProfile: {},
  notes: [],
  archive: [],
  trash: [],
  noteToEdit: null,
  byPriority: null,
  byTags: [],
  byDate: null,
  bySearch: "",
};

export type NoteAttr = {
  _id?: string;
};

export const getUserNotes = createAsyncThunk(
  "/notes/getUserNotes",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken: string = localStorage.getItem("flashNotesToken") || "";
    try {
      const response = await axios.get("/api/notes", {
        headers: {
          authorization: encodedToken,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createNewNotes = createAsyncThunk(
  "notes/createNewNote",
  async (note: CreatedNote) => {
    const encodedToken: string = localStorage.getItem("flashNotesToken") || "";
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteNoteHandler = createAsyncThunk(
  "notes/deleteNoteHandler",
  async (id, { rejectWithValue }) => {
    const encodedToken: string = localStorage.getItem("flashNotesToken") || "";
    try {
      const response = await axios.delete(`/api/notes/${id}`, {
        headers: { authorization: encodedToken },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const trashNote = createAsyncThunk<any, NoteAttr>(
  "notes/trashNote",
  async (note, { rejectWithValue }) => {
    console.log(note);
    const encodedToken: string = localStorage.getItem("flashNotesToken") || "";
    const { _id } = note;
    try {
      const response = await axios.post(
        `/api/notes/trash/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const getArchiveNotes = createAsyncThunk(
  "notes/getArchiveNotes",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken: string = localStorage.getItem("flashNotesToken") || "";
    try {
      const response = await axios.get("/api/archives", {
        headers: { authorization: encodedToken },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const archiveNote = createAsyncThunk<any, NoteAttr>(
  "notes/archiveNote",
  async (note, { rejectWithValue }) => {
    const encodedToken: string = localStorage.getItem("flashNotesToken") || "";
    const { _id } = note;
    try {
      const response = await axios.post(
        `/api/notes/archives/${_id}`,
        { note },
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const unarchiveNote = createAsyncThunk<any, NoteAttr>(
//   "notes/unarchiveNote",
//   async (note, { rejectWithValue }) => {
//     const encodedToken: string = localStorage.getItem("flashNotesToken") || "";
//     const { _id } = note;
//     try {
//       const response = await axios.post(
//         `/api/archives/restore/${_id}`,
//         {},
//         { headers: { authorization: encodedToken } }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const notesSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserNotes.fulfilled, (state, action) => {
        console.log(action);
        state.notes = action.payload.notes;
      })
      .addCase(createNewNotes.fulfilled, (state, action) => {
        state.notes = action.payload.notes;
      })
      .addCase(trashNote.fulfilled, (state, action) => {
        state.notes = action.payload.notes;
        state.trash = action.payload.trash;
      })

      .addCase(deleteNoteHandler.fulfilled, (state, action) => {
        console.log(action);
        state.notes = action.payload.notes;
      })
      .addCase(archiveNote.fulfilled, (state, action) => {
        console.log(action);
        state.archive = action.payload.notes;
      });
  },
});
export default notesSlice.reducer;
