import ReactPaginate from 'react-paginate';
import style from './Pogination.module.scss';
import { useDispatch } from 'react-redux';
import { setPoginationSelect } from '../../redux/poginationSlice';

function Pogination() {
  const dispatch = useDispatch();

  return (
    <>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => {
          dispatch(setPoginationSelect(e.selected + 1));
        }}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Pogination;
