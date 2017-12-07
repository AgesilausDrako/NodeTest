const DETAIL_IMAGE_SELECTOR = "[data-image-role='target']";
const DETAIL_TITLE_SELECTOR = "[data-title-role='title']";
const DETAIL_BULLETS_SELECTOR = "[data-bullets-role='bullets']";
const DETAIL_PRICE_SELECTOR = "[data-price-role='price']";
const ITEM_LINK_SELECTOR = "[data-image-role='trigger']";

document.getElementById("cart-btn").addEventListener("click", () => {
    const element = document.getElementById("main-price");
    const text = element.innerText || element.textContent;
    element.innerHTML = text;
    alert(`This washer costs: ${text}.`);
  });

const setDetails = (imageUrl, titleText, bullets, price) => {
    'use strict';
    const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
  
    const detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

    const detailBullets = document.querySelector(DETAIL_BULLETS_SELECTOR);
    detailBullets.textContent = bullets;

    const detailPrice = document.querySelector(DETAIL_PRICE_SELECTOR);
    detailPrice.textContent = price;   
}

const imageFromItem = (item) => {
    'use strict';
    return item.getAttribute('data-image-url');
}
  
const titleFromItem = (item) => {
    'use strict';
    return item.getAttribute('data-title-role')
}

const bulletsFromItem = (item) => {
    'use strict';
    return item.getAttribute('data-bullets-role')
}

const priceFromItem = (item) => {
    'use strict';
    return item.getAttribute('data-price-role')
}

const setDetailsFromItem = (item) => {
    'use strict'
    setDetails(imageFromItem(item), titleFromItem(item), bulletsFromItem(item), priceFromItem(item));
}

const addItemHoverHandler = (item) => {
    item.addEventListener('mouseover', () => {
        setDetailsFromItem(item);
    });
}

const getItemsArray = () => {
    'use strict';
    const items = document.querySelectorAll(ITEM_LINK_SELECTOR);
    const itemArray = [].slice.call(items);
    return itemArray;
}

const initializeEvents = () => {
    'use strict';
    const items = getItemsArray();
    items.forEach(addItemHoverHandler);
}

initializeEvents();