import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function FollowMe() {
    return (
        <div className='text-center pt-32 md:pt-64 mx-auto md:w-3/5' id="testing">
            <h2 className='purple'>Follow Me</h2>
            <p className='text-gray-400 mt-5' data-aos="fade-right" data-aos-duration="2000">Follow me on Social Media to get update about my social and professional life<br/> <br/>
            </p>
            <div>
            <a href='https://www.linkedin.com/in/avlokesh8/' target='_blank'> <FontAwesomeIcon icon={faLinkedin} style={{color: "white", height: "3rem", width: "3rem"}} className='mx-2.5'/></a>
            <a href='https://www.instagram.com/mevloki/' target='_blank'> <FontAwesomeIcon icon={faInstagram} className='mx-2.5' style={{color: "#fbad50", height: "3rem", width: "3rem"}}/></a>
            <a href='https://github.com/venkatalokeshanne' target='_blank'> <FontAwesomeIcon icon={faGithub} className='mx-2.5' style={{color: "white", height: "3rem", width: "3rem"}}/></a>
            <a href='https://www.facebook.com/venkatalokeshchowdary.anne' target='_blank'> <FontAwesomeIcon icon={faFacebook} className='mx-2.5' style={{color: "white", height: "3rem", width: "3rem"}}/></a>
            </div>
        </div>
    )
}

export default FollowMe;