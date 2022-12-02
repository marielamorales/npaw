import { useEffect, useState } from "react";
import { dataFetching } from "../../utils/dataFetching";
import styles from "../Exercise1/Exercises.module.css";

const Exercise5 = () => {
  const [apiData, setApiData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    dataFetching("term", "podcast").then((data) => {
      // const tenBestPodcastAndMovies = data.results.sort
      setApiData(data.results);
    });
  }, []);

  // console.log("datapodcast", apiData);

  return (
    <article className={styles.mainContainer}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          if (!showDetails ? setShowDetails(true) : setShowDetails(false));
        }}
      >
        <h1 className={styles.mainHeader}>Exercise #5</h1>

        <p className={styles.btnDetail}>
          "10 podcasts and movies with the best rating index
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

export default Exercise5;
