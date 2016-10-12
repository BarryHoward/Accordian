

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