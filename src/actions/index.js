export const LOAD_ALL_NOTES = 'LOAD_ALL_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';

export const createNote = (noteTitle, noteContent) => {
  return dispatch => {
    const json = {
      title: noteTitle,
      content: noteContent
    };
    dispatch({type: CREATE_NOTE, newNote: json})
  }
};

export const updateNote = (note_id, note_title, note_content) => {
  return dispatch => {
    const json = {
      id: note_id,
      title: note_title,
      content: note_content
    };
    dispatch({type: UPDATE_NOTE, updated_note: json})
  }
};

//fetchAllAPI
// export loadAllNotes = () => {
//   return(dispatch) => {
//     fetch('<api>')
//     .then(response => response.json())
//     .then(json => dispatch({
//       type: LOAD_ALL_NOTES,
//       payload: json
//     }))
//   }
// }

//createNoteAPI
// export function createNote(noteTitle, noteContent) {
//   return (dispatch) => {
//     fetch('<api>',
//     {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accepts': 'application/json'
//       }, body: JSON.stringify({
//         title: noteTitle,
//         content: noteContent
//       })
//     })
//     .then(response => response.json())
//     .then(json => {
//       dispatch({
//         type: CREATE_NOTE,
//         newNote: json
//       })
//     })
//   }
// }

//updateNoteAPI
// export function updateNote(note_id, note_title, note_content) {
//   return (dispatch) => {
//     fetch(`<api>`,
//       {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accepts': 'application/json'
//         },
//         body: JSON.stringify({
//           title: note_title,
//           content: note_content
//         })
//       })
//       .then(response => response.json())
//       .then(json => dispatch({
//         type: UPDATE_NOTE,
//         updated_note: json
//       }))
//     }
//   }
