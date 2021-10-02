import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./Login.css";
import { ProfileData } from "./DataInterface";

const clientId =
  "119658490414-dmsepk4483jbdlro3u6fivh7h7jhg5qv.apps.googleusercontent.com";

function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfiledata] = useState<ProfileData[]>([]);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    setShowProfile(true);
    setProfiledata(res.profileObj);
  };
  interface pfDataProp {
    profileData: ProfileData[];
  }
  const onLoginFailure = (res: any) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    setShowProfile(false);
  };
  // console.log(profileData);

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showProfile ? (
        <div className="wrapper">
          <div className="navbar">
            <div className="navbar_right">
              <div className="notifications">
                <div className="icon_wrap">
                  <i className="far fa-bell"></i>
                </div>
              </div>
              <div className="profile">
                <div className="icon_wrap">
                  <img src={profileData["imageUrl"]} alt="profile_pic" />
                  <span className="name">{profileData["name"]}</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {
                  <div className="profile_dd">
                    <ul className="profile_ul">
                      <li className="profile_li">
                        <a className="profile" href="#">
                          <span className="picon">
                            <i className="fas fa-user-alt"></i>
                          </span>
                          Profile
                        </a>
                        <div className="btn">My Account</div>
                      </li>
                      <li>
                        <a className="address" href="#">
                          <span className="picon">
                            <i className="fas fa-map-marker"></i>
                          </span>
                          Address
                        </a>
                      </li>
                      <li>
                        <a className="settings" href="#">
                          <span className="picon">
                            <i className="fas fa-cog"></i>
                          </span>
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="logout" href="#">
                          <span className="picon">
                            <i className="fas fa-sign-out-alt"></i>
                          </span>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="w-full">
            <GoogleLogout
              className="h-14"
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Login;
