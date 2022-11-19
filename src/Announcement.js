function Announcement({announcement}) {
    if(typeof(announcement) == "object"){
        return (
            <div>
                <h1>{announcement.title}</h1>
                <p>{announcement.date}</p>
                <h3>{announcement.details}</h3>
                <br/>
            </div>
        );
    }
}

export default Announcement;