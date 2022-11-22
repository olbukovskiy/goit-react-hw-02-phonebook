import React from 'react';

export function Filter({ onChange }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" onChange={onChange} />
      </label>
    </div>
  );
}
