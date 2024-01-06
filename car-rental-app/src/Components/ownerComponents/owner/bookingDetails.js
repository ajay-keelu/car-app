import React, { useEffect, useState } from "react";
import axios from "axios";
const BookingDetails = () => {
  const [history, setHistory] = useState(["no"]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('owneremail')
    }
  }

  useEffect(() => {
    axios.get("http://localhost:1001/api/owner/booking", config).then((res) => {
      setHistory(res.data);
    });
  }, []);
  return (
    <>
      <div className="booking-table">
        {history[0] === "no" || history == [] ? (
          <code>no bookings found</code>
        ) : (
          <table class="table table-bordered">
            <tr>
              <th>Sno </th>
              <th> car name</th>
              <th> from date/time</th>
              <th> to date/time</th>
              <th> Car User Email</th>
              <th> status</th>
            </tr>
            {history.map((data, i) => {
              return (
                <>
                  <td>{i + 1}</td>
                  <td>{data.details.name}</td>
                  <td>{data.details.from}</td>
                  <td>{data.details.to}</td>
                  <td>{data.useremail}</td>
                  <td>
                    {data.details.status === "true" ? (
                      <span
                        className="bg-info"
                        style={{ padding: "05px 12px", borderRadius: "10px" }}
                      >
                        booked
                      </span>
                    ) : (
                      <span className="btn btn-danger">canceled</span>
                    )}
                  </td>
                </>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};

export default BookingDetails;
