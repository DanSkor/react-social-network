import React from "react";
import style from "./Paginator.module.css";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
        return (
            <div>
                <ul className={style.pagination}>
                    {pages.map(page => {
                        return <li><button className={props.currentPage === page ? style.buttonCurrent : style.button} onClick={() => props.onPageChanged(page)} type="button">{page}</button></li>
                    })}
                </ul>
            </div>
        )
    }

export default Paginator;
