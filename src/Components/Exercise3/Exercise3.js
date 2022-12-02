import { useEffect, useState } from "react";
import { dataFetchingMediaType } from "../../utils/dataFetching";
import styles from "../Exercise1/Exercises.module.css";

const Exercise3 = () => {
  const [apiData, setApiData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    dataFetchingMediaType(
      "term",
      "Peace",
      "entity",
      "attribute",
      "titleTerm"
    ).then((data) => {
      let peaceArray = [];
      data.results.map((item) => {
        if (item.trackName.includes("Peace" || "peace" || "PEACE")) {
          peaceArray.push(item);
        }
        return item;
      });
      peaceArray.slice(0, 30);

      setApiData(peaceArray);
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
        <h1 className={styles.mainHeader}>Exercise #3</h1>

        <p className={styles.btnDetail}>
          "Search 30 media types with the word "Peace" in the title
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
                  <span className={styles.details}>Media Type: </span>
                  {element.wrapperType}
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

export default Exercise3;
