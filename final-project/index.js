function getImgFromJson() {
    var dataObject;
    for (var i = 0; i < 30; i++) {
        $.get("json/data/" + i.toString() + ".json", function (data) {
            dataObject = data;
            id = dataObject.name.split('#')[1]
            var myImage = new Image();
            myImage.src = "https://s7nspfp.mypinata.cloud/ipfs/" + dataObject.image;
            $(".nft-images").append("<img src=" + myImage.src + " id=" + "json/data/" + id + ">");
        })
    }
}
getImgFromJson();

function getProps(){
    for (var i = 0; i < 30; i++) {
        $.get("json/data/" + i.toString() + ".json", function (data) {
            for(var i = 0; i < data.attributes.length ; i++){
                $('.dropdown_fil').append( '<option value="'+data.attributes[i].value+'">'+data.attributes[i].value+'</option>' );

            }
        })
    }
    
}


$(document).ready(function () {
    $('body').on('click','.nft-images img', function(e) {
            hrefLink = this.id;
            window.location = 'detail.html?id='+hrefLink;
    });
});

function getProperties() {
    var parameters = new URLSearchParams(window.location.search);
    var id = parameters.get("id");
    var traits;
    $.get(id + ".json", function (data) {
            var myImage = new Image();
            myImage.src = "https://s7nspfp.mypinata.cloud/ipfs/" + data.image;
            $(".collapsible").append("<img src=" + myImage.src + "></br> <small>View Details</small>");
            for(var i=0;i<data.attributes.length;i++){
                traits +=  "<p><b>"+data.attributes[i].trait_type+"</b><p><p>"+data.attributes[i].value+"</p>";
                }
            $(".props").append(traits);
    })
}