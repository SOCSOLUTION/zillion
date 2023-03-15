import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img11 from "../../../Image/Rectangle 33.png";
import "./index.css";

const BenefitsZillion = () => {
  return (
    <div style={{ backgroundColor: "rgb(14, 14, 22)" }} id="benefits">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        Benefits Of ZAX
      </h1>
      <Container>
        <Grid container className="benefits_zillion">
          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
            id='benefits_text'
            >
              ZAX prevents drops in exchange & improves transaction efficiency.
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11}  alt='bilal'/>
            <p
                   id='benefits_text'
            >
              ZAX enables building relevant ecosystem even for non-decentralized
              products.
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
                id='benefits_text'
            >
              ZAX rewards loyalty points in online stores for bonuses, upgrades,
              and discounts.
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
                  id='benefits_text'
            >
              As ZAX popularity rises, its benefits become more profitable.
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
                  id='benefits_text'
            >
              ZAX is easily adopted and utilized in any sector as per the
              business requirement.
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
                   id='benefits_text'
            >
              ZAX is already being used in top industries such as automobile,
              food, and hospitality.
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img" style={{marginBottom:'40px'}}>
            <img src={img11} />
            <p
                  id='benefits_text'
            >
              ZAX's utility token design increases liquidity provides
              reflections to all holders.
            </p>
          </Grid>
        </Grid>
      </Container>
      <div style={{ borderBottom: "1px solid white" }}></div>
    </div>
  );
};

export default BenefitsZillion;
