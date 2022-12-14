import { useEffect, useState } from "react";
import { dataFetchingLookUp } from "../../utils/dataFetching";
import { sortAndReverse } from "../../utils/sortAndReverse";
import styles from "./Exercises.module.css";

const Exercise1 = () => {
  //we declare our state variables and constants so we can stores the data
  const [apiData, setApiData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const idGalantis = "543322169";
  const limit = "200";

  //in the useEffect we make the call to our fetch function imported from our file @ utils.
  //Once we receive the data call upon the results our sortAndReverse function @ utils
  //so we can sort by date and then reverse the order so we can slice our array to retrieve the 10 most
  //recent songs.
  //Finally we set out variable to show the requested results

  useEffect(() => {
    dataFetchingLookUp(idGalantis, limit).then((data) => {
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
        <h1 className={styles.mainHeader}>Exercise #1</h1>

        <p className={styles.btnDetail}>
          "The last 10 released songs by Galantis"
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

export default Exercise1;
