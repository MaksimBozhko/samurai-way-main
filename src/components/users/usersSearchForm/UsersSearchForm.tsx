import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import { getUsersThunkCreator, UsersType} from '../../../redux/users-reducer';
import {Field, FormikProvider, useFormik} from 'formik';
import s from './usersSearchForm.module.css'

type FormType = {
    term: string
    friend: 'null' | 'true' | 'false'
}

export const UsersSearchForm = () => {
    const dispatch = useAppDispatch()
    const {pageSize} = useAppSelector((state): UsersType => state.users)
    const formik = useFormik({
        initialValues: {
            term: '',
            friend: 'null'
        },
        validate: () => {
        },
        onSubmit: (values: FormType) => {
            const filter = {
                term: values.term,
                friend: values.friend === 'null' ? null : values.friend === 'true'
            }
            dispatch(getUsersThunkCreator(1, pageSize, filter.term, filter.friend))
        },
    });
    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>

                <input className={s['type-1']}
                       placeholder='find your friends)'
                    id="term"
                    name="term"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.term}
                />
                <Field className={s.select} name="friend" as="select">
                    <option className={s.option} value="all">all</option>
                    <option className={s.option} value="true">follow</option>
                    <option className={s.option} value="false">unfollow</option>
                </Field>

                <button className={s.button} type="submit">Submit</button>
            </form>
        </FormikProvider>
    );
}