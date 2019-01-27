$('.nav-collapse').on('click',function(){
    $('.collapse').collapse('hide');
})

var settings2 ={
  "async": true,
  "crossDomain": true,
  "url":"https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=" + "80d72794b84477bdecafea98c3d43c7b" + "&photo_id=45969780235&format=json&nojsoncallback=1",
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
