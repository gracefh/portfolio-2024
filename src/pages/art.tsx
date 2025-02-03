import { ImageGallery } from "../layout/imageGallery";
import {images} from "../data/artData"

export const Art = () => {
  return (
    <main>
        <section>
        <div className="section-header">
          <h2 className="text-pink header-lg">ART</h2>
          <div className="subtitle">digital arts, crafts, and other creative pursuits</div>
        </div>
        <ImageGallery
            images={images}
            />
        </section>
    </main>
  );
};
