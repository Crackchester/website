import ImageList from "./ImageList";

function Announcement({data}) {
    if(typeof(data) == "object"){
        var announcement = data[0];
        return (
            <div id={"Side"+data[1]%2}>
                <h2>{announcement.title}</h2>
                <p>{announcement.date}</p>
                <div id="a-body">
                    <p>{announcement.details}</p>
                    <ImageList images={announcement.images}/>
                </div>
                <br/>
            </div>
        );
    }
}

export default Announcement;