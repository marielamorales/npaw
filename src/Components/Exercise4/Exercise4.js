import { useEffect, useState } from "react";
import { dataFetchingLookUp } from "../../utils/dataFetching";
import styles from "../Exercise1/Exercises.module.css";

const Exercise4 = () => {
  const [apiData, setApiData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const idAdele = "262836961";
  const limit = "200";
  const year = 2021;

  useEffect(() => {
    dataFetchingLookUp(idAdele, limit).then((data) => {
      data.results.map((elemento) => {
        const dataToRefactor = new Date(elemento.releaseDate);
        elemento.releaseDate = dataToRefactor.toLocaleDateString().slice(6, 10);
      });
      setApiData(data.results);
    });
  }, []);
  return (
    <article className={styles.mainContainer}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          if (!showDetails ? setShowDetails(true) : setShowDetails(false));
          console.log(apiData);
        }}
      >
        <h1 className={styles.mainHeader}>Exercise #4</h1>
        <p className={styles.btnDetail}>"Adele's 2021 Songs"</p>
      </button>
      <div className={styles.wrapper}>
        {showDetails &&
          apiData.map((element) => (
            <>
              {element.releaseDate === `${year}` && (
                <>
                  {/* we make a condition stating that our elements will only show if the releaseDate that matches 2021*/}
                  <div
                    key={element.trackId}
                    className={styles.mainSubContainer}
                  >
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
              )}
            </>
          ))}
      </div>
    </article>
  );
};
export default Exercise4;
