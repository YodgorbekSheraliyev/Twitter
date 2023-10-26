import { Link, Route, Routes } from "react-router-dom";
import Feed from "../feed/feed";
import Explore from "../explore/explore";
import "./home.css";
import twitterLogo from '../../assets/svg/signup-logo.svg'
import home from '../../assets/icons/home.svg'
import homeFill from '../../assets/icons/home-fill.svg'
import explore from '../../assets/icons/explore.svg'
import exploreFill from '../../assets/icons/explore-fill.svg'
import notification from '../../assets/icons/notification.svg'
import notificationFill from '../../assets/icons/notification-fill.svg'
import messages from '../../assets/icons/messages.svg'
import messagesFill from '../../assets/icons/messages-fill.svg'
import bookmarks from '../../assets/icons/bookmarks.svg'
import bookmarksFill from '../../assets/icons/bookmarks.svg'
import lists from '../../assets/icons/lists.svg'
import listsFill from '../../assets/icons/lists-fill.svg'
import profile from '../../assets/icons/profile.svg'
import profileFill from '../../assets/icons/profile-fill.svg'
import more from '../../assets/icons/more.svg'
import { useState } from "react";
import Profile from "../profile/profile";
const img = {
  home, homeFill
}



const Home = () => {
  // const [isActive, setIsActive] = useState(false);
  // const [isActiveHome, setIsActiveHome] = useState(true);
  // const [isActiveExplore, setIsActiveExplore] = useState(false);
  // const [isActiveNotification, setIsActiveNotification] = useState(false);
  // const [isActiveMessage, setIsActiveMessage] = useState(false);
  // const [isActiveBookmark, setIsActiveBookmark] = useState(false);
  // const [isActiveList, setIsActiveList] = useState(false);
  // const [isActiveProfile, setIsActiveProfile] = useState(false);

 
  return (
    <div className="mainframe">
      <aside className="aside__left">
        <nav className="nav">
        <img src={twitterLogo} alt="Twitter" className="aside__left-logo" />
        <ul className="nav__list">
          <li><Link   to='/'><img src={home} alt="Icons" /><span >Home</span></Link></li>
          <li><Link   to='/explore'><img src={explore} alt="Icons" /><span>Explore</span></Link></li>
          <li><Link   to='#'><img src={notification} alt="Icons" /><span>Notifications</span></Link></li>
          <li><Link   to='#'><img src={messages} alt="Icons" /><span></span>Messages</Link></li>
          <li><Link   to='#'><img src={bookmarks} alt="Icons" /><span></span>Bookmarks</Link></li>
          <li><Link   to='#'><img src={lists} alt="Icons" /><span></span>Lists</Link></li>
          <li><Link   to='/profile'><img src={profile} alt="Icons" /><span></span>Profile</Link></li>
          <li><Link   to='#'><img src={more} alt="Icons" /><span></span>More</Link></li>
        </ul>
        <button className="btn nav__btn">Tweet</button>
        </nav>
      </aside>
      <div className="feed">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </div>
      <aside className="aside__right">
        Right
      </aside>
    </div>
  );
};

export default Home;
