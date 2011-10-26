onmessage = function(e) {
    if (e.data == "start") {
        setInterval(incCounter, 1000);
    }
}

var count = 0;

function incCounter() {
    count++;
    postMessage(count);
}
