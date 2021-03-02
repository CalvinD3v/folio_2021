import React from "react";
import styles from "./ImageComp.module.sass";

function ImageComp(props) {
  const { url } = props.project_image
  return (
    <div className={styles.Root}>
      <img
        src={url}
        src={url.includes("upload")
          ? `http://localhost:1337${url}`
          : url
        }

        className={styles.imgSrc} />
    </div>
  );
}

export default ImageComp;
