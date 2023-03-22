import React, {useState} from 'react';
import s from "./pagination.module.css";
import {getUsersThunkCreator, UsersType} from '../../../redux/users-reducer';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import leftArrow from '../../../assets/images/left-arrow.png'
import rightArrow from '../../../assets/images/right-arrow.png'

type PaginationType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    portionSize?: number
}

const Pagination = ({totalUserCount, pageSize, currentPage, portionSize = 10}: PaginationType) => {
    const dispatch = useAppDispatch()
    const {filter} = useAppSelector((state): UsersType => state.users)
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
        dispatch(getUsersThunkCreator(pageNumber, pageSize, filter.term, filter.friend))
    }
    return <div className={s.pagination}>
        {portionNumber > 1 &&
        <button className={`${s.btn} ${s.page}`} onClick={() => setPortionNumber(portionNumber - 1)}>
            <img className={s.arrow} src={leftArrow}/>
        </button> }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => <span key={p} onClick={() => onClickSelectedPage(p)}
                                   className={currentPage == p ? `${s.selected} ${s.page}` : s.page}>{p}</span>)}
        {portionCount > portionNumber &&
            <button className={`${s.btn} ${s.page}`} onClick={() => setPortionNumber(portionNumber + 1)}>
                <img className={s.arrow} src={rightArrow}/>
            </button> }
    </div>
};

export default Pagination;