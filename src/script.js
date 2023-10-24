document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "bloodPressureReadings": [
            {
                "date": "10-24-2023",
                "time": "8:40am",
                "systolic": 119,
                "diastolic": 74,
                "pulse": 65
            },
            {
                "date": "10-24-2023",
                "time": "8:39am",
                "systolic": 139,
                "diastolic": 90,
                "pulse": 73
            },
            {
                "date": "10-23-2023",
                "time": "9:39pm",
                "systolic": 122,
                "diastolic": 84,
                "pulse": 58
            },
            {
                "date": "10-23-2023",
                "time": "9:37pm",
                "systolic": 130,
                "diastolic": 81,
                "pulse": 60
            },
            {
                "date": "10-22-2023",
                "time": "10:22pm",
                "systolic": 122,
                "diastolic": 86,
                "pulse": 61
            },
            {
                "date": "10-21-2023",
                "time": "10:52pm",
                "systolic": 121,
                "diastolic": 78,
                "pulse": 58
            },
            {
                "date": "10-19-2023",
                "time": "10:13pm",
                "systolic": 127,
                "diastolic": 76,
                "pulse": 63
            },
            {
                "date": "10-17-2023",
                "time": "9:45pm",
                "systolic": 126,
                "diastolic": 72,
                "pulse": 67
            },
            {
                "date": "10-16-2023",
                "time": "10:15pm",
                "systolic": 129,
                "diastolic": 85,
                "pulse": 60
            },
            {
                "date": "10-15-2023",
                "time": "10:08pm",
                "systolic": 126,
                "diastolic": 71,
                "pulse": 65
            },
            {
                "date": "10-14-2023",
                "time": "11:56am",
                "systolic": 133,
                "diastolic": 84,
                "pulse": 76
            },
            {
                "date": "10-13-2023",
                "time": "3:38pm",
                "systolic": 143,
                "diastolic": 89,
                "pulse": 64
            },
            {
                "date": "10-12-2023",
                "time": "9:55pm",
                "systolic": 124,
                "diastolic": 88,
                "pulse": 58
            },
            {
                "date": "10-12-2023",
                "time": "9:47am",
                "systolic": 136,
                "diastolic": 88,
                "pulse": 59
            },
            {
                "date": "10-11-2023",
                "time": "10:51am",
                "systolic": 134,
                "diastolic": 86,
                "pulse": 65
            },
            {
                "date": "10-10-2023",
                "time": "9:30am",
                "systolic": 139,
                "diastolic": 80,
                "pulse": 74
            }
        ]
    };

    const tableBody = document.getElementById("bpReadingsTableBody");

    data.bloodPressureReadings.forEach(reading => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${reading.date}</td>
            <td>${reading.time}</td>
            <td>${reading.systolic}</td>
            <td>${reading.diastolic}</td>
            <td>${reading.pulse}</td>
        `;
        tableBody.appendChild(row);
    });
});
