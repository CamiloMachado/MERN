import React from "react";
import Radio from '@mui/material/Radio';

import './styles.css'

function RadioButton({selectedValue, handleChange}) {
  return (
    <div className="radioOptions">
      <div>
        <Radio
          checked={selectedValue === 'all'}
          onChange={e => handleChange(e.target)}
          value="all"
          sx={{
            color: '#ffd3ca',
            '&.Mui-checked': { color: '#eb8f7a' },
          }}
        />
        <span>Todos</span>
      </div>
      <div>
        <Radio
          checked={selectedValue === 'true'}
          onChange={e => handleChange(e.target)}
          value="true"
          sx={{
            color: '#ffd3ca',
            '&.Mui-checked': { color: '#eb8f7a' },
          }}
        />
        <span>Prioridade</span>
      </div>
      <div>
        <Radio
          checked={selectedValue === 'false'}
          onChange={e => handleChange(e.target)}
          value="false"
          sx={{
            color: '#ffd3ca',
            '&.Mui-checked': { color: '#eb8f7a' },
          }}
        />
        <span>Normal</span>
      </div>
    </div>
  )
};

export default RadioButton;
