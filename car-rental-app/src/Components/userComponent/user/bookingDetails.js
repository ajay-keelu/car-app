import React, { useState, useEffect } from "react";
import axios from "axios";
const BookingDetails = () => {
  const [history, setHistory] = useState(["no"]);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('useremail')
    }
  }
  useEffect(() => {
    axios.get("http://localhost:1001/api/user/booking", config).then((res) => {
      setHistory(res.data);
    });
  }, []);
  return (
    <>
      <div className="booking-table">
        {history[0] === "no" ? (
          <code>no bookings found <i class="fas fa-spinner fa-pulse"></i></code>
        ) : (
          <table class="table table-bordered">
            <tr>
              <th>Sno </th>
              <th> car name</th>
              <th> from date/time</th>
              <th> to date/time</th>
              <th> Car Owner Email</th>
              <th> status</th>
            </tr>
            {history.map((data, i) => {
              return (
                <tr>

                  <td>{i + 1}</td>
                  <td>{data.details.name}</td>
                  <td>{data.details.from}</td>
                  <td>{data.details.to}</td>
                  <td>{data.owneremail}</td>
                  <td style={{ cursor: "pointer" }}>
                    {data.details.status === "true" ? (
                      <span
                        className="btn bg-info"
                      // style={{ padding: "05px 12px", borderRadius: "10px" }}
                      >
                        booked
                      </span>
                    ) : (
                      <span className="btn bg-danger">canceled</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};

export default BookingDetails;
