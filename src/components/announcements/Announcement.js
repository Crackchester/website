import ImageList from "./ImageList";

function Announcement({data}) {
    if(typeof(data) == "object"){
        var announcement = data[0];
        var side = data[1]%2;
        if(side === 0){
            return (
                <div id={"Side"+side}>
                    <h2>{announcement.title}</h2>
                    <p>{announcement.date}</p>
                    <div id="a-body">
                        <p>{announcement.details}</p>
                        <ImageList images={announcement.images}/>
                    </div>
                    <br/>
                </div>
            );
        }else{
            return (
                <div id={"Side"+side}>
                    <h2>{announcement.title}</h2>
                    <p>{announcement.date}</p>
                    <div id="a-body">
                        <ImageList images={announcement.images}/>
                        <p>{announcement.details}</p>
                    </div>
                    <br/>
                </div>
            );
        }
    }
}

export default Announcement;