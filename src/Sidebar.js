import React from 'react'
import Row from './Row'
import WhatshotIcon from "@material-ui/icons/Whatshot"
import HomeIcon from "@material-ui/icons/Home"
import './Sidebar.css'
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"

function Sidebar() {
    return (
        <div className="sidebar">
            <Row selected Icon={HomeIcon} title="Home" />
            <Row Icon={WhatshotIcon} title="Trending" />
            <Row Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <Row Icon={VideoLibraryIcon} title="Library" />
            <Row Icon={HistoryIcon} title="History" />
            <Row Icon={OndemandVideoIcon} title="Your Videos" />
            <Row Icon={WatchLaterIcon} title="Watch Later" />
            <Row Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <Row Icon={ExpandMoreOutlinedIcon} title="Show More" />
        </div>
    )
}

export default Sidebar
