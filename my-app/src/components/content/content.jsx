import "./content.css"
import userLogoImg from "../../img/userLogo.png"
import emailImg from "../../img/email.png"
import phoneImg from "../../img/phone.png"
import websiteImg from "../../img/website.png" 
export const Content = ({arrUsers}) => {
    console.log(arrUsers)
    return(
        <div className="content">
            <div className="contentTopBlock">
                <div className="userLogo">
                    <img src={userLogoImg} alt="" />
                </div>
                <div>
                    <div className="userName">
                        {arrUsers.name}
                    </div>
                    <div className="userUsername">
                        {arrUsers.username}
                    </div>
                </div>
            </div>
            <div className="userEmailBlock">
                <div className="userEmailText">
                    <img className='emailImg' src={emailImg} alt="" />
                    email:
                </div>
                <div className="userEmail">
                    {arrUsers.email}
                </div>
            </div>
            <div className="userWebsiteBlock">
                <div className="userWebsiteText">
                    <img className='websiteImg' src={websiteImg} alt="" />
                    website:
                </div>
                <div className="userWebsite">
                    {arrUsers.website}
                </div>
            </div>
            <div className="userPhoneBlock">
                <div className="userPhoneText">
                    <img className='phoneImg' src={phoneImg} alt="" />
                    phone:
                </div>
                <div className="userPhone">
                    {arrUsers.phone}
                </div>
            </div>
        </div>
    )
}