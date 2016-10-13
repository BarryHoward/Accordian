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


// Initialize 1st Pic
var currentPic = 1;
var outputPic = $(".image-Background");
outputPic.toggleClass("pic1");
$(".info").html(`"${carouselImages[0].title} by ${carouselImages[0].photographer_id}`);

function changePic(event){

	// Get button press and changes currentPic
	var target = $(event.target);
	var direction = target.attr('id');
	var previousPic = currentPic;
	currentPic = newPic(currentPic, direction);

	// Pulling values from carousel Arrayy
	var picUrl = carouselImages[currentPic-1].image_url;
	var picTitle = carouselImages[currentPic-1].title;
	var picId = carouselImages[currentPic-1].photographer_id;



	// Convert value to class name
	var outputPic = $(".image-Background");
	var curPicClass = "pic" + currentPic;
	var prevPicClass = "pic" + previousPic;

	$(".info").html(`"${picTitle}"" by ${picId}`);

	// Toggle Pics off and on.
	outputPic.toggleClass(curPicClass);
	outputPic.toggleClass(prevPicClass);
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
