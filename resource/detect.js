/********************************************************************
 detect.js - Detects available HTML5 features and places support flags in page
 
 Scans the document looking for specific ID tags. For each one, checks for
 support in the browser and places a image indicating availability at the
 appropriate location.
 
 Adding new features is done by writing a new detection function and adding
 it to the featureTable array. See setIcon to see how this works.
 ********************************************************************/

// HTML5 features detection functions
function detectVideo()
{
    return (document.createElement('video').canPlayType != undefined);
}

function detectAudio()
{
    return (document.createElement('audio').canPlayType != undefined);
}

function detectGeolocation()
{
    return (navigator.geolocation != undefined);
}

// Adds an icon to the node indicating whether the matching feature is supported
function setIcon(node)
{
    // setIcon looks for the node's ID in the featureTable array. If found,
    // uses the associated function to choose an icon to insert.
    if (node.id in featureTable)
    {
        if (featureTable[node.id]() == true)
            node.appendChild(canUseIcon.cloneNode(true));
        else
            node.appendChild(cannotUseIcon.cloneNode(true));
    }
    //TODO: icon for unknown detection
}

// Map element IDs to detection functions
featureTable = {
    "feature-video": detectVideo,
    "feature-audio": detectAudio,
    "feature-geolocation": detectGeolocation
}

// Create detection icons that will be appended to list items
canUseIcon = document.createElement("img");
canUseIcon.src = "resource/canuse.svg"
canUseIcon.title = "This feature is supported by your browser"
canUseIcon.className = "detectIcon";
cannotUseIcon = document.createElement("img");
cannotUseIcon.src = "resource/cannotuse.svg"
cannotUseIcon.title = "This feature is not supported by your browser"
cannotUseIcon.className = "detectIcon";


// Start of working code - iterate over all marked elements and process them
nodes = document.getElementsByClassName("html5feature");
for (var i = 0; i < nodes.length; i++)
{
    setIcon(nodes[i]);
}
