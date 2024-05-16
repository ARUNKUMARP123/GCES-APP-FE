import { Grid, Typography } from "@mui/material";

export const BannerHeader = () => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-around"}
      padding={3}
    >
      <Grid item style={{ height: "125px", width: "125px" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src="	https://gces.edu.in/sites/gces.edu.in/themes/custom/gavias_daudo/gces_logo.png"
          alt="logo"
        />
      </Grid>
      <Grid item textAlign={"center"}>
        <Typography style={{ fontWeight: "bold" }} variant="h5">
          GOVERNMENT COLLEGE OF ENGINEERING SRIRANGAM
        </Typography>
        <Typography style={{ fontWeight: "bold" }} color={"blue"} variant="h5">
          {" "}
          அரசினர் பொறியியல் கல்லூரி ஸ்ரீரங்கம்
        </Typography>
        <Typography style={{ fontWeight: "bold" }}>
          {" "}
          Sethurappatti, Tiruchirappalli - 620 012
        </Typography>
        <Typography style={{ fontWeight: "bold" }}>
          (Approved by AICTE and Affiliated to Anna University Chennai)
        </Typography>
      </Grid>
      <Grid item style={{ height: "120px", width: "120px" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src="	https://gces.edu.in/sites/gces.edu.in/themes/custom/gavias_daudo/tngov_logo.png"
          alt="logo"
        />
      </Grid>
    </Grid>
  );
};
