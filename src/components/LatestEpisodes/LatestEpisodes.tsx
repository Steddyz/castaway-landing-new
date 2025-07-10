import Button from "../ui/Button/Button";

import styles from "./LatestEpisodes.module.css";

import { episodesData } from "../../const/const";
import EpisodeItem from "../ui/EpisodeItem/EpisodeItem";

const LatestEpisodes = () => {
  return (
    <section className={styles.latestSection} id="episodes">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Latest episodes</h1>
        <div className={styles.buttonWrapper}>
          <Button value={"View all episodes"} />
        </div>
      </div>
      <div>
        {episodesData.map((episode) => (
          <EpisodeItem key={episode.id} {...episode} />
        ))}
      </div>
    </section>
  );
};

export default LatestEpisodes;
