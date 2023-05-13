const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  // const [bookings, setBookings] = useState();

  const { _id, img, customerName, price, date, service, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 h-24 rounded">
            {img && <img src={img} alt="" />}
          </div>
        </div>
      </td>
      <div>
        <div className="font-bold">{customerName}</div>
      </div>

      <td>{price}</td>
      <td>{date}</td>
      <td>{service}</td>
      <td>
        {status === "confirm" ? (
          <span className="font-bold text-purple-600">confirmed</span>
        ) : (
          <button onClick={() => handleBookingConfirm(_id)}>
            Please Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookingRow;
