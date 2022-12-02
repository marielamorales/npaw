import { useEffect, useState } from "react";
import { dataFetchingLookUp } from "../../utils/dataFetching";
import { sortAndReverse } from "../../utils/sortAndReverse";
import styles from "../Exercise1/Exercises.module.css";

const Exercise2 = () => {
  const [apiData, setApiData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const idCalvin = "201955086";
  const limit = "200";

  useEffect(() => {
    dataFetchingLookUp(idCalvin, limit).then((data) => {
      const arrayLastTenSongs = sortAndReverse(data.results.slice(0, 10));

      arrayLastTenSongs.map((elemento) => {
        const dataToRefactor = new Date(elemento.releaseDate);
        elemento.releaseDate = dataToRefactor.toLocaleDateString();
        return elemento.releaseDate;
      });

      setApiData(arrayLastTenSongs);
    });
  }, []);

  return (
    <article className={styles.mainContainer}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          if (!showDetails ? setShowDetails(true) : setShowDetails(false));
        }}
      >
        <h1 className={styles.mainHeader}>Exercise #2</h1>

        <p className={styles.btnDetail}>
          "The last 10 released songs by one known artist"
        </p>
      </button>
      <div className={styles.wrapper}>
        {showDetails &&
          apiData.map((element) => (
            <>
              <div key={element.trackId} className={styles.mainSubContainer}>
                <h2 className={styles.mainHeaderSub}>
                  <span className={styles.mainHeaderSub}>Artist: </span>
                  {element.artistName}
                </h2>
                <p className={styles.details}>
                  <span className={styles.details}>Title: </span>
                  {element.trackName}
                </p>
                <p className={styles.details}>
                  <span className={styles.details}>Date: </span>
                  {element.releaseDate}
                </p>
              </div>
              <span>
                <hr className={styles.hr} />
              </span>
            </>
          ))}
      </div>
    </article>
  );
};

export default Exercise2;
