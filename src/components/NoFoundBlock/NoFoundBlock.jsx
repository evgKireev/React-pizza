import styles from './NoFoundBlock.module.scss';
function NoFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p>К сожалению данная страница отсутсвует в нашем Интернет-магазине.</p>
    </div>
  );
}

export default NoFoundBlock;
