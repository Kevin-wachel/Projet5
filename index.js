const url = "http://localhost:3000/api/teddies";

let request = new XMLHttpRequest();
request.open("GET", url);
request.responseText = "json";
request.send();

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = request.response;
        console.log(response);
    }
};