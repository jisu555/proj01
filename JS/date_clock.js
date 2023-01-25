var Target = document.getElementById("date");
        function date() {
            var time = new Date();

            var month = time.getMonth();
            var date = time.getDate();
            var year = time.getFullYear();

            var hours = time.getHours();
            var minutes = time.getMinutes();

            var AmPm ="AM";
            if(hours > 12){   
                var AmPm ="PM";
                hours %= 12;
            }

            Target.innerText = 
            `${month + 1}/${date}/${year} ` +
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}` + ' SEOUL';
               
            Target_apm.innerText = `${AmPm}`;
        }
        date();
        setInterval(date, 1000); // 1초마다 실행


