import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup'
import cx from 'classnames'

 const Cards = ({data: {confirmed, deaths, recovered, lastUpdate} }) => {
     if(!confirmed){
         return 'Loading...'
     }
    //  console.log(props)
     return(
         <div className={styles.container}>
             <Grid container spacing={3} justify='center'>
                 {/* xs : extra small mobile devices-using all 12 spaces. In medium devices-using 3 of 12 spaces */}
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start ={0}
                                end = {confirmed.value}
                                separator = ','
                                duration = {3}
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                 </Grid>

                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                    start ={0}
                                    end = {recovered.value}
                                    separator = ','
                                    duration = {3}
                                />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                 </Grid>

                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                    start ={0}
                                    end = {deaths.value}
                                    separator = ','
                                    duration = {3}
                                />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                 </Grid>

             </Grid>
         </div>
     )
 }

 export default Cards