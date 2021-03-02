import React from "react";
import styles from "./ImageComp.module.sass";

function ImageComp(props) {
  const { url } = props.project_image.formats.large
  return (
    <div className={styles.Root}>
      <img src={`http://localhost:1337${url}`}
        className={styles.imgSrc} />
    </div>
  );
}

export default ImageComp;
