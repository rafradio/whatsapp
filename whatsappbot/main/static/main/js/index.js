function Data() {
    const [myMessage, setPost] = React.useState([]);
    const bottomRef = React.useRef(null);

    const getData = async () => {
        try {
            const response = await fetch("https://8de8-90-154-81-226.ngrok-free.app/getdata");
            const textData = await response.json();
            console.log("React ", JSON.parse(textData));
            setPost(JSON.parse(textData));
          } catch (error) {
            console.error(error);
          }
    };

    React.useEffect(() => {
        setInterval(getData, 1000);
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, []);
  
    // return <div>{myMessage}</div>;

    return (
        <div className = {"message_wrap"}>
            {
                myMessage.map((el, index) => {
                    let myclass = el.type == "incoming" ? "message_in": "message_out";
                    return React.createElement('div', { key: el.id, className: myclass }, el.text);
                })
                
            }
            <div ref={bottomRef}></div>
            
        </div>
      );
}

const app = document.getElementById("test");
// app.scrollIntoView();

// const root = createRoot(domNode);
const root = ReactDOM.createRoot(app);
root.render(<Data />);
const app1 = document.getElementById("test");


