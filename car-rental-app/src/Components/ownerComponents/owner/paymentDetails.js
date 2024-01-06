import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentDetails = () => {
  const [payments, setPayments] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('owneremail')
    }
  }
  useEffect(() => {
    axios.get("http://localhost:1001/api/owner/payment", config).then((res) => {
      setPayments(res.data);
    });
  }, []);
  return (
    <>
      <div className="payment-table">
        {payments[0] === "no" || payments.length == 0 ? (
          <code>no payments yet </code>
        ) : (
          <table class="table table-bordered">
            <tr>
              <th>Sno </th>
              <th> car name</th>
              <th> Card Number</th>
              <th> card holder name</th>
              <th> Car User Email</th>
              {/* <th> Car License id</th> */}
              <th> status</th>
            </tr>
            {payments.map((data, i) => {
              return (
                <>
                  <td>{i + 1}</td>
                  <td>{data.details.name}</td>
                  <td>{data.details.cardNumber}</td>
                  <td>{data.details.cardHname}</td>
                  <td>{data.useremail}</td>
                  {/* <td>{data.liId}</td> */}
                  <td>
                    {data.details.status === "true" ? (
                      <span
                        className="btn btn-info"
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

export default PaymentDetails;
