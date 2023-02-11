import React, {useState} from 'react';
import s from "../../users/users.module.css";
import {getUsersThunkCreator} from "../../../redux/users-reducer";
import {useAppDispatch} from "../../../hooks/hooks";

type PaginationType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    portionSize?: number
}

const Pagination = ({totalUserCount, pageSize, currentPage, portionSize = 10}: PaginationType) => {
    const dispatch = useAppDispatch()
    const pageCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    const onClickSelectedPage = (pageNumber: number) => {
        dispatch(getUsersThunkCreator(pageNumber, pageSize))
    }
    return <>
        {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}> left </button> }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => <span key={p} onClick={() => onClickSelectedPage(p)}
                                   className={currentPage == p ? s.selected : ''}>{p}</span>)}
        {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}> right </button> }
    </>
};

export default Pagination;