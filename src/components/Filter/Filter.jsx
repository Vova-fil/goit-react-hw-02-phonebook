import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

export function Filter({ filter, setFilter }) {
  const inputId = nanoid();

  return (
    <>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        id={inputId}
        type="text"
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
