import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://i1.wp.com/www.inventiva.co.in/wp-content/uploads/2020/07/mukesh-ambani-1591541820-2.jpg"
                channel="Anuppam"
                verified
                subs="40 M"
                noOfVideos={100}
                description="Funny Vines, dont take them serion s,jbhjvsbd hsdchSKJDcb nkjbcvhvdcbnzv baMBNJKDcbhjusly" 
            />
            <hr />
            <VideoRow 
                views="80 M"
                subs="40 M"
                description="bcdjschjsbDCMKWNJCKBWCJHVBCHSVD HCBNCNSDJKCBCHJSVD" 
                timestamp="1 day ago"
                channel="Anupam"
                title="lets make vine"
                image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            />
            <VideoRow 
                views="80 M"
                subs="40 M"
                description="bcdjschjsbDCMKWNJCKBWCJHVBCHSVD HCBNCNSDJKCBCHJSVD" 
                timestamp="1 day ago"
                channel="Anupam"
                title="lets make vine"
                image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            />
            <VideoRow 
                views="80 M"
                subs="40 M"
                description="bcdjschjsbDCMKWNJCKBWCJHVBCHSVD HCBNCNSDJKCBCHJSVD" 
                timestamp="1 day ago"
                channel="Anupam"
                title="lets make vine"
                image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            />
            <VideoRow 
                views="80 M"
                subs="40 M"
                description="bcdjschjsbDCMKWNJCKBWCJHVBCHSVD HCBNCNSDJKCBCHJSVD" 
                timestamp="1 day ago"
                channel="Anupam"
                title="lets make vine"
                image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            />
            <VideoRow 
                views="80 M"
                subs="40 M"
                description="bcdjschjsbDCMKWNJCKBWCJHVBCHSVD HCBNCNSDJKCBCHJSVD" 
                timestamp="1 day ago"
                channel="Anupam"
                title="lets make vine"
                image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            />
            <VideoRow 
                views="80 M"
                subs="40 M"
                description="bcdjschjsbDCMKWNJCKBWCJHVBCHSVD HCBNCNSDJKCBCHJSVD" 
                timestamp="1 day ago"
                channel="Anupam"
                title="lets make vine"
                image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            />
        </div>
    )
}

export default SearchPage
