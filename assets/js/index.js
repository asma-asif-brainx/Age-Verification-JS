function ageCalculate() {
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    console.log(day);
    console.log(month);
    console.log(year);

    const currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1; 
    let currentYear = currentDate.getFullYear();

    console.log(currentDay);
    console.log(currentMonth);
    console.log(currentYear);

    let totalYears = currentYear - year;

    console.log(`User Age: ${totalYears}`);

    if (totalYears < 15) {
        alert("You are restricted as you are under 15.");
    } else {
        window.location.href="https://www.google.com/";
    }
}
