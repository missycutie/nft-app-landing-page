import React from "react";
import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the Source Code
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the full source code on GitHub
          </p>
        </div>
        <a
          className={styles.btnPrimary}
          href='https://github.com/missycutie/nft-app'
          target="_blank"
          rel="noopener"
        >
          Source Code
        </a>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="Download" className={styles.fullImg} />
        </div>
      </div>
    </div>
  );
};

export default Download;
