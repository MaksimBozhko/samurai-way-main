import React, {useState} from 'react';
import s from './../ProfileInfo.module.css'
import {ProfileType} from "../../../../redux/profile-reducer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import {DescriptionText} from "./descriptionText/DescriptionText";
import {DescriptionForm} from "./DescriptionForm";

type DescriptionPropsType = {
    profile: ProfileType
    URLId: string | undefined
}

const Description = ({profile, URLId}: DescriptionPropsType) => {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const settingIconClass = edit ? s.settingIcon : ''
    const onClickEdit = () => {
        setEdit(!edit)
    }
    const onClickShow = () => {
        setShow(!show)
    }
    const descriptionStyle = show || edit ? s.description : s.description + ' ' + s.hidden
    return (
        <div className={descriptionStyle}>
            <div className={s.control}>
                <SettingsIcon className={settingIconClass} onClick={onClickEdit}/>
                <div className={s.showMore} onClick={onClickShow}>
                    { show
                        ? <ExpandLessIcon />
                        :  <ExpandMoreIcon /> }
                    <span>show more</span>
                </div>
            </div>
            <Paper>
                {!URLId && edit
                    ? <DescriptionForm profile={profile} setEdit={setEdit}/>
                    : <DescriptionText profile={profile}/>}
            </Paper>
        </div>
    );
};

export default Description;