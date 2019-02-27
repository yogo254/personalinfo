import React,{Component} from 'react'
import PersonalDetails from './PersonalDetails'
import './App.css'
import Title from './Tittle'
import CareerObjective from './CareerObjective'
import Education from './Education'
import Interests from './Interests'
import Referees from './Referees'
import Particles from 'react-particles-js'







const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}


class App extends Component{
    render() {
        return(
            <div className='center App'>
                <Particles className='particles'
                           params={particlesOptions}
                />
                <Title title={'Personal Details'}/>
                <PersonalDetails/>
                <Title title={'Career Objective'}/>
                <CareerObjective/>
                <Title title={'Educational Background'}/>
                <Education/>
                <Title title={'Interests'}/>
                <Interests/>
                <Title title={'Referees'}/>
                <Referees/>



            </div>
        )
    }

}
export default App;