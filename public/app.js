


const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// select tab content item
function selectItem(e) {
	removeBorder();
	removeShow();
	//add border to current class
	this.classList.add('tab-border');
	//grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`)
	console.log(this.id);
	tabContentItem.classList.add('show')

}
function removeBorder() {
	tabContentItems.forEach(item => item.classList.remove('show'));
}

function removeShow() {
	tabItems.forEach(item => item.classList.remove('tab-border'));
}



//listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));
  