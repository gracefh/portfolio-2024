import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

export type ImageGalleryProps = {
  images: string[];
};
export const ImageGallery = (props: ImageGalleryProps) => {
  const { images } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const numColumns = useMemo(() => {
    return Math.round(windowWidth / 600);
  }, [windowWidth]);

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, [setWindowWidth]);

  window.addEventListener("resize", handleWindowResize);

  const imageColumns: string[][] = useMemo(() => {
    const columns: string[][] = [];
    for (let _ = 0; _ < numColumns; _++) {
      columns.push([]);
    }

    images.reduce((prev, next, index) => {
      prev[index % numColumns].push(next);
      return prev;
    }, columns);
    return columns;
  }, [images, numColumns]);

  return (
    <div className="image-gallery-wrapper">
      {imageColumns.map((imageColumn, col) => (
        <div className="image-gallery-column">
          {imageColumn.map((image, ind) => (
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              layout
              className="image-gallery-item"
              key={`img-${col}-${ind}`}
              src={image}
              loading="lazy"
            ></motion.img>
          ))}
        </div>
      ))}
    </div>
  );
};
