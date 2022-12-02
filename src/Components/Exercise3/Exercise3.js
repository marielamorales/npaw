import { useEffect, useState } from "react";
import { dataFetchingMediaType } from "../../utils/dataFetching";
import styles from "../Exercise1/Exercises.module.css";

//in the useEffect we make the call to our fetch function imported from our file @ utils.
//Once we receive the data we set up our state variable.

const Exercise3 = () => {
  const [apiData, setApiData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const word = "Peace";
  useEffect(() => {
    dataFetchingMediaType("term", "Peace", "limit", "30").then((data) => {
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
          console.log("data", apiData);
        }}
      >
        <h1 className={styles.mainHeader}>Exercise #3</h1>

        <p className={styles.btnDetail}>
          "Search 30 media types with the word "Peace" in the title
        </p>
      </button>
      <div className={styles.wrapper}>
        {showDetails &&
          apiData.map((element) => (
            <>
              {" "}
              {/* we make a condition stating that our elements will only show if the trackName have the "Peace word"*/}
              {element.trackName === `${word}` && (
                <>
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
                      <span className={styles.details}>Media Type: </span>
                      {element.wrapperType}
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

export default Exercise3;
