import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img1 from "../../Image/img1.png";
import img2 from "../../Image/img2.png";
import img3 from "../../Image/img3.png";
import img4 from "../../Image/img4.png";
import img5 from "../../Image/img6.png";
import img8 from "../../Image/img8.png";
import "./index.css";
const ZaxPrice = () => {
  return (
    <div >
      <div className="bg_two" id='zax_price'>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: "100px",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Current Zax Price
        </h1>
        <Container >
          <Grid container className="zax_price_text">
            <Grid item lg={0.8} md={0.8} sm={0.8} xs={1.5}>
              <img src={img2} className="zax_price_img" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>$0.3342</b>
              </p>
            </Grid>

            {/* <Grid item lg={0.8} md={0.8} sm={0.8} xs={1.5}>
              <img src={img4} className="zax_price_img" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>0</b>
              </p>
            </Grid> */}

            <Grid item lg={0.8} md={0.8} sm={0.8} xs={1.5}>
              <img src={img3} className="zax_price_img" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>273.88</b>
              </p>
            </Grid>

            {/* <Grid item lg={0.8} md={0.8} sm={0.8} xs={1.5}>
              <img src={img1} className="zax_price_img" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>0</b>
              </p>
            </Grid> */}
          </Grid>

          <Grid container>
            <Grid
              item
              lg={5}
              md={6}
              sm={6}
              xs={11.7}
              className="zillion_aakar_text"
            >
              <h1>What is <strong style={{fontWeight:'200',color:'rgb(1,92,173)'}}>ZILLION AAKAR XO </strong> (ZAX)?</h1>
              <p>
                ZAX is a revolutionary utility token built on the Binance Smart
                Chain that offers a seamless transaction experience to users.
                It's a token that encompasses the entire crypto universe, and
                it's available on both DEX and CEX platforms.
              </p>
              <p>
                But ZAX is not just any token. It's been curated to solve
                multiple purposes in one go, with the primary function being
                paying for different kinds of transactions flawlessly. The token
                is not restricted to any particular domain, so it can be
                utilized for all sorts of online payments.
              </p>
              <br></br>
              <Button
                style={{
                  backgroundColor: "rgb(0,153,255)",
                  color: "white",
                  marginBottom: "50px",
                }}
              >
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x9A2478C4036548864d96a97Fbf93f6a3341fedac"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Buy Token
                </a>
              </Button>
            </Grid>
            <Grid item lg={1} md={1} sm={0.5}></Grid>
            <Grid
              item
              lg={5}
              md={5}
              sm={5.5}
              xs={11}
              className="zerrion_aakar_img"
            >
              <img src={img5} alt="wallet" className="vert-move" />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* How Does it work */}

      <div
        className="how_does_bg"
        style={{ backgroundColor: "rgb(14, 14, 22)" }}
        id="workDoes"
      >
        <Container>
          <Grid container>
            <Grid item lg={5} md={6} sm={6.5} xs={12} className="how_does_text">
              <h1>How ZAX Works:</h1>
              <p>
                ZAX operates as a digital token that grants users access to
                products and services within the blockchain network. Its
                transparent and secure functionality allows businesses to gain
                interest from investors, while providing discounts and the
                ability to incorporate various payment methods.
              </p>

              <p>
                ZAX's utility token status means that as transaction volume
                increases, holders benefit from reflections and the addition of
                value to the liquidity pool. By holding ZAX, users gain access
                to the platform and its potential for growth in high demand
                markets.<br></br>The ZAX token's use case is not limited to a
                specific industry, making it an ideal choice for businesses and
                investors looking to enter the blockchain market.
              </p>
              <br></br>
              <Button
                style={{
                  backgroundColor: "rgb(0,153,255)",
                  color: "white",
                  marginBottom: "50px",
                }}
              >
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x9A2478C4036548864d96a97Fbf93f6a3341fedac"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Buy Token
                </a>
              </Button>
            </Grid>
            <Grid item lg={1.5} md={1} sm={0.5}></Grid>
            <Grid item lg={5} md={5} sm={5} xs={12} className="how_does_img">
              <img src={img8} alt="" className="vert-move" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ZaxPrice;
