// adding event listeners to page and defining 'submit' and 'delete' as two primary selectors

document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

// function to handle new items for list

const handleNewItemFormSubmit = function (event) {
    event.preventDefault(); // << stops forms from automatically submitting when the submit button is clicked

    const stoneCircleListItem = createStoneCircleListItem(event.target);
    const stoneCircleList = document.querySelector('#stone-circle-list')
    stoneCircleList.appendChild(stoneCircleListItem);

    event.target.reset();
}

// function to clear all lists from page

const handleDeleteAllClick = function (event) {
    const stoneCircleList = document.querySelector('#stone-circle-list');
    stoneCircleList.innerHTML = '';
}

// function to create new item in list

const createStoneCircleListItem = function (form) {
    const stoneCircleListItem = document.createElement('li');
    stoneCircleListItem.classList.add('stone-circle-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    stoneCircleListItem.appendChild(name);

    const osref = document.createElement('h3');
    osref.textContent = "OS Ref: " + form.osref.value; // << added string to preceed value in list
    stoneCircleListItem.appendChild(osref);

    const nearestTown = document.createElement('p');
    nearestTown.textContent = "Nearest Town: " + form.nearestTown.value; // << added string to preceed value in list
    stoneCircleListItem.appendChild(nearestTown);

    const condition = document.createElement('p');
    condition.textContent = "Condition: " + (form.condition.value); // << added string to preceed value in list
    stoneCircleListItem.appendChild(condition);

    return stoneCircleListItem;
}


