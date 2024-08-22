document.addEventListener('DOMContentLoaded', function () {
    const btnGo = document.getElementById('btn-go');

    btnGo.addEventListener('click', function() {
        let day = parseInt(document.getElementById('day').value);
        let month = parseInt(document.getElementById('month').value);
        let year = parseInt(document.getElementById('year').value);

        const currentDate = new Date();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth() + 1; 
        let currentYear = currentDate.getFullYear();

        let age = currentYear - year;

        if (currentMonth < month || (currentMonth === month && currentDay < day)) {
            age--;
        }

        function validateInput(){
            var status = true;
            if(month < 1 || month > 12){
                alert("Invalid Month. Please enter a valid month between 1 and 12.");
                status= false;
            }
            if(year > currentYear){
                alert("Invalid Year. You have entered future date.");
                status=false;
            }
            if (month === 2) {
                const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
                if (isLeapYear && day > 29) {
                    alert("Invalid day. Please enter day within 1 to 29 range for leap year");
                    status = false;
                } else if (!isLeapYear && day > 28) {
                    alert("Invalid day. Please enter day within 1 to 28 range for non leap year");
                    status = false;
                }
            }
            if(month==4|| month== 6|| month==9 || month==11 )
                {
                    if(day >= 31 ){
                        alert("Invalid day. Please enter day within 1 to 30 range");
                        status=false;
                    }
                }
            if( month !=2 && (day < 1 ||  day > 31)){
                    alert("Invalid day. Please enter day within 1 to 31 range");
                    status =  false;
                }
            return status;
        }

        if (!validateInput()) {
        } 
        else if (age < 15) {
            alert("You are restricted as you are under 15.");
        } 
        else {
            window.location.href = "https://www.google.com/";
            // console.log(`User Age: ${age}`);
        }
    });
});