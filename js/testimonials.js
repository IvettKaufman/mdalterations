$('.nav-collapse').on('click',function(){
    $('.collapse').collapse('hide');
})

var mykey = config.MY_KEY;
var photosetID = config.ALBUM_ID;

var settings2 ={
  "async": true,
  "crossDomain": true,
  "url":"https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=" + mykey + "&photo_id=45969780235&format=json&nojsoncallback=1",
  "method": "GET",
  "headers": {}
}

$.ajax(settings2).done(function (data) {
  console.log(data);

$.each( data.comments.comment, function( i, gp ) {

  var content2 = gp._content

  $("#flickr2").append("<tr><td>" + content2 + "<br><hr></td><td>");

});
});
