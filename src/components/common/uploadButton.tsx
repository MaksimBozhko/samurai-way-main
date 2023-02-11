import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {ChangeEventHandler, ReactNode} from "react";

type Color = "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"

type UploadButtonProps = {
    buttonImg: ReactNode
    color?: Color
    onChange: ChangeEventHandler<HTMLInputElement>
    classname?: string
};
export const UploadButton = (props: UploadButtonProps) => {
    return (
        <IconButton className={props.classname || ''} color={props.color}  component="label">
            <input hidden accept="image/*" type="file" onChange={props.onChange}/>
            {props.buttonImg}
        </IconButton>
    );
};