import React from "react";

const RandomData = ({ data }) => {
  return (
    <div>
      <h1>Random stuff</h1>
      <div>
        {data.map((i) => (
          <div>
            <h4>{i.name}</h4>
            <ol>
              <li>Phone: {i.phone}</li>
              <li>Email: {i.email}</li>
              <li>Address: {i.address}</li>
              <li>Zip code: {i.postalZip}</li>
              <li>Country: {i.country}</li>
              <img src={i.img} width="250" />
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
};


export default RandomData;