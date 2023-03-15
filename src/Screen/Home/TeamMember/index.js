import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import teamimg1 from "../../../Image/Mr ujjawal.jpg";
import teamimg2 from "../../../Image/Mr.Mintu Yadav.jpg";
import teamimg3 from "../../../Image/Mr.Anilyadavceo.jpg";
import teamimg4 from "../../../Image/Mr.Parveen Rai.jpeg";
import "./index.css";

const Team = () => {
  return (
    <div
      className="bg_imgsecond"
      style={{ backgroundColor: "rgb(14, 14, 22)" }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          paddingBottom: "10px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        TEAM MEMBERS
      </h1>
      <Container>
        <Grid container className="team_main" style={{ paddingBottom: "30px" }}>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={12} className="team_img">
            <img
              src={teamimg3}
              alt="Mr.Anil Yadav
CEO"
            />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Anil Yadav
            </h2>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>CEO</b>
            </h3>
          </Grid>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={12} className="team_img">
            <img
              src={teamimg2}
              alt="Mr.Mintu Yadav
COO"
            />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Mintu Yadav
            </h2>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>COO</b>
            </h3>
          </Grid>

          <Grid item lg={2.5} md={3.8} sm={4.8} xs={12} className="team_img">
            <img src={teamimg4} alt="Mr.Ujjawal
CMO
" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Parveen Rai
            </h2>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>Director</b>
            </h3>
          </Grid>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={12} className="team_img">
            <img src={teamimg1} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>Mr.Ujjawal</h2>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>CMO</b>
            </h3>
          </Grid>
        </Grid>
      </Container>
      <div style={{ borderBottom: "1px solid white" }}></div>
    </div>
  );
};

export default Team;
