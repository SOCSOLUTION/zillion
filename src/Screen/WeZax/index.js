import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import bg1 from '../../Image/bgimage.jpg'
import './index.css'
const WeZax=()=>{
    return <div className='bg_we_zax' id='home'>
        <Grid item lg={12} md={12} sm={12} xs={12} className='bg_one'>
            <img src={bg1} alt=''/>
        </Grid>
        <Container  className="wezax_text">
            <Grid container>
                 <Grid item lg={8} md={10} sm={10}  xs={12} className='we_zax_heading'>
                         <h1><b>Welcome to the Future of <srong style={{color:'rgb(221,219,38)'}}>Transactions with Zillion</srong> <br></br> AAKAR XO (ZAX)!</b></h1>
                         <p>ZAX is a utility token that breaks through the boundaries between centralized and decentralized platforms. Join us now and become part of the  financial revolution.</p>
                 </Grid>
            </Grid>
        </Container>
    </div>
}

export default WeZax