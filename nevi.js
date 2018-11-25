function nevi(place){
    $.ajax({
        url: "http://jhnah917.dothome.co.kr/getLoc.php?place=" + encodeURI(place),
        success: function(fullHtml){
            try {
                window.location.href = "https://www.google.com/maps/dir/" + fullHtml.split(" ").join(",") + "/37.5330796,126.963251";
            }catch(e){}
        }
    });
}

$(document).ready(function() {
    nevi("대방현대아파트");
} );