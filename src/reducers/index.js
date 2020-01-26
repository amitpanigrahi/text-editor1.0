import {combineReducers} from 'redux';
import {LOAD_ALL_NOTES, UPDATE_NOTE, CREATE_NOTE} from '../actions'

const staticData = [
    {
        "id": 1,
        "title": "kool",
        "content": "{\"blocks\":[{\"key\":\"5h8ab\",\"text\":\"note1\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
        "created_at": "2020-01-26T13:44:30.974Z",
        "updated_at": "2020-01-26T13:44:30.974Z"
    },
    {
        "id": 2,
        "title": "kanya",
        "content": "{\"blocks\":[{\"key\":\"5h8ab\",\"text\":\"note2\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
        "created_at": "2020-01-26T13:44:30.974Z",
        "updated_at": "2020-01-26T13:44:30.974Z"
    }
];

const notes = (state = {allNotes: [...staticData], displayedNote: null}, action) => {
    switch (action.type) {
        case LOAD_ALL_NOTES:
            return {...state, allNotes: action.payload};

        case CREATE_NOTE:
            let newNote = action.newNote;
            let oldState = state.allNotes.slice(0);
            return {...state, allNotes: [...oldState, newNote]};

        case UPDATE_NOTE:
            let updatedNoteId = action.updated_note.id;
            let locateOutDatedNote = state.allNotes.find((n) => {
                return n.id == updatedNoteId
            });
            let updatedNote = action.updated_note;
            let currentNotesState = state.allNotes.slice(0);
            const savedNotes = [
                ...currentNotesState.slice(0, currentNotesState.indexOf(locateOutDatedNote)),
                updatedNote,
                ...currentNotesState.slice(currentNotesState.indexOf(locateOutDatedNote) + 1)
            ];
            return {...state, allNotes: savedNotes};

        default:
            return state;

    }

};

const rootReducer = combineReducers({
    notes
});

export default rootReducer;
