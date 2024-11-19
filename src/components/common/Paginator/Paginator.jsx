import React, { useState } from "react";
import style from "./Paginator.module.css";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightNumber = portionNumber * props.portionSize;
    
        return (
            <div>
                <ul className={style.pagination}>
                    {portionNumber > 1 && <button className={style.pagiButton} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}

                    {pages
                        .filter(page => {
                            return (page >= leftNumber && page <= rightNumber);
                        })
                        .map(page => {
                            return <li><button className={props.currentPage === page ? style.buttonCurrent : style.button} onClick={() => props.onPageChanged(page)} type="button" key={page}>{page}</button></li>
                        })}

                    {portionCount > portionNumber && <button className={style.pagiButton} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
                </ul>
            </div>
        )
    }

export default Paginator;
