import React,{useContext} from 'react';
import { Card,CardHeader,CardContent,Typography,Grid,Divider, List } from '@material-ui/core';
import useStyles from './styles';

import { ExpenseTrackerContext } from '../../context/context';
import Form from './Form/Form';
import ExpenseList from './List/List'; // Renamed the local List component
// import InfoCard from '../InfoCard';

const Main = () => {
    const classes=useStyles();
    const {balance}=useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
        <CardHeader title="HAPPEN HIVE" align='center' subheader="Household Income and Expense Voice Assistant Tracker Engine"/>
        <CardContent>
            <Typography align='center' variant='h4'>Total Balance ${balance}</Typography>
            <Typography variant='subtitle1' style={{lineHeight:'1.5em',marginTop:'20px'}}>
            <Typography align='center' variant='h6'>Try saying :<br /></Typography>
            <Typography align='center' variant='h6'>Add Income
        for $100
        in category Business
        for Monday</Typography>
        
                {/* <InfoCard /> */}
                {/* info cart compnent */}
            </Typography>
            <Divider className={classes.divider}/>
            <Form/>
            {/* form */}
        </CardContent>
        <CardContent className='classes.cardContent'>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <ExpenseList /> {/* Replaced List component with ExpenseList */}
            </Grid>
            </Grid>
        </CardContent>

    </Card>
  );
}

export default Main;
