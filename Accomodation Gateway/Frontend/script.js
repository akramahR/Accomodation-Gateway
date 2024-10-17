document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const roomId = document.getElementById('roomId').value;

    fetch(`http://localhost:5000/rooms/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ RoomId: roomId })
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('bookingResult').innerText = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('bookingResult').innerText = 'Error booking room.';
        });
});

// Fetch room types
document.getElementById('getRoomTypesButton').addEventListener('click', function () {
    fetch(`http://localhost:5000/api/rooms/room-types`)
        .then(response => response.json())
        .then(data => {
            const roomTypesList = document.getElementById('roomTypesList');
            roomTypesList.innerHTML = ''; // Clear previous results
            data.forEach(type => {
                const li = document.createElement('li');
                li.innerText = type;
                roomTypesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
});

// Get room details
document.getElementById('getRoomDetailsButton').addEventListener('click', function () {
    const roomId = document.getElementById('getRoomId').value;

    fetch(`http://localhost:5000/api/rooms/room/${roomId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Room not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('roomDetails').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('roomDetails').innerText = 'Error fetching room details.';
        });
});

// Check room availability
document.getElementById('checkAvailabilityButton').addEventListener('click', function () {
    const roomId = document.getElementById('availabilityRoomId').value;

    fetch(`http://localhost:5000/api/rooms/room/${roomId}/available-dates`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('availabilityResult').innerText = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('availabilityResult').innerText = 'Error checking availability.';
        });
});
