import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import logo from "../../Image/logo.png";
import { useEffect } from "react";
import "./index.css";

const Stack = () => {
  function bilal() {
    document.getElementById("one_two").style.display = "block";
    document.getElementById("butn").style.display = "none";
    document.getElementById("butn2").style.display = "block";
    document.getElementById("one_two").style.backgroundColor =
      "rgba(13,16,26,0.6)";
    document.getElementById("one_two").style.borderBottomRightRadius = "12px";
    document.getElementById("one_two").style.borderBottomLeftRadius = "12px";
  }
  function bilal2() {
    document.getElementById("one_two").style.display = "none";
    document.getElementById("butn").style.display = "block";
    document.getElementById("butn2").style.display = "none";
  }

  const cardTwo = () => {
    document.getElementById("card_two_more").style.display = "block";
    document.getElementById("btn_more").style.display = "none";
    document.getElementById("btn2_more").style.display = "block";
    document.getElementById("card_two_more").style.backgroundColor =
      "rgba(13,16,26,0.6)";
    document.getElementById("card_two_more").style.borderBottomRightRadius =
      "12px";
    document.getElementById("card_two_more").style.borderBottomLeftRadius =
      "12px";
  };

  const cardTwo2 = () => {
    document.getElementById("card_two_more").style.display = "none";
    document.getElementById("btn_more").style.display = "block";
    document.getElementById("btn2_more").style.display = "none";
  };

  const cardThree = () => {
    document.getElementById("card_three").style.display = "block";
    document.getElementById("card_three_btn1").style.display = "none";
    document.getElementById("card_three_btn2").style.display = "block";
    document.getElementById("card_three").style.backgroundColor =
      "rgba(13,16,26,0.6)";
    document.getElementById("card_three").style.borderBottomRightRadius =
      "12px";
    document.getElementById("card_three").style.borderBottomLeftRadius = "12px";
  };

  const cardThree1 = () => {
    document.getElementById("card_three").style.display = "none";
    document.getElementById("card_three_btn1").style.display = "block";
    document.getElementById("card_three_btn2").style.display = "none";
  };

  const btnFour1 = () => {
    document.getElementById("card_four1").style.display = "block";
    document.getElementById("buttonFour").style.display = "none";
    document.getElementById("buttonFour2").style.display = "block";
    document.getElementById("card_four1").style.backgroundColor =
      "rgba(13,16,26,0.6)";
    document.getElementById("card_four1").style.borderBottomRightRadius =
      "12px";
    document.getElementById("card_four1").style.borderBottomLeftRadius = "12px";
  };
  const btnFour2 = () => {
    document.getElementById("card_four1").style.display = "none";
    document.getElementById("buttonFour").style.display = "block";
    document.getElementById("buttonFour2").style.display = "none";
  };


  function cardLastTree() {
    document.getElementById("card_last_tree_more").style.display = "block";
    document.getElementById("card_last_tree_more").style.backgroundColor =
    "rgba(13,16,26,0.6)";
  document.getElementById("card_last_tree_more").style.borderBottomRightRadius =
    "12px";
  document.getElementById("card_last_tree_more").style.borderBottomLeftRadius = "12px";
  document.getElementById("btn2cardlasttree").style.display = "none";
  document.getElementById("btn2cardlasttree1").style.display = "block";

  }
  
  function cardLastTree1(){
        document.getElementById("card_last_tree_more").style.display = "none";
        document.getElementById("btn2cardlasttree").style.display = "block";
        document.getElementById("btn2cardlasttree1").style.display = "none";
 
  }



  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);

  return (
    <div>
      {/* CARD ONE */}
      <div
        style={{ paddingTop: "120px", paddingBottom: "100px" }}
        className="bg_color"
      >
        <Grid container className="stack_main">
          <Grid
            item
            lg={2.8}
            md={4.5}
            sm={5.5}
            xs={11.5}
            className="stact_card"
          >
            <Grid container>
              <Grid item lg={5} md={6} sm={5.5} xs={3.8} className="card_img">
                <img src={logo} alt="" />
                <p
                  style={{
                    paddingLeft: "8px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Maximum Stack<br></br>APR
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Lock Duration
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>Lock Type</p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Early Panalty
                </p>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={2} xs={1} id='stack_earn'></Grid>
              <Grid item lg={6.4} sm={5} xs={4}>
                <p className='stack_p'>
                  Stack And Earn &ZAX
                </p>
                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    marginTop: "35px",
                    paddingRight: "5px",
                  }}
                >
                  104890.00<br></br>9%
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  100 Days
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  Fixed
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  None
                </p>
              </Grid>
              <Grid item lg={3} md={3.3} sm={3.3} xs={2.5}></Grid>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
                id="btn_two"
              >
                Connect Wallet
              </Button>
              <Grid container>
                <Grid item lg={7} xs={6.5} className="card_img">
                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Total $ZAX Stacked By Investor
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Deposite Fee
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    With Drow Fees
                  </p>
                </Grid>
                <Grid item lg={0.5}></Grid>
                <Grid item lg={4.4} id='stack_earn'>
                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      // marginTop: "-5px",
                      paddingRight: "5px",
                    }}
                  >
                    20.00000
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                      marginTop: "50px",
                    }}
                  >
                    0.00%
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    0.00%
                  </p>
                </Grid>

                <Button id="test">Buy Zillion Aakkar Xo</Button>

                <Button id="test" style={{ marginTop: "-4px" }}>
                  View Zallion Aakar Xo
                </Button>

                <Button
                  style={{
                    color: "white",
                    marginBottom: "20px",
                    margin: "20px",
                    width: "100%",
                    marginTop: "-4px",
                  }}
                  id="test"
                >
                  Zallion Aakar Xo Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={2.8}
            md={4.5}
            sm={5.5}
            xs={11.5}
            className="stact_card_one"
          >
            <Grid container>
              <Grid item lg={5} md={5.5} sm={5.5} xs={3.8} className="card_img">
                <img src={logo} alt="" />
                <p
                  style={{
                    paddingLeft: "8px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Maximum Stack<br></br>APR
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Lock Duration
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>Lock Type</p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Early Panalty
                </p>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
              <Grid item lg={6.4}  id='stack_earn'>
                <p style={{ color: "white", paddingTop: "15px" }}>
                  Stack And Earn &ZAX
                </p>
                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    marginTop: "35px",
                    paddingRight: "5px",
                  }}
                >
                  315000.00<br></br>18%
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  600 Days
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  Fixed
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  None
                </p>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={2.5}></Grid>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
                id="btn_two"
              >
                Connect Wallet
              </Button>
              <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <div style={{ borderBottom: "1px solid white" }}></div>
                  <Button
                    id="butn"
                    onClick={bilal}
                    style={{
                      color: "white",
                      marginLeft: "40%",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    More
                  </Button>
                  <Button
                    style={{
                      display: "none",
                      color: "white",
                      marginLeft: "40%",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                    id="butn2"
                    onClick={bilal2}
                  >
                    Less
                  </Button>
                </Grid>
              </Grid>

              <div id="one_two" style={{ display: "none" }}>
                <Grid container>
                  <Grid item lg={7} xs={6.5} className="card_img">
                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Total $ZAX Stacked By Investor
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Deposite Fee
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      With Drow Fees
                    </p>
                  </Grid>
                  <Grid item lg={0.5}></Grid>
                  <Grid item lg={4.4}  id='stack_earn'>
                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        // marginTop: "-5px",
                        paddingRight: "5px",
                      }}
                    >
                      20.00000
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                        marginTop: "50px",
                      }}
                    >
                      0.00%
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    >
                      0.00%
                    </p>
                  </Grid>
                  <Button id="test">Buy Zillion Aakkar Xo</Button>

                  <Button style={{ marginTop: "-4px" }} id="test">
                    View Zallion Aakar Xo
                  </Button>

                  <Button
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      margin: "20px",
                      width: "100%",
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    Zallion Aakar Xo Cart
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            lg={2.8}
            md={4.5}
            sm={5.5}
            xs={11.5}
            className="stact_card"
          >
            <Grid container>
              <Grid item lg={5} md={6} sm={5.5} xs={3.8} className="card_img">
                <img src={logo} alt="" />
                <p
                  style={{
                    paddingLeft: "8px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Maximum Stack<br></br>APR
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Lock Duration
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>Lock Type</p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Early Panalty
                </p>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
              <Grid item lg={6.5}  id='stack_earn'>
                <p style={{ color: "white", paddingTop: "15px" }} >
                  Stack And Earn &ZAX
                </p>
                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    marginTop: "33px",
                    paddingRight: "5px",
                  }}
                >
                  209990.00<br></br>15%
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  300 Days
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  Fixed
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  None
                </p>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={2.5}></Grid>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
                id="btn_two"
              >
                Connect Wallet
              </Button>
              <Grid container>
                <Grid item lg={7} xs={6.5} className="card_img">
                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Total $ZAX Stacked By Investor
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Deposite Fee
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    With Drow Fees
                  </p>
                </Grid>
                <Grid item lg={0.5}></Grid>
                <Grid item lg={4.4}  id='stack_earn'>
                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      // marginTop: "-5px",
                      paddingRight: "5px",
                    }}
                  >
                   10.00000
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                      marginTop: "50px",
                    }}
                  >
                    0.00%
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    0.00%
                  </p>
                </Grid>
                <Button id="test">Buy Zillion Aakkar Xo</Button>

                <Button
                  style={{
                    marginTop: "-4px",
                  }}
                  id="test"
                >
                  View Zallion Aakar Xo
                </Button>

                <Button
                  style={{
                    color: "white",
                    marginBottom: "20px",
                    margin: "20px",
                    width: "100%",
                    marginTop: "-4px",
                  }}
                  id="test"
                >
                  Zallion Aakar Xo Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={2.8}
            md={4.5}
            sm={5.5}
            xs={11.5}
            className="stact_card_one"
            id="card_four"
          >
            <Grid container>
              <Grid item lg={5} md={6} sm={5.5} xs={3.8} className="card_img">
                <img src={logo} alt="" />
                <p
                  style={{
                    paddingLeft: "8px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Maximum Stack<br></br>APR
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Lock Duration
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>Lock Type</p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Early Panalty
                </p>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
              <Grid item lg={6.4} id='stack_earn'>
                <p style={{ color: "white", paddingTop: "15px" }}>
                  Stack And Earn &ZAX
                </p>
                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    marginTop: "35px",
                    paddingRight: "5px",
                  }}
                >
                  315000.00<br></br>18%
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  600 Days
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  Fixed
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  None
                </p>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
                id="btn_two"
              >
                Connect Wallet
              </Button>
              <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <div style={{ borderBottom: "1px solid white" }}></div>
                  <Button
                    id="btn_more"
                    onClick={cardTwo}
                    style={{
                      color: "white",
                      marginLeft: "40%",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    More
                  </Button>
                  <Button
                    style={{
                      display: "none",
                      color: "white",
                      marginLeft: "40%",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                    id="btn2_more"
                    onClick={cardTwo2}
                  >
                    Less
                  </Button>
                </Grid>
              </Grid>

              <div id="card_two_more" style={{ display: "none" }}>
                <Grid container>
                  <Grid item lg={7} xs={6.5} className="card_img">
                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Total $ZAX Stacked By Investor
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Deposite Fee
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      With Drow Fees
                    </p>
                  </Grid>
                  <Grid item lg={0.5}></Grid>
                  <Grid item lg={4.4} id='stack_earn'>
                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        // marginTop: "-5px",
                        paddingRight: "5px",
                      }}
                    >
                      10.00000
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                        marginTop: "50px",
                      }}
                    >
                      0.00%
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    >
                      0.00%
                    </p>
                  </Grid>
                  <Button id="test">Buy Zillion Aakkar Xo</Button>

                  <Button
                    style={{
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    View Zallion Aakar Xo
                  </Button>

                  <Button
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      margin: "20px",
                      width: "100%",
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    Zallion Aakar Xo Cart
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>

      {/* CARD TWO */}
      <div>
        <div
          style={{ paddingTop: "120px", paddingBottom: "100px" }}
          className="bg_color2"
        >
          <Grid container className="stack_main">
            <Grid
              item
              lg={2.8}
              md={4.5}
              sm={5.5}
              xs={11.5}
              className="stact_card_one"
            >
              <Grid container>
                <Grid
                  item
                  lg={5}
                  md={5.5}
                  sm={5.5}
                  xs={3.8}
                  className="card_img"
                >
                  <img src={logo} alt="" />
                  <p
                    style={{
                      paddingLeft: "8px",
                      color: "white",
                      marginTop: "15px",
                    }}
                  >
                    Maximum Stack<br></br>APR
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Lock Duration
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Lock Type
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Early Panalty
                  </p>
                </Grid>
                <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
                <Grid item lg={6.4} id='stack_earn'>
                  <p style={{ color: "white", paddingTop: "15px" }}>
                    Stack And Earn &ZAX
                  </p>
                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      marginTop: "35px",
                      paddingRight: "5px",
                    }}
                  >
                    315000.00<br></br>18%
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    600 Days
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    Fixed
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    None
                  </p>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={2.5}></Grid>
                <Button
                  style={{
                    color: "white",
                    marginBottom: "20px",
                  }}
                  id="btn_two"
                >
                  Connect Wallet
                </Button>
                <Grid container>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div style={{ borderBottom: "1px solid white" }}></div>
                    <Button
                      id="card_three_btn1"
                      onClick={cardThree}
                      style={{
                        color: "white",
                        marginLeft: "40%",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      More
                    </Button>
                    <Button
                      style={{
                        display: "none",
                        color: "white",
                        marginLeft: "40%",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                      id="card_three_btn2"
                      onClick={cardThree1}
                    >
                      Less
                    </Button>
                  </Grid>
                </Grid>

                <div id="card_three" style={{ display: "none" }}>
                  <Grid container>
                    <Grid item lg={7} xs={6.5} className="card_img">
                      <p style={{ paddingLeft: "8px", color: "white" }}>
                        Total $ZAX Stacked By Investor
                      </p>

                      <p style={{ paddingLeft: "8px", color: "white" }}>
                        Deposite Fee
                      </p>

                      <p style={{ paddingLeft: "8px", color: "white" }}>
                        With Drow Fees
                      </p>
                    </Grid>
                    <Grid item lg={0.5}></Grid>
                    <Grid item lg={4.4} id='stack_earn'>
                      <p
                        style={{
                          textAlign: "end",
                          color: "white",
                          // marginTop: "-5px",
                          paddingRight: "5px",
                        }}
                      >
                   20.0000
                      </p>

                      <p
                        style={{
                          textAlign: "end",
                          color: "white",
                          paddingRight: "5px",
                          marginTop: "50px",
                        }}
                      >
                        0.00%
                      </p>

                      <p
                        style={{
                          textAlign: "end",
                          color: "white",
                          paddingRight: "5px",
                        }}
                      >
                        0.00%
                      </p>
                    </Grid>
                    <Button id="test">Buy Zillion Aakkar Xo</Button>

                    <Button
                      style={{
                        marginTop: "-4px",
                      }}
                      id="test"
                    >
                      View Zallion Aakar Xo
                    </Button>

                    <Button
                      style={{
                        color: "white",
                        marginBottom: "20px",
                        margin: "20px",
                        width: "100%",
                        marginTop: "-4px",
                      }}
                      id="test"
                    >
                      Zallion Aakar Xo Cart
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <Grid
              item
              lg={2.8}
              md={4.5}
              sm={5.5}
              xs={11.5}
              className="stact_card"
            >
              <Grid container>
                <Grid item lg={5} md={6} sm={5.5} xs={3.8} className="card_img">
                  <img src={logo} alt="" />
                  <p
                    style={{
                      paddingLeft: "8px",
                      color: "white",
                      marginTop: "15px",
                    }}
                  >
                    Maximum Stack<br></br>APR
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Lock Duration
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Lock Type
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Early Panalty
                  </p>
                </Grid>
                <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
                <Grid item lg={6.5} id='stack_earn'>
                  <p style={{ color: "white", paddingTop: "15px" }}>
                    Stack And Earn &ZAX
                  </p>
                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      marginTop: "33px",
                      paddingRight: "5px",
                    }}
                  >
                    104980.00<br></br>9%
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    100 Days
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    Fixed
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    None
                  </p>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={2.5}></Grid>
                <Button
                  style={{
                    color: "white",
                    marginBottom: "20px",
                  }}
                  id="btn_two"
                >
                  Connect Wallet
                </Button>
                <Grid container>
                  <Grid item lg={7} xs={6.5} className="card_img">
                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Total $ZAX Stacked By Investor
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Deposite Fee
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      With Drow Fees
                    </p>
                  </Grid>
                  <Grid item lg={0.5}></Grid>
                  <Grid item lg={4.4} id='stack_earn'>
                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    >
                  20.00000
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                        marginTop: "50px",
                      }}
                    >
                      0.00%
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    >
                      0.00%
                    </p>
                  </Grid>
                  <Button id="test">Buy Zillion Aakkar Xo</Button>

                  <Button
                    style={{
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    View Zallion Aakar Xo
                  </Button>

                  <Button
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      margin: "20px",
                      width: "100%",
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    Zallion Aakar Xo Cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={1}></Grid>
            <Grid item lg={2}>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                  width: "100%",
                }}
                id="btn_twos"
              >
                Connect Wallet
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* CARD THREE */}
      <div
        style={{ paddingTop: "120px", paddingBottom: "100px" }}
        className="bg_color"
      >
        <Grid container className="stack_main">
          <Grid
            item
            lg={2.8}
            md={4.5}
            sm={5.5}
            xs={11.5}
            className="stact_card_one"
          >
            <Grid container>
              <Grid item lg={5} md={5.5} sm={5.5} xs={3.8} className="card_img">
                <img src={logo} alt="" />
                <p
                  style={{
                    paddingLeft: "8px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Maximum Stack<br></br>APR
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Lock Duration
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>Lock Type</p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Early Panalty
                </p>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
              <Grid item lg={6.4} id='stack_earn'>
                <p style={{ color: "white", paddingTop: "15px" }}>
                  Stack And Earn &ZAX
                </p>
                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    marginTop: "35px",
                    paddingRight: "5px",
                  }}
                >
                  315000.00<br></br>18%
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  600 Days
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  Fixed
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  None
                </p>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={2.5}></Grid>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
                id="btn_two"
              >
                Connect Wallet
              </Button>
              <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <div style={{ borderBottom: "1px solid white" }}></div>
                  <Button
                    id="buttonFour"
                    onClick={btnFour1}
                    style={{
                      color: "white",
                      marginLeft: "40%",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    More
                  </Button>
                  <Button
                    style={{
                      display: "none",
                      color: "white",
                      marginLeft: "40%",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                    id="buttonFour2"
                    onClick={btnFour2}
                  >
                    Less
                  </Button>
                </Grid>
              </Grid>

              <div id="card_four1" style={{ display: "none" }}>
                <Grid container>
                  <Grid item lg={7} xs={6.5} className="card_img">
                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Total $ZAX Stacked By Investor
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Deposite Fee
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      With Drow Fees
                    </p>
                  </Grid>
                  <Grid item lg={0.5}></Grid>
                  <Grid item lg={4.4} id='stack_earn'> 
                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        // marginTop: "-5px",
                        paddingRight: "5px",
                      }}
                    >
                      20.00000
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                        marginTop: "50px",
                      }}
                    >
                      0.00%
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    >
                      0.00%
                    </p>
                  </Grid>
                  <Button id="test">Buy Zillion Aakkar Xo</Button>

                  <Button
                    style={{
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    View Zallion Aakar Xo
                  </Button>

                  <Button
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      margin: "20px",
                      width: "100%",
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    Zallion Aakar Xo Cart
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            lg={2.8}
            md={4.5}
            sm={5.5}
            xs={11.5}
            className="stact_card"
            id="card_four_margin_top"
          >
            <Grid container>
              <Grid item lg={5} md={6} sm={5.5} xs={3.8} className="card_img">
                <img src={logo} alt="" />
                <p
                  style={{
                    paddingLeft: "8px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Maximum Stack<br></br>APR
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Lock Duration
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>Lock Type</p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Early Panalty
                </p>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
              <Grid item lg={6.5} id='stack_earn'>
                <p style={{ color: "white", paddingTop: "15px" }}>
                  Stack And Earn &ZAX
                </p>
                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    marginTop: "35px",
                    paddingRight: "5px",
                  }}
                >
                  104980.00<br></br>9%
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  100 Days
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  Fixed
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  None
                </p>
              </Grid>
              <Grid item lg={3} md={3.3} sm={3.3} xs={2.5}></Grid>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
                id="btn_two"
              >
                Connect Wallet
              </Button>
              <Grid container>
                <Grid item lg={7} xs={6.5} className="card_img">
                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Total $ZAX Stacked By Investor
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Deposite Fee
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    With Drow Fees
                  </p>
                </Grid>
                <Grid item lg={0.5} ></Grid>
                <Grid item lg={4.4} id='stack_earn'>
                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
               20.0000
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                      marginTop: "50px",
                    }}
                  >
                    0.00%
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    0.00%
                  </p>
                </Grid>
                <Button id="test">Buy Zillion Aakkar Xo</Button>

                <Button
                  style={{
                    marginTop: "-4px",
                  }}
                  id="test"
                >
                  View Zallion Aakar Xo
                </Button>

                <Button
                  style={{
                    color: "white",
                    marginBottom: "20px",
                    margin: "20px",
                    width: "100%",
                    marginTop: "-4px",
                  }}
                  id="test"
                >
                  Zallion Aakar Xo Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={2.8}
            md={4.5}
            sm={5.5}
            xs={11.5}
            className="stact_card"
          >
            <Grid container>
              <Grid item lg={5} md={6} sm={5.5} xs={3.8} className="card_img">
                <img src={logo} alt="" />
                <p
                  style={{
                    paddingLeft: "8px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Maximum Stack<br></br>APR
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Lock Duration
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>Lock Type</p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Early Panalty
                </p>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
              <Grid item lg={6.5} id='stack_earn'>
                <p style={{ color: "white", paddingTop: "15px" }}>
                  Stack And Earn &ZAX
                </p>
                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    marginTop: "35px",
                    paddingRight: "5px",
                  }}
                >
                  104980.00<br></br>9%
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  100 Days
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  Fixed
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  None
                </p>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={2.5}></Grid>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
                id="btn_two"
              >
                Connect Wallet
              </Button>
              <Grid container>
                <Grid item lg={7} xs={6.5} className="card_img">
                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Total $ZAX Stacked By Investor
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    Deposite Fee
                  </p>

                  <p style={{ paddingLeft: "8px", color: "white" }}>
                    With Drow Fees
                  </p>
                </Grid>
                <Grid item lg={0.5}></Grid>
                <Grid item lg={4.4} id='stack_earn'>
                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    20.00000
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                      marginTop: "50px",
                    }}
                  >
                    0.00%
                  </p>

                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      paddingRight: "5px",
                    }}
                  >
                    0.00%
                  </p>
                </Grid>
                <Button id="test">Buy Zillion Aakkar Xo</Button>

                <Button
                  style={{
                    marginTop: "-4px",
                  }}
                  id="test"
                >
                  View Zallion Aakar Xo
                </Button>

                <Button
                  style={{
                    color: "white",
                    marginBottom: "20px",
                    margin: "20px",
                    width: "100%",
                    marginTop: "-4px",
                  }}
                  id="test"
                >
                  Zallion Aakar Xo Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={2.8}
            md={4.5}
            sm={5.5}
            xs={11.5}
            className="stact_card_one"
          >
            <Grid container>
              <Grid item lg={5} md={6} sm={5.5} xs={3.8} className="card_img">
                <img src={logo} alt="" />
                <p
                  style={{
                    paddingLeft: "8px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Maximum Stack<br></br>APR
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Lock Duration
                </p>

                <p style={{ paddingLeft: "8px", color: "white" }}>Lock Type</p>

                <p style={{ paddingLeft: "8px", color: "white" }}>
                  Early Panalty
                </p>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={0.5}></Grid>
              <Grid item lg={6.4} id='stack_earn'>
                <p style={{ color: "white", paddingTop: "15px" }}>
                  Stack And Earn &ZAX
                </p>
                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    marginTop: "35px",
                    paddingRight: "5px",
                  }}
                >
                  315000.00<br></br>18%
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  600 Days
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  Fixed
                </p>

                <p
                  style={{
                    textAlign: "end",
                    color: "white",
                    paddingRight: "5px",
                  }}
                >
                  None
                </p>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
              <Button
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
                id="btn_two"
              >
                Connect Wallet
              </Button>
              <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <div style={{ borderBottom: "1px solid white" }}></div>
                  <Button
                    id="btn2cardlasttree"
                    onClick={cardLastTree}
                    style={{
                      color: "white",
                      marginLeft: "40%",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    More
                  </Button>
                  <Button
                    style={{
                      display: "none",
                      color: "white",
                      marginLeft: "40%",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                    id="btn2cardlasttree1"
                    onClick={cardLastTree1}
                  >
                    Less
                  </Button>
                </Grid>
              </Grid>

              <div id="card_last_tree_more" style={{ display: "none" }}>
                <Grid container>
                  <Grid item lg={7} xs={6.5} className="card_img">
                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Total $ZAX Stacked By Investor
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      Deposite Fee
                    </p>

                    <p style={{ paddingLeft: "8px", color: "white" }}>
                      With Drow Fees
                    </p>
                  </Grid>
                  <Grid item lg={0.5}></Grid>
                  <Grid item lg={4.4} id='stack_earn'>
                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    >
               20.0000
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                        marginTop: "50px",
                      }}
                    >
                      0.00%
                    </p>

                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    >
                      0.00%
                    </p>
                  </Grid>
                  <Button
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      margin: "20px",
                      width: "100%",
                    }}
                    id="test"
                  >
                    Buy Zillion Aakkar Xo
                  </Button>

                  <Button
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      margin: "20px",
                      width: "100%",
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    View Zallion Aakar Xo
                  </Button>

                  <Button
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      margin: "20px",
                      width: "100%",
                      marginTop: "-4px",
                    }}
                    id="test"
                  >
                    Zallion Aakar Xo Cart
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Stack;
