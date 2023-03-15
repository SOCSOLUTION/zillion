import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img6 from "../../../Image/UltimateUtilityToken.png";
import "./index.css";

const WatchOur = () => {
  return (
    <div className="bg_three" style={{ backgroundColor: "rgb(14, 14, 22)" }}>
      {/* <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        <b>
          Watch Our <br></br>Zillion Anchor Xo Trailer
        </b>
      </h1>
      <Container>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid
            item
            lg={5.3}
            md={5.6}
            sm={6}
            xs={12}
            style={{ marginTop: "40px" }}
          >
            <iframe
              style={{ width: "100%" }}
              height="315"
              src="https://www.youtube.com/embed/FZZcZ7tORnc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
      </Container> */}
      <Container>
        <Grid container style={{ paddingTop: "60px" }}>
          <Grid item lg={5} md={5} sm={6} xs={12}>
            <h3
              style={{
                color: "white",
                fontFamily: "Times New Roman, Times, serif",
              }}
            >
              ZAX: The Ultimate Utility Token
            </h3>
            <br></br>
            <p style={{ color: "white" }}>
            ZAX is designed to provide fast and secure transactions. 
            </p>
      
            <p style={{ color: "white",textAlign:'justify'}}>
            As a utility token, it rewards its users with reflections and liquidity pool benefits as the transaction volume increases. The liquidity pool ensures that a percentage of every transaction is added to the pool, while reflections distribute a portion of that percentage among all ZAX token holders. This creates a mutually beneficial ecosystem for everyone involved, making ZAX an ideal choice for anyone looking for a reliable token.<br></br>One of the significant benefits of ZAX is that it helps in preventing the drops in exchange and makes every transaction speedy and more efficient. ZAX tokens can be used to build a relevant ecosystem even when the products and services are not decentralized in nature. Moreover, ZAX tokens give some loyalty points in online stores, which can qualify you for bonuses, upgrades, discounts, and much more easily!
            </p>

            <Button
              style={{
                backgroundColor: "rgb(0,153,255)",
                color: "white",
                marginBottom: "50px",
              }}
            >
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x9A2478C4036548864d96a97Fbf93f6a3341fedac" style={{textDecoration:'none',color:'white'}}> Buy Token</a>
            </Button>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <img src={img6} alt=" The Ultimate Utility Token" className="about_zax_img" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WatchOur;
