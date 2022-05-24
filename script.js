let mostPopularPhotos = ["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg", "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg", "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];

let likedPics = mostPopularPhotos[1];

let photos = [];

$(".liked-photo").append("<img src=" + likedPics + ">");

$(".submit").click(function() {
    let link = $(".linker").val();
    let submit = $(".submit");
    let most = mostPopularPhotos;
    $(".posts").empty();
    photos.push(link);
    if (mostPopularPhotos.length >= 1) {
        $(".message2").text("You are a loyal member!!!");
    }
    if (photos.length >= 3) {
        $(".message2").text("You are a Silver Level member!!!");
    }

    if (photos.length >= 5) {
        $(".message2").text("You are a Gold Level member!!!");
    }

    if (photos.length >= 6) {
        $(".message2").text("You are a Platinum Level member!!!");
    }
    
   
    for (let pics of photos) {
        $(".posts").append("<div>" + "<img src=" + link + ">" + "</div>");
    }
});