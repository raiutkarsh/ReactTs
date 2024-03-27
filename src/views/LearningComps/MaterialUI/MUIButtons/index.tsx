import React from 'react';
import {Button, Typography} from "@mui/material";
const MUIButtonsComp:React.FC=()=>{
    const handleClick = ()=>{
        console.log("button clicked")
    }
    return(
        <div>
            <Button variant="contained" onClick={handleClick}>Click here</Button>
            <Typography variant="h2" color="primary">
                Hello, Material-UI!
            </Typography>
        </div>
    )
}
export default MUIButtonsComp;