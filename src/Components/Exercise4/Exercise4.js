import { useEffect, useState } from "react";
import { dataFetchingLookUp } from "../../utils/dataFetching";
import styles from "../Exercise1/Exercises.module.css";
import { filteredArray, sortAndReverse } from "../../utils/sortAndReverse";

const Exercise4 = () => {
  const [apiData, setApiData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  //   const [year, setYear] = useState();
  const idAdele = "262836961";
  const limit = "200";

  useEffect(() => {
    dataFetchingLookUp(idAdele, limit).then((data) => {
      const recentSongs = sortAndReverse(data.results);
      //   setYear(recentSongs);

      recentSongs.map((elemento) => {
        const dataToRefactor = new Date(elemento.releaseDate);
        elemento.releaseDate = dataToRefactor.toLocaleDateString().slice(6, 10);
        let filteredDate = [];
        filteredDate.push(elemento.releaseDate);
        let filteredByYear = [];
        filteredByYear.push(filteredDate.slice(filteredDate.length - 12));

        console.log("year", filteredByYear);

        return filteredByYear;
      });

      setApiData(recentSongs);
    });
  }, []);

  return (
    <article className={styles.mainContainer}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          if (!showDetails ? setShowDetails(true) : setShowDetails(false));
          console.log("date", apiData);
        }}
      >
        <h1 className={styles.mainHeader}>Exercise #4</h1>

        <p className={styles.btnDetail}>"Adele's 2021 Songs"</p>
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

export default Exercise4;
