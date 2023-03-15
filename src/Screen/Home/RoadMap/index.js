import Grid from "@mui/material/Grid";
import StartIcon from "@mui/icons-material/Start";
import "./index.css";

const RoadMap = () => {
  return (
    <div id='road_map'>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          paddingBottom: "10px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        Road Map
      </h1>
      <Grid
        container
        style={{ justifyContent: "center", gap: "8px", marginTop: "40px" }}
      >
        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>June-July 2022</b>
          </p>
          <div className="road_map_dot">
            <li>Project Planning</li>
            <li>Zax Token Landing </li>
            <li>Pree Sale</li>
            <li>ZLaunch zillionxo.io </li>
            <li>Logistics services</li>
          </div>
        </Grid>
        <Grid item lg={0.8} md={0.6}>
          <StartIcon id="road_map_icon" />
        </Grid>
        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Aug-Nov - 2022</b>
          </p>
          <div className="road_map_dot">
            <li>Fundraising plan for Zax utility.</li>
            <li>Blockchain integration</li>
          </div>
        </Grid>
        <Grid item lg={0.8} md={0.6}>
          <StartIcon id="road_map_icon" />
        </Grid>
        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Dec - 2022</b>
          </p>
          <div className="road_map_dot">
            <li>IDOs for Zax utility token</li>
            <li>DEXs/CEXs listing </li>
          </div>
        </Grid>
        <Grid item lg={0.6} md={0.6}>
          {/* <StartIcon id="road_map_icon" /> */}
        </Grid>

        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Jan-Mar - 2023</b>
          </p>
          <div className="road_map_dot">
            <li>Launching dropping to earn</li>
            <li>Crypto payment integration</li>
            <li>Zax mobile wallet</li>
            <li>DeFi staking for Zax token</li>
          </div>
        </Grid>
        <Grid item lg={0.8} md={0.6}>
          <StartIcon id="road_map_icon" />
        </Grid>
        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Apr-Jun - 2023</b>
          </p>
          <div className="road_map_dot">
            <li>Raise fund for ZAX Governance</li>
            <li>Launch liveStreaming platform</li>
            <li>Onboard KOLs/Influencers</li>
            <li>Prepare FGT Governance</li>
          </div>
        </Grid>
        <Grid item lg={0.8} md={0.6}>
          <StartIcon id="road_map_icon" />
        </Grid>

        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Jul-Sep - 2023</b>
          </p>
          <div className="road_map_dot">
            <li>IEO for FGT Governance token</li>
            <li>DeFi Staking for FGT token</li>
          </div>
        </Grid>
        <Grid item lg={0.6} md={0.6}>
          {/* <StartIcon id="road_map_icon" /> */}
        </Grid>

        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Oct-Dec - 2023</b>
          </p>
          <div className="road_map_dot">
            <li>Buy now, pay later</li>
            <li>DeFi lending for Zax token </li>
            <li>Zax starter</li>
            <li>Launch full service in Canada & UK (G7 market)</li>
          </div>
        </Grid>
        <Grid item lg={0.8} md={0.6}>
          <StartIcon id="road_map_icon" />
        </Grid>

        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Jan-Mar - 2024</b>
          </p>
          <div className="road_map_dot">
            <li>Community group buying</li>
            <li>Daily play-to-earn games</li>
            <li>Shopping metaverse</li>
            <li>
              Launch full services in France & <br></br>Italy 67 Market
            </li>
          </div>
        </Grid>
        <Grid item lg={0.8} md={0.6}>
          <StartIcon id="road_map_icon" />
        </Grid>

        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Apr-Jun - 2024</b>
          </p>
          <div className="road_map_dot">
            <li>Develop Physical NFT marketplace</li>
            <li>E-commerce franchising</li>
            <li>
              Complete all main features <br></br> ready for market expansion
            </li>
          </div>
        </Grid>
        <Grid item lg={0.6} md={0.6}>
          {/* <StartIcon id="road_map_icon" /> */}
        </Grid>

        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Jul-Sep - 2024</b>
          </p>
          <div className="road_map_dot">
            <li>Market expansion to SEA</li>
            <li>Market expansion South Asia </li>
          </div>
        </Grid>
        <Grid item lg={0.8} md={0.6}>
          <StartIcon id="road_map_icon" />
        </Grid>
        <Grid item lg={2.5} md={3} sm={4} xs={11} className="road_map_child">
          <p className="raod_map_p">
            <b>Oct-Dec - 2024</b>
          </p>
          <div className="road_map_dot">
            <li>More market expansion</li>
            <li>More operational </li>
            <li>Complete all main features ready for market expansion</li>
          </div>
        </Grid>
        <Grid item lg={0.6} md={0.6}>
          {/* <StartIcon id="road_map_icon" /> */}
        </Grid>
        <Grid item lg={2.5} md={3} sm={4} xs={11} >
          {/* <p className="raod_map_p">
            <b>Oct-Dec - 2024</b>
          </p>
          <div className="road_map_dot">
            <li>More market expansion</li>
            <li>More operational </li>
            <li>Complete all main features ready for market expansion</li>
          </div> */}
        </Grid>
        <Grid item lg={0.8} md={0.6}>
          {/* <StartIcon id="road_map_icon" /> */}
        </Grid>

      </Grid>
    </div>
  );
};

export default RoadMap;
