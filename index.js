function adjust() {
    old_rupees = document.getElementById("old-rupees").value;
    old_year = document.getElementById("old-year").value;
    new_year = document.getElementById("new-year").value;

    // cpi = (cost in given year/cost in base year)*100
    new_rupees = old_rupees * (multiplier(new_year) / multiplier(old_year));
}

function multiplier() {
    cpi_json = JSON.parse(cpi_data);
}
