import React from "react";
import "./Developer.css";
import Developercardview from "./developercardview";
import imagerishu from "/assets/images/rishurana.jpg"
import imagepreet from "/assets/images/preetmishra.png"
import imagekamal from "/assets/images/kamalkumar.jpg"
import imagerakesh from "/assets/images/rakeshkumar.jpg"

function Developer() {
  return (
    <div className="developer-container">
      <div className="paragraph-container">
        <h3 className="paragraph-title">
          I am incredibly grateful to <strong> Varcons Technologies </strong> for giving me the
          opportunity to work on the LMS College Review System project. This
          experience has been a significant milestone in our journey as a
          developer, providing us with practical insights and hands-on learning.
          A special thanks to the Varcons Team , particularly Director Spoorthi
          H C , for their support and coordination in making this project
          possible. Your guidance and assistance made this experience seamless
          and enjoyable. I would also like to express my gratitude to my amazing
          team members, Rishu Rana (1AM21CS152) , Preet Mishra (1AM21CS147) ,
          Kumar Kamal Raj Singh (1AM21CS091) , Rakesh Yadav (1AM21CS147) , for
          their collaboration, dedication, and hard work throughout the project.
          Together, we transformed ideas into reality, and I’m truly proud of
          what we’ve accomplished as a team. Finally, I extend my heartfelt
          thanks to our mentors and everyone who provided guidance during this
          project. Your expertise and encouragement were invaluable. This
          project has been an incredible learning experience, and I look forward
          to applying the skills and knowledge I’ve gained to future endeavors.
        </h3>
      </div>

      <div className="team-member">Our Team Member's</div>
      <div className="developercardview">
        <Developercardview
          developerimage={imagerishu}
          developername={"RISHU RANA"}
          developerusn={"1AM21CS152"}
          developercollege={"AMC ENGINEERING COLLEGE"}
          developeremail={"mr.rishurana@gmail.com"}
        />

        <Developercardview
          developerimage={imagepreet}
          developername={"PREET MISHRA"}
          developerusn={"1AM21CS137"}
          developercollege={"AMC ENGINEERING COLLEGE"}
          developeremail={"pms638657@gmail.com"}
        />

        <Developercardview
          developerimage={imagekamal}
          developername={"KUMAR KAMAL RAJ"}
          developerusn={"1AM21CS091"}
          developercollege={"AMC ENGINEERING COLLEGE"}
          developeremail={"kkconfig@gmail.com"}
        />

        <Developercardview
          developerimage={imagerakesh}
          developername={"RAKESH KUMAR"}
          developerusn={"1AM21CS1147"}
          developercollege={"AMC ENGINEERING COLLEGE"}
          developeremail={"rakeshyadavrr9595@gmail.com"}
        />
      </div>
    </div>
  );
}

export default Developer;
