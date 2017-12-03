const renderData = (results) => {
    const itemDisplay = document.querySelector("#sub-items");
    results.map((item, index) => {
        const productDisplay = item.networkPrice[index];

        itemDisplay.appendChild(productDisplay);
        console.log("got here");
    });
}

renderData();