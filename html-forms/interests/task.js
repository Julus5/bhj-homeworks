let interests = document.querySelectorAll(".interests");

for (let item of interests) {
    const closest = item.closest(".interest");
    if (closest) {
        const checkBox = closest.querySelector(".interest__check");
        checkBox.onclick = () => {
            interestCheck(closest, checkBox.checked);
            // if (checkBox.checked) {
            //     interestCheck(closest, true);
            // } else {
            //     interestCheck(closest, false);
            // };
        };
    };
};

function interestCheck(element, checked) {
    let items = element.querySelectorAll(".interest__check");
    for (let i of items) {
        i.checked = checked;
    };
};






