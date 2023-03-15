import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import logo from "../../Image/zillion AAkar xo.png";
import facebook from "../../Image/icon/facebook.png";
import letter from "../../Image/icon/letter.png";
import linkedin from "../../Image/icon/linkedin.png";
import twitter from "../../Image/icon/twitter.png";
import insta from "../../Image/icon/insta.png";
import "./index.css";

const Footer = () => {
  return (
    <div style={{backgroundColor:'white'}}>
      <Container>
        <Grid container style={{ justifyContent: "center", marginTop: "50px" }}>
          <Grid item lg={5} md={5} sm={6} xs={12} className="footer_logo">
            <img src={logo} alt="zillion AAkar xo" />
            <p style={{ paddingTop: "20px" }}>
            ZAX is a utility token that breaks through the boundaries between centralized and decentralized platforms. Join us now and become part of the finance revolution.
            </p>
            <h4 style={{ textAlign: "center", fontSize: "20px" }}>
              For Any Query Contact{" "}
            </h4>
            <h4 style={{ textAlign: "center", color: "black" }}>
              Zillionakarxo@gmail.com{" "}
            </h4>
            <Grid
              container
              style={{
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Grid
                item
                lg={1.3}
                md={1.5}
                sm={1.5}
                xs={1}
                className="header_icon"
              >
                <a href="https://www.facebook.com/people/Zillion-Aakar-XO/100083067863940/">
                <img src={facebook} alt="" />
                </a>
              </Grid>

              <Grid
                item
                lg={1.3}
                md={1.5}
                sm={1.5}
                xs={1}
                className="header_icon"
              >
                <a href="https://coinmarketcap.com/currencies/zillion-aakar-xo/">
                <img src={letter} alt="" />
                </a>
              </Grid>
{/* 
              <Grid
                item
                lg={1.3}
                md={1.5}
                sm={1.5}
                xs={1}
                className="header_icon"
              >
                <img src={linkedin} alt="" />
              </Grid> */}

              <Grid
                item
                lg={1.3}
                md={1.5}
                sm={1.5}
                xs={1}
                className="header_icon"
              >
                <a href="https://twitter.com/ZillionXO">
                <img src={twitter} alt="" />
                </a>
              </Grid>

              {/* <Grid
                item
                lg={1.3}
                md={1.5}
                sm={1.5}
                xs={1.2}
                className="header_icon"
              >
                <img src={insta} alt="" />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <p style={{ color: "black" }}>@2022, Zillion Aakar Xo-Zax</p>
          </Grid>
          <Grid item lg={5} md={5} sm={3}>
            {/* <h1>TEST</h1> */}
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={12} id='footer-resp'>
            <ul style={{color:'black'}}>
              <li>Term & Conditions</li>
              <li>Privacy & Policy</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
