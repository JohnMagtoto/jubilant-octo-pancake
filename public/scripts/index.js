var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function fetchMapsAPI() {
    var mapAPI_Promise = new Promise((resolve, reject) => {
        // var xhr = new XMLHttpRequest() ;
        // xhr.onreadystatechange = function() {
        //     if (xhr.readyState == XMLHttpRequest.DONE) {

        //     }
        // }
        // xhr.open('GET', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAtMXnr1X63BRhjLDjnNbBXCPLPTwKSaI8', true);
        // xhr.send(null);
        if(1 + 1 == 2) {
            resolve('Promise worked') ;
        } else {
            reject('Something is broken in the promise') ;
        }
    })

    mapAPI_Promise.then((result)=>{
        console.log(result) ;
    }, (reject) => {
        console.log(reject) ;
    })
}
