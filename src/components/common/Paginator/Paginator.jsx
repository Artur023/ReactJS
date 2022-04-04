import React, {useState} from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let portionSize = 10;
    let portionCount = pagesCount / portionSize;//18
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let [portionNumber, setPortionNumber] = useState(1);
    let firstNumber = (portionNumber - 1) * portionSize + 1;
    let endNumber = (portionNumber - 1) * portionSize + portionSize;

    return <div>
        {portionNumber >= 1 && <span>
            <button className={s.button} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>
        </span>}
        {pages
            .filter(p => p >= firstNumber && p <= endNumber)
            .map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.noSelectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionNumber < portionCount && <span>
            <button className={s.button} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }
            }>Next</button>
        </span>}
    </div>
}

export default Paginator;