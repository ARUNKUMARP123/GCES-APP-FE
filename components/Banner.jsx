import { Grid } from "@mui/material";
import styles from "./banner.module.css";

export const Banner = () => {
  return (
    <div>
      <Grid container className={styles.banner_div}></Grid>
    </div>
  );
};
