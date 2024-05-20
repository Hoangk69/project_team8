// đối ứng với checkbox đầu tiên
const checkboxBaoMat = document.getElementById('bao-mat-checkbox');
const labelCheckboxBaoMat = document.getElementById('bao-mat-checkbox-label');
checkboxBaoMat.addEventListener('change', function() {
    if (checkboxBaoMat.checked) {
        labelCheckboxBaoMat.classList.add('checked-label');
    } else {
        labelCheckboxBaoMat.classList.remove('checked-label');
    }
});

// đối ứng với checkbox thứ hai
const checkboxDuHoc = document.getElementById('du-hoc-checkbox');
const labelcheckboxDuHoc = document.getElementById('du-hoc-checkbox-lable');
checkboxDuHoc.addEventListener('change', function() {
    if (checkboxDuHoc.checked) {
        labelcheckboxDuHoc.classList.add('checked-label');
    } else {
        labelcheckboxDuHoc.classList.remove('checked-label');
    }
});