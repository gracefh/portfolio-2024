import { Link } from "react-router-dom";
import { PageHeader } from "../../layout/pageHeader";

export const BallDefenders = () => {
  return (
    <main>
      <PageHeader title="Ball Defenders" />
      <article>
        <div>
          <p>
            I'm the kind of person who enjoys playing airplane games on flights
            in the few moments when I'm not asleep. So, when I was on an
            international United flight in the summer of 2024, I quickly went to
            the games tab and found Ball Defenders, a Breakout style game. It
            was an addicting game during that flight, partially due to the
            interesting behavior it had. By aiming the ball at certain parts of
            the bricks, there would be a "glitch" effect, where all of the
            bricks would be eliminated by one ball. If you aimed the ball at a
            corner of the screen, or if the ball got to a weird spot on the
            screen, the game would sometimes freeze and crash. The game also
            didn't guarantee that we would be able to get more balls every
            round, making the playthroughs extremely susceptible to RNG.
          </p>
          <p>
            As I got off the flight, I had decided that I could probably
            implement something similar myself, which spawned this project idea.
            A deployment of the project lives here:{" "}
            <a
              href="https://ball-defenders.vercel.app/"
              target="_blank"
              className="text-link"
            >
              https://ball-defenders.vercel.app/
            </a>
            .
          </p>
        </div>
        <div>
          <h3>Implementation + Learnings</h3>
          <p>
            I decided to use Svelte to code the project for more practice with
            frontend frameworks and because I had previously made interactive
            data visualizations with it (see{" "}
            <Link to="/projects/migration-motivations" className="text-link">
              Central American Migration Interactive Data Visualization
            </Link>
            ). I used svgs and svg animations to code the entire game logic
            itself, though the overall game controls were put in other
            components. After initially throwing out the idea of doing this, it
            was cool to see it actually come together, though there were a
            couple of pitfalls that I ran into. 
          </p>
          <p>
            I think I was and am still pretty out of practice with using Svelte,
            and the overall code here did not end up being very clean. The game
            logic largely lives in one file, and there aren't clear distinctions
            between the different variables that are used in different areas of
            the game. Now that it's been a while since I've written the majority
            of the code, it has definitely been more difficult than it should be
            to go back and fix the bugs I found.
          </p>
          <p>
            Additionally, it turns out that figuring out ball and rectangle
            collision physics is actually pretty difficult. I had tried a couple
            of different approaches, and the collision detection largely works,
            but there are a couple of cases where the ball doesn't collide off
            in the intuitive direction. I think part of the issue might also be
            that animation frames aren't always requested in a consistent
            timeframe, so there were cases where the current location wasn't the
            most accurate. I gained newfound appreciation for the United
            implementation of the game, since I also didn't manage to fully
            figure it out.
          </p>
          <p>
            Nevertheless, the game is working, and you can try it out for yourself at the link above!
          </p>
        </div>
      </article>
    </main>
  );
};
