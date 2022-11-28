import Announcement from './Announcement';
import announcements from './announcements.json'
import './App.css';

function Announcements() {
    if(typeof announcements == "object"){
        return (
            announcements.map((ancmt, index)=>{
                return (
                    <Announcement data={[ancmt, index]}/>
                )
            })
        )
      }
}

export default Announcements;