import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css'

function Pagination({currentPage, onChangePage}) {
  return (
    <ReactPaginate
    className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
<<<<<<< HEAD
        pageCount={2}  
        forcePage={currentPage -1}      
=======
        pageCount={2}        
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination