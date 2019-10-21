import React from "react";
import "./mainpage.css";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 col-sm-4 sidebar1">
            <div class="logo">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDThXEyMmDA5ScBkx46mSfH7xnvFg3ODwCopQXqWpPfJQuI8ntcQ"
                class="img-responsive center-block"
                alt="Logo"
              /> */}
            </div>
            <br />
            <div class="left-navigation sidebar1">
              <ul class="list">
                <h5>
                  <strong>WHEREABOUTS</strong>
                </h5>
                <li>
                  <Link to="/">Tasks</Link>
                </li>
                <li>Office</li>
                <li>School</li>
                <li>Gym</li>
                <li>Art Class</li>
                <li>Hike Club</li>
              </ul>

              <br />

              <ul class="list">
                <h5>
                  <strong>HOBBIES</strong>
                </h5>
                <li>Hiking</li>
                <li>Rafting</li>
                <li>Badminton</li>
                <li>Tennis</li>
                <li>Sketching</li>
                <li>Horse Riding</li>
              </ul>
            </div>
          </div>
          <div class="col-md-10 col-sm-8 main-content">
            <h1>FEEDBACK APPRECIATED! :)</h1>
            <h3>
              P.S.: For side navbar with dropdown menu, you may refer this
              snippet: http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For
              side navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ...... P.S.: For side
              navbar with dropdown menu, you may refer this snippet:
              http://bootsnipp.com/user/snippets/kWPoW ......
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
