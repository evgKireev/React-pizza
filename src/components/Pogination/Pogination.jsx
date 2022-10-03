import ReactPaginate from 'react-paginate';
import style from './Pogination.module.scss';

function Pogination({onClickSelect, poginationSelect}) {
  // const handlePageClick = (event) => {
  //     const newOffset = (event.selected * itemsPerPage) % items.length;
  //     console.log(
  //       `User requested page number ${event.selected}, which is offset ${newOffset}`
  //     );
  //     setItemOffset(newOffset);
  //   };
  return (
    <>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onClickSelect(e.selected)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Pogination;
