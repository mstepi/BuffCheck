// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Items for the checkbox list
    const items = [
        "ボスキラー",
        "高級ボスキラー秘薬",
        "伝説の英雄秘薬",
        "高級武器鍛錬",
        "ユニオン",
        "エキストリーム緑",
        "エキストリーム赤",
        "MVPスーパーパワーバフ",
        "ギルドの祝福",
        "マシュールのプレゼント気象効果",
        "10段階〇〇秘薬",
        "りんご飴",
        "無敵の秘薬",
        "特殊コア（一撃必殺）",
        "シードリング",
        "ファミリア"
    ];

    const checkboxList = document.getElementById("checkbox-list");

    // Populate the checkbox list dynamically
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.className = "checkbox-list-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = item;
        checkbox.id = item.replace(/\s+/g, "-"); // Replace spaces with dashes for IDs
        listItem.appendChild(checkbox);

        const label = document.createElement("label");
        label.htmlFor = item.replace(/\s+/g, "-");
        label.innerText = item;
        listItem.appendChild(label);

        checkboxList.appendChild(listItem);
    });

    // Check the stored state of checkboxes on page load
    restoreCheckboxState();

    // Event listener to save checkbox state on change
    checkboxList.addEventListener("change", function (event) {
        saveCheckboxState(event.target);
    });
});

// Function to save checkbox state in local storage
function saveCheckboxState(checkbox) {
    const checkboxState = JSON.parse(localStorage.getItem("checkboxState")) || {};
    checkboxState[checkbox.value] = checkbox.checked;
    localStorage.setItem("checkboxState", JSON.stringify(checkboxState));
}

// Function to restore checkbox state from local storage
function restoreCheckboxState() {
    const checkboxState = JSON.parse(localStorage.getItem("checkboxState")) || {};
    const checkboxes = document.querySelectorAll("input[type=checkbox]");

    checkboxes.forEach(checkbox => {
        if (checkboxState.hasOwnProperty(checkbox.value)) {
            checkbox.checked = checkboxState[checkbox.value];
        }
    });
}

// Reset function for the Reset button
function resetCheckboxes() {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        saveCheckboxState(checkbox);
    });
}



