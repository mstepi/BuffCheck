window.onload = function () {
    restoreCheckboxState();
    restoreExpandableContentCheckboxes();
};

function saveCheckboxState() {
    var checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(function(checkbox, index) {
        localStorage.setItem('checkbox' + checkbox.dataset.id, checkbox.checked);
    });
}

function restoreCheckboxState() {
    var checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(function(checkbox, index) {
        var savedState = localStorage.getItem('checkbox' + checkbox.dataset.id);
        if (savedState === 'true') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}

function resetCheckboxes() {
    var checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
        saveCheckboxState();
    });
}

document.addEventListener('change', function (event) {
    var checkbox = event.target;
    var checkedCheckboxes = document.querySelectorAll('.checkbox:checked');
    
    if (checkedCheckboxes.length > 3) {
        checkbox.checked = false;
    } else {
        saveCheckboxState();
    }
});


function toggleExpandableContent() {
    var expandableContent = document.getElementById('expandable-content');
    expandableContent.style.display = (expandableContent.style.display === 'none' || expandableContent.style.display === '') ? 'block' : 'none';
}


function saveExpandableContentCheckboxesState() {
    var expandableCheckboxes = document.querySelectorAll('#expandable-content input[type="checkbox"]');
    expandableCheckboxes.forEach(function (checkbox, index) {
        localStorage.setItem('expandableCheckbox' + index, checkbox.checked);
    });
}

function restoreExpandableContentCheckboxes() {
    var expandableCheckboxes = document.querySelectorAll('#expandable-content input[type="checkbox"]');
    expandableCheckboxes.forEach(function (checkbox, index) {
        var savedState = localStorage.getItem('expandableCheckbox' + index);
        if (savedState === 'true') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}

function resetExpandableContentCheckboxes() {
    var expandableCheckboxes = document.querySelectorAll('#expandable-content input[type="checkbox"]');
    expandableCheckboxes.forEach(function (checkbox, index) {
        checkbox.checked = false;
        saveExpandableContentCheckboxesState();
    });
}

document.addEventListener('change', function (event) {
    var checkbox = event.target;

    // Check if the change event was triggered by an expandable-content checkbox
    if (checkbox.closest('#expandable-content')) {
        saveExpandableContentCheckboxesState();
    } else {
        var checkedCheckboxes = document.querySelectorAll('.checkbox:checked');

        if (checkedCheckboxes.length > 3) {
            checkbox.checked = false;
        } else {
            saveCheckboxState();
        }
    }
});

document.getElementById('expand-trigger-text').addEventListener('click', function() {
    toggleExpandableContent();
});
