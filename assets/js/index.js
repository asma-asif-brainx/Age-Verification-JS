document.addEventListener('DOMContentLoaded', function () {
    const btnGo = document.getElementById('btn-go');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    if (!btnGo) return; 

    function getInputValues() {
        return {
            day: parseInt(dayInput.value, 10),
            month: parseInt(monthInput.value, 10),
            year: parseInt(yearInput.value, 10)
        };
    }

    function validateDay(day, month, year) {
        if (isNaN(day) || day < 1 || day > 31) {
            alert("Invalid Day. Please enter a day between 1 and 31.");
            return false;
        }

        if (month === 2) {
            const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            if (isLeapYear && day > 29) {
                alert("Invalid day for a leap year. Please enter a day between 1 and 29.");
                return false;
            } else if (!isLeapYear && day > 28) {
                alert("Invalid day for a non-leap year. Please enter a day between 1 and 28.");
                return false;
            }
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            if (day > 30) {
                alert("Invalid day for this month. Please enter a day between 1 and 30.");
                return false;
            }
        }
        return true;
    }

    function validateMonth(month) {
        if (isNaN(month) || month < 1 || month > 12) {
            alert("Invalid Month. Please enter a month between 1 and 12.");
            return false;
        }
        return true;
    }

    function validateYear(year) {
        const currentYear = new Date().getFullYear();
        if (isNaN(year) || year < 1450 || year > currentYear) {
            alert("Invalid Year. Please enter a year between 1450 and the present.");
            return false;
        }
        return true;
    }

    function validateField(field, value, month, year) {
        switch (field) {
            case dayInput:
                return validateDay(value, month, year);
            case monthInput:
                return validateMonth(value);
            case yearInput:
                return validateYear(value);
            default:
                return false;
        }
    }

    function handleFieldBlur(event) {
        const { day, month, year } = getInputValues();
        validateField(event.target, event.target.value, month, year);
    }

    function handleButtonClick() {
        const { day, month, year } = getInputValues();

        if (isNaN(day) || isNaN(month) || isNaN(year) || day === '' || month === '' || year === '') {
            alert("Please fill in all fields.");
            return;
        }

        const isDayValid = validateDay(day, month, year);
        const isMonthValid = validateMonth(month);
        const isYearValid = validateYear(year);

        if (isDayValid && isMonthValid && isYearValid) {
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            const currentMonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear();

            let age = currentYear - year;
            if (currentMonth < month || (currentMonth === month && currentDay < day)) {
                age--;
            }

            if (age < 15) {
                alert("You are restricted as you are under 15.");
            } else {
                window.location.href = "https://www.google.com/";
            }
        }
    }

    dayInput.addEventListener('blur', handleFieldBlur);
    monthInput.addEventListener('blur', handleFieldBlur);
    yearInput.addEventListener('blur', handleFieldBlur);
    btnGo.addEventListener('click', handleButtonClick);
});
