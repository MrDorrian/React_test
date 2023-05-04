import React from 'react';
import style from './Header.module.scss';
import { UserContext } from '../../../context/UserContext';

export const Header = () => {
  const getUserData = (user) => {
    const { url, name } = user;
    return (
      <div className={style.wrapper}>
        <div className={style.UserWrapper}>
          <img src={url} alt={name} className={style.userProfile} />
          <p className={style.UserName}>{name}</p>
        </div>
      </div>
    );
  };

  return <UserContext.Consumer>{getUserData}</UserContext.Consumer>;
};
