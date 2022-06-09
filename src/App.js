import React from 'react';
import { Button, styled } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import AddIcon from '@mui/icons-material/Add';
const App = () => {
  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover":{
      backgroundColor:"green",
      color: "white"
    }
  }))
  return (
    <div>
      <Button startIcon={<AdbIcon />} variant="contained" color="success">
        Success
      </Button>
      <Button startIcon={<AddIcon />} variant="contained" color="secondary">
        Secondary
      </Button>

      <BlueButton>My Button</BlueButton>


      
    </div>
  )
}

export default App