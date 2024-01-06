import React, { useState, useEffect } from "react";
import axios from "axios";
const PaymentDetails = () => {
  const [payments, setPayments] = useState(["no"]);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('useremail')
    }
  }
  useEffect(() => {
    axios.get("http://localhost:1001/api/user/payment", config).then((res) => {
      setPayments(res.data);
      console.log('payment : ', res.data)
    });
  }, []);
  return (
    <>
      <div className="payment-table table-striped">
        {payments[0] === "no" || payments == [] ? (
          <code> no payments yet/ loading please wait <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div> </code>
        ) : (
          <table class="table table-bordered">
            <tr>
              <th>Sno </th>
              <th> car name</th>
              <th> Card Number</th>
              <th> card holder name</th>
              <th> Car Owner Email</th>
              {/* <th> Car License id</th> */}
              <th> status</th>
            </tr>
            {payments.map((data, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{data.details.name}</td>
                  <td>{data.details.cardNumber}</td>
                  <td>{data.details.cardHname}</td>
                  <td>{data.owneremail}</td>
                  {/* <td>{data.details.liId}</td> */}
                  <td style={{ cursor: "pointer" }}>
                    {data.details.status === "true" ? (
                      <span
                        className="btn bg-info"
                        style={{ padding: "05px 12px", borderRadius: "10px" }}
                      >
                        booked
                      </span>
                    ) : (
                      <span className="btn btn-danger">canceled</span>
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

export default PaymentDetails;
