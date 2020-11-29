
import { Slider, withStyles } from '@material-ui/core';


const PrettoSlider = withStyles({
    root: {
      color: '#F75757',
      height: 8,
      width:"80%",
      margin:"auto"
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#F75757',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);


  export default PrettoSlider