import React from 'react'
import styles from './App.module.css'
import covidImage from './images/image.png';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

//Insted of above three imports use below one import stmt by creating extra index.js in components folder which exports all comps.
import {Cards, Chart, CountryPicker} from './components';
import { fetchData } from './api'; //When you have index.js files then you dont need to mention the file name './api' will derectly look for that file. 

class App extends React.Component {
    state = {
        data : {},
        country : '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data : fetchedData });
        // console.log(fetchedData)
    }

    handleCountry = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data : fetchedData, country : country });
        // console.log(fetchedData)
        // console.log(country)
        //fetch the data
        //set the state
    }
     render(){
         const {data, country} = this.state;
         return (
             <div className={styles.container}>
                 <img className={styles.image} src={covidImage} alt="Covid-19" />
                 <Cards data={data}  />
                 <CountryPicker handleCountry = {this.handleCountry}/>
                 <Chart data={data} country={country} />
             </div>
         )
     }
 }

 export default App