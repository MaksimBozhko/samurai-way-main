import React from 'react';
import s from "../../ProfileInfo.module.css";
import {ProfileType} from "../../../../../redux/profile-reducer";

type DescriptionTextProps = {
    profile: ProfileType
};
export const DescriptionText = ({profile}: DescriptionTextProps) => {
    return (
        <div className={s.descriptionText}>
            <div>about Me: {profile.aboutMe}</div>
            <div>lookingForAJob: {profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div>lookingForAJobDescription: {profile.lookingForAJobDescription}</div>
            <div>contacts: {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)} </div>
        </div>
    );
};

export type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div>{contactTitle}: {contactValue}</div>
};