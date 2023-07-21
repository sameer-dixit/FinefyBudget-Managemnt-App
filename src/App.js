import React,{useEffect,useRef} from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PushToTalkButton,PushToTalkButtonContainer } from '@speechly/react-ui';

import { SpeechState,useSpeechContext } from '@speechly/react-client';

ChartJS.register(ArcElement, Tooltip, Legend);

const App = () => {
    const classes=useStyles();

    useEffect(()=>{

    },[]);


  return (
    <div>
    <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{height:'100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
            <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.main}>
            <Main />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.last}>
            <Details title="Expense" />
            </Grid>

    </Grid>
    <PushToTalkButtonContainer>
      <PushToTalkButton />
      {/* <ErrorPanel /> */}
    </PushToTalkButtonContainer>
    </div>
  )
}

export default App;