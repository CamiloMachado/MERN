import React, { useState } from "react";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import './styles.css'
import './styles-priority.css'
import api from "../../services/api";

function Notes({ data, handleDelete, handleChangePriority }) {
  const [changedNote, setChangedNote] = useState('');

  function handleEdit (e, priority) {
    e.style.cursor = 'text';

    if(priority){
      e.style.boxShadow = '0 0 5px white';
    } else {
      e.style.boxShadow = '0 0 5px gray';
    }
  };

  async function handleSave(e, notes) {
    e.style.cursor = 'default';
    e.style.borderRadius = 'none';
    e.style.boxShadow = 'none';

    if (changedNote && changedNote !== notes) {
      await api.put(`/content/${data._id}`, {
        notes: changedNote
      });
    }
  };

  return (
    <>
      <li className={data.priority ? 'notepad-infos-priority' : 'notepad-infos'}>
        <div>
          <strong>{data.title}</strong>
          <div>
            <DeleteTwoToneIcon 
              fontSize="small" 
              onClick={() => handleDelete(data._id)}
            />
          </div>
        </div>

        <textarea
          defaultValue={data.notes}
          onClick={e => handleEdit(e.target, data.priority)}
          onChange={e => setChangedNote(e.target.value)}
          onBlur={e => handleSave(e.target, data.notes)}
        />
        <span>
          <ErrorOutlineRoundedIcon 
            fontSize="small" 
            onClick={() => handleChangePriority(data._id)}
          />
        </span>
      </li>
    </>
  )
}

export default Notes;