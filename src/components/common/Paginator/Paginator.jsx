import React from "react";
import paginatorCss from "./Paginator.module.css";
import { useState, useEffect } from "react";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let quantityOfPages = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage/portionSize));
    let leftPortionNumber = (portionNumber-1) * portionSize + 1;
    let rightPortionNumber = (portionNumber * portionSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(page => {
                return <button key={page} 
                        onClick={(e) => { onPageChanged(page) }} 
                        className={currentPage === page ? paginatorCss.selectedPage : null}>
                                {page}
                        </button>
                })
            }
            {quantityOfPages > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}

export default Paginator;