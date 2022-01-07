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
    label: "Green Orchid, $89",
    imgPath:
      "https://res.cloudinary.com/kacloud20/image/upload/v1640200919/project3/Sock2%20Photos/09-2_rltxln.jpg"
  },
  {
    label: "Resonance, $69",
    imgPath:
      "https://res.cloudinary.com/kacloud20/image/upload/v1640200926/project3/Sock2%20Photos/12-2_cnoasf.jpg"
  },
  {
    label: "Push it along, $59",
    imgPath:
      "https://res.cloudinary.com/kacloud20/image/upload/v1640200916/project3/Sock2%20Photos/06B_j6tgf8.jpg"
  }
];

function FeaturedCarousel() {
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
          height: 0,
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

export default FeaturedCarousel
