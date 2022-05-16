import React, {FC, useState} from "react"

// @ts-ignore
import s from "./Paginator.module.css"

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number

    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: FC<PropsType> = ({
                                      totalItemsCount,
                                      pageSize,
                                      currentPage,
                                      onPageChanged,
                                      portionSize = 10
                                  }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let portionCount = pagesCount / portionSize;//18
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let [portionNumber, setPortionNumber] = useState(1);
    let firstNumber = (portionNumber - 1) * portionSize + 1;
    let endNumber = (portionNumber - 1) * portionSize + portionSize;

    return (<div>
        {portionNumber >= 1 && <span>
            <button className={s.button} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>
        </span>}
        {pages
            .filter(p => p >= firstNumber && p <= endNumber)
            .map(p => <span key={p.toString()} className={currentPage === p ? s.selectedPage : s.noSelectedPage}
                            onClick={() => {
                                onPageChanged(p)
                            }}>{p}</span>
            )}
        {portionNumber < portionCount && <span>
            <button className={s.button} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }
            }>Next</button>
        </span>}
    </div>)
}

export default Paginator;