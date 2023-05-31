class WebQuery {
    constructor() {
        this.tokenButton = document.getElementById("Token");
        this.button = document.getElementById("webQuery");
        this.bodyMessageNew = document.getElementById("message_area");
        //this.bodyMessageNew.style.display = "flex";
        this.initSettings();

    }

    initSettings() {

        this.tokenButton.addEventListener('click', (event) => {
            event.preventDefault();
            // this.bodyMessageNew.classList.add("messages_on");
            this.bodyMessageNew.style.display = "flex";
            this.idInstance = document.getElementById("IdInstance").value;
            this.apiTokenInstance = document.getElementById("ApiToken").value;
            this.urlShort = `https://api.green-api.com/waInstance${this.idInstance}/`;
            // console.log("hello whatsapp " + this.idInstance + " " + this.apiTokenInstance);
            // console.log(this.bodyMessageNew.childNodes);
            this.button.addEventListener('click', () => this.sendMessages());
            // this.sendToApi();
        });

    }

    sendMessages() {
        let bodyMessage = {
            "chatId": "79154536822@c.us",
            "message": document.getElementById("SendMessage").value
        };
        let method = `sendMessage/${this.apiTokenInstance}`;
        let url = new URL(this.urlShort + method);
        console.log("hello whatsapp");
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(bodyMessage)
            })
            .then(response => response.json())
            .then(data => {
                let dataString = data;
                console.log(dataString);
            });
    }

    sendToApi() {
        let url = new URL("https://8de8-90-154-81-226.ngrok-free.app/getdata");
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }})
            .then(response => response.text())
            .then((data) => {
                let dataString = data;
                console.log(dataString);
            });
    }
}

const makeWebQuery = new WebQuery();