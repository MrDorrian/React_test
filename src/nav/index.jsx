import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';
import Icon from '@mdi/react';
import { mdiBackburger, mdiClose } from '@mdi/js';

import cx from 'classnames';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const refContainer = useRef(null);

  const openMenu = () => {
    setIsOpen(true);
    console.log(isOpen);
  };
  const closeMenu = () => {
    console.log(isOpen);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (!isOpen && refContainer.current.contains(target)) {
        closeMenu();
      }
    };
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [isOpen, refContainer.current]);

  const classNames = useMemo(
    () =>
      cx(styles.wrapper, {
        [styles.open]: isOpen,
      }),
    [isOpen]
  );

  return (
    <div>
      <Icon path={mdiBackburger} size={1} onClick={openMenu} />
      <nav className={classNames} ref={refContainer}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Icon
          className={styles.close_button}
          path={mdiClose}
          size={1}
          onClick={closeMenu}
        />
      </nav>
    </div>
  );
};
