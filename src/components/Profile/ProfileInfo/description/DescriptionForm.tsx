import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../../hooks/hooks";
import {ProfileType, saveProfileThunkCreator} from "../../../../redux/profile-reducer";

type DescriptionFormProps = {
    profile: ProfileType
    setEdit: (edit: boolean) => void
};
export type DescriptionFormType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export const DescriptionForm = ({setEdit, profile}: DescriptionFormProps) => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<DescriptionFormType>();
    const onSubmit: SubmitHandler<DescriptionFormType> = data => {
        setEdit(false)
        dispatch(saveProfileThunkCreator(data))
    }
    const defaultValues = {
        fullName: profile.fullName,
        aboutMe: profile.aboutMe || '',
        lookingForAJob: profile.lookingForAJob || false,
        lookingForAJobDescription: profile.lookingForAJobDescription || '',
        contacts: profile.contacts,
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <b>FullName</b>
                <input type="text" {...register('fullName')}
                       defaultValue={defaultValues.fullName}/>
            </div>
            <div>
                <b>about Me</b>
                <input type="text" {...register('aboutMe')}
                       defaultValue={defaultValues.aboutMe}/>
            </div>
            <div>
                <b>lookingForAJob</b>
                <input type="checkbox" {...register('lookingForAJob')}
                       defaultValue={defaultValues.lookingForAJob ? 'yes' : 'no'}/>
            </div>
            <div>
                <b>lookingForAJobDescription</b>
                <textarea {...register('lookingForAJobDescription')} defaultValue={defaultValues.lookingForAJobDescription}/>
            </div>
            <div>
                <b>contacts</b>
                <div><b>facebook</b>: <input type="url" {...register(`contacts.facebook`)} defaultValue={defaultValues.contacts.facebook}/></div>
                <div><b>website</b>: <input type="url" {...register(`contacts.website`)} defaultValue={defaultValues.contacts.website}/></div>
                <div><b>vk</b>: <input type="url" {...register(`contacts.vk`)} defaultValue={defaultValues.contacts.vk}/></div>
                <div><b>instagram</b>: <input type="url" {...register(`contacts.instagram`)} defaultValue={defaultValues.contacts.instagram}/></div>
                <div><b>youtube</b>: <input type="url" {...register(`contacts.youtube`)} defaultValue={defaultValues.contacts.youtube}/></div>
                <div><b>github</b>: <input type="url" {...register(`contacts.github`)} defaultValue={defaultValues.contacts.github}/></div>
                <div><b>mainLink</b>: <input type="url" {...register(`contacts.mainLink`)} defaultValue={defaultValues.contacts.mainLink}/></div>
                {/*<div>*/}
                {/*    {Object.keys(profile.contacts).map(key => <div key={key}><b>{key}</b>: <input type="url" {...register(`contacts.${key}`)} defaultValue={defaultValues.contacts[key]}/></div>)}*/}
                {/*</div>*/}
            </div>
            <input type="submit" value='save'/>
        </form>
    );
};
{/*type ContactType = {*/}
{/*    contactTitle: string*/}
{/*    defaultValues: any*/}
{/*}*/}

{/*const Contact = ({contactTitle, defaultValues}: ContactType) => {*/}
{/*    return <div><b>{contactTitle}</b>: <input type="url" {...register(`${contactTitle}`)} defaultValue={defaultValues.contacts[contactTitle]}/></div>*/}
{/*}*/}