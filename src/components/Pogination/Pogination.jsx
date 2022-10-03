import ReactPaginate from 'react-paginate';
import style from './Pogination.module.scss';

function Pogination({ onClickSelect }) {
  
  return (
    <>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onClickSelect(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Pogination;
