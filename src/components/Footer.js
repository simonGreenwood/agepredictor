import {Typography,Link} from '@mui/material';

const Footer = () => {
    const footerStyle = { 
        bottom:"0px",
        position:"absolute",
        width:"100%"
    }
    return (
        <div style={footerStyle}>
            <Typography>Created by Simon. </Typography>
            <Typography>Source code available at <Link href="https://github.com/simonGreenwood/agepredictor" variant="body2">https://github.com/simonGreenwood/agepredictor</Link></Typography>
        </div>
    )
}
export default Footer