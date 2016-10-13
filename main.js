// Easy Mode
// -------------------------------

currentOpen = null;

function switchOpen(nOpen){
	if (nOpen === currentOpen){
		currentOpen = null;
	} else {
		currentOpen = nOpen;
	}

}

function toggleSize(event){
	var target = $(event.target);
	var oldTarget = $(`#content${currentOpen}`);
	var newOpen = Number(target.attr('id').slice(-1));
	switchOpen(newOpen);
	var conTarget = $(`#content${currentOpen}`);

	oldTarget.toggleClass("open");
	conTarget.toggleClass("open");
	console.log(currentOpen);
}

$(".header").click(toggleSize);


// Hard Mode
// ----------------------------

var currentPic = 1;
var outputPic = $(".image-Background");
outputPic.toggleClass("pic1");

function changePic(event){
	var target = $(event.target);
	var direction = target.attr('id');
	var previousPic = currentPic;
	currentPic = newPic(currentPic, direction);
	var picUrl = carouselImages[currentPic-1].image_url;
	var picTitle = carouselImages[currentPic-1].title;
	var picId = carouselImages[currentPic-1].photographer_id;
	console.log(currentPic);
	console.log(picUrl);
	var outputPic = $(".image-Background");
	var curPicClass = "pic" + currentPic;
	var prevPicClass = "pic" + previousPic;
	outputPic.toggleClass(curPicClass);
	outputPic.toggleClass(prevPicClass);
	console.log(curPicClass);
	console.log(prevPicClass);
	console.log(outputPic);


}

function newPic(curPic, direction){
	if (direction === "right" && curPic<7){
		return curPic + 1;
	} else if(direction ==="right"){
		return 1;
	} else if(direction ==="left" && curPic>1){
		return curPic -1;
	} else if(direction === "left"){
		return 7;
	}
}

$(".scrollButton").click(changePic);
