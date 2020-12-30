import React, { useRef, useState } from 'react';
import './style.scss';
import { SearchOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';

ContactSearch.propTypes = {
  onSubmit: PropTypes.func,
};

ContactSearch.defaultProps = {
  onSubmit: null,
};

function ContactSearch(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState('');
  //dùng ref lưu biến tạm, render lại cũng không bị thay đổi
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
      const value = e.target.value;
      setSearchTerm(e.target.value);

    if (!onSubmit) return;

    //SET -- 100 -- CLEAR, SET -- 500 -> SUBMIT
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 500);
  };

  return (
    <div className="contact__search">
      <div className="contact__search--container">
        <SearchOutlined />
        <form>
          <input
            placeholder="Search or start new chat"
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </form>
      </div>
    </div>
  );
}

export default ContactSearch;
