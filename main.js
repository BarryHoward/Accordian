

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
	var newOpen = Number(target.attr('id').slice(-1));
	switchOpen(newOpen);

	var conTarget = $(`#content${newOpen}`);
	console.log(conTarget);
	conTarget.toggleClass("open");
}

$(".header").click(toggleSize);