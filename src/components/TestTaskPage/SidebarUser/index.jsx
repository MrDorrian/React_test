import React from 'react';
import { UserContext } from '../../../context/UserContext';
import styles from './SideBarUser.module.scss';
export const SideBarUser = () => {
  const getUserData = (user) => {
    const { url, name, lastName } = user;
    return (
      <div className={styles.sideBarWrapper}>
        <div className={styles.userData}>Name: {name}</div>
        <div className={styles.userData}>LastNane: {lastName}</div>
        <img className={styles.imgWrapper} src={url} alt="" />
      </div>
    );
  };
  return <UserContext.Consumer>{getUserData}</UserContext.Consumer>;
};
