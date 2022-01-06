import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Eclipse, $49",
    imgPath:
      "https://res.cloudinary.com/kacloud20/image/upload/v1640200922/project3/Sock2%20Photos/10-1_pvgpeh.jpg"
  },
  {
    label: "Love yourz, $49",
    imgPath:
      "https://res.cloudinary.com/kacloud20/image/upload/v1640200928/project3/Sock2%20Photos/08_whkpsc.jpg"
  },
  {
    label: "Manchild, $99",
    imgPath:
      "https://res.cloudinary.com/kacloud20/image/upload/v1640200920/project3/Sock2%20Photos/05-1_hypmjq.jpg"
  }
];

function FeaturedCarousel3() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 285, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 10,
          bgcolor: "background.default"
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%"
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default FeaturedCarousel3
