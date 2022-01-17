import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<div>
            <div className={s.pictureInfo}>
                <img alt='фон' src='https://st3.depositphotos.com/25539420/31756/v/950/depositphotos_317564460-stock-illustration-a-set-of-couples-dancing.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;