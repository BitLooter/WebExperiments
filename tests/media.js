// Set up default controls
media = document.getElementById("mediasample");
setPlayLink(document.getElementById("mediaplay"), media);
setPauseLink(document.getElementById("mediapause"), media);


function setPlayLink(link, media)
{
    link.onclick = function(){media.play()};
}

function setPauseLink(link, media)
{
    link.onclick = function(){media.pause()};
}
