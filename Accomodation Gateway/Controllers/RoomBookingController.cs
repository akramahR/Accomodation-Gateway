using Accomodation_Gateway.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Accomodation_Gateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomBookingController : ControllerBase
    {
        // 1. Endpoint to book a room
        [HttpPost("book")]
        public IActionResult BookRoom([FromBody] RoomBookingRequest bookingRequest)
        {
            // Logic to book the room
            // Example: Check availability, confirm booking, return success/failure
            return Ok("Room booked successfully");
        }

        // 2. Endpoint to get room types
        [HttpGet("room-types")]
        public IActionResult GetRoomTypes()
        {
            // Logic to return room types
            List<string> roomTypes = new List<string> { "Single", "Double", "Suite" };
            return Ok(roomTypes);
        }

        // 3. Endpoint to get details of a specific room by ID
        [HttpGet("room/{roomId}")]
        public IActionResult GetRoom(int roomId)
        {
            // Logic to get room details
            var roomDetails = new { Id = roomId, Type = "Double", Price = 100 };
            return Ok(roomDetails);
        }

        // 4. Endpoint to get available dates for a specific room by ID
        [HttpGet("room/{roomId}/available-dates")]
        public IActionResult GetRoomAvailableDates(int roomId)
        {
            // Logic to get available dates for the room
            List<string> availableDates = new List<string> { "2024-10-08", "2024-10-09", "2024-10-15" };
            return Ok(availableDates);
        }
    }
}
