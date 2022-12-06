import Announcement from './Announcement';
import announcements from './announcements.json'

function Announcements() {
    if(typeof announcements == "object"){
        return (
            announcements.map((ancmt, index)=>{
                return (
                    <Announcement key={index} data={[ancmt, index]}/>
                )
            })
        )
      }
}

export default Announcements;