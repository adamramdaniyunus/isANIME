import React from "react";

export default function Pagination({ handleChangeNumber, totalPages, currentPage }: {handleChangeNumber:(e:number) => void , totalPages: number, currentPage: number}) {

    let pageLimit = 4
    let startPage = Math.max(1, currentPage-1);
    let endPage = Math.min(totalPages, startPage + pageLimit)
    if (endPage - startPage + 1 < pageLimit) {
        startPage = Math.max(1, endPage - pageLimit + 1);
    }
    const pages = [...Array(endPage - startPage + 1)].map((_, index) => startPage + index);
    return (
        <nav className={"p-4"}>
            <ul className="flex gap-2">
                {startPage !== 1 &&
                    <button className="p-2 cursor-pointer bg-appRed text-white"
                            onClick={() => handleChangeNumber(startPage - 1)}>Prev</button>
                }
                {pages.map(n => (
                    <button key={n} onClick={() => handleChangeNumber(n)}
                            className={`disabled:cursor-not-allowed p-2 px-4 cursor-pointer ${currentPage === n ? " bg-appRed text-white" : 'bg-white text-black'}`}
                            disabled={n === currentPage}>
                        {n}
                    </button>
                ))}
                {endPage < totalPages &&
                    <button className="p-2 cursor-pointer bg-appRed text-white"
                            onClick={() => handleChangeNumber(endPage + 1)}>Next</button>
                }

            </ul>
        </nav>
    )
}