import { useEffect } from 'react';
import styles from './Popup.module.css';
import PropTypes from 'prop-types';

function Popup({ onClose }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div className={styles.popup}>
      <div className={styles.content}>Check out Successful!</div>
    </div>
  );
}

Popup.propTypes = {
    onClose: PropTypes.func, 
  };

export default Popup;
