import { ImageGallery } from "../layout/imageGallery";
import { images } from "../data/artData";

export const Art = () => {
  return (
    <main>
      <section>
        <div className="section-header">
          <h2 className="text-pink header-lg">ART</h2>
        </div>
      </section>
      <article>
        <p>
          One of my hobbies outside of work is art! I remember doodling in the
          pages of my notebooks at school all the way back in 4th grade, and
          I've continued doodling my way through life. In the past couple of
          years, I've been able to pursue a variety of different projects: I
          designed a deck of koi playing cards in 2022, tried making a poster on
          Adobe Illustrator every day for a month in 2024, and did my first
          craft market on Halloween of 2025. This is a small collection of some
          of the art I've been able to create, but you can find more information
          about my art on{" "}
          <a
            href="https://www.butterandboba.com/"
            target="_blank"
            className="text-link"
          >
            butterandboba.com
          </a>{" "}
          or on instagram{" "}
          <a
            href="https://www.instagram.com/butter.and.boba/"
            className="text-link"
            target="_blank"
          >
            @butter.and.boba
          </a>
          !
        </p>

        <ImageGallery images={images} />
      </article>
    </main>
  );
};
