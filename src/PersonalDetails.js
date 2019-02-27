import React,{Component} from 'react'
import './PersonalDetails.css'
class PersonalDetails extends Component{
    render() {
        return(
            <div>
                <p><b>Name:</b>    Chando Steve Yogo</p>
                <p><b>Natinality:</b>  Kenyan</p>
                <p><b>Marital status:</b>  Single</p>
                <p><b>Gender:</b>  Male</p>
                <p><b>Languages:</b>   English,Swahili</p>
                <p><b>Mobile:</b>  +254 705222946,+254 771002608</p>
                <b>Email:</b><a>   schando@student.mmust.ac.ke</a>
                <p><b>Date of Birth</b>    13 Oct 1996</p>

            </div>
        )
    }

}
export default PersonalDetails;