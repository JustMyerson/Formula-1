import React, { useEffect, useState } from "react";

function Drivers() {
  const [drivers, setDrivers] = useState(null);
  // Drivers is the value we want to create
  // setDrivers allows us to set these drivers

  useEffect(() => {
    async function doFetch() {
      const data = await fetch("http://ergast.com/api/f1/2022/drivers.json");
      const json = await data.json();
      const driversList = json.MRData.DriverTable.Drivers;
      setDrivers(driversList);
    }
    doFetch();
  }, []);

  if (!drivers) {
    return <div>Fetching drivers</div>;
  }

  return (
    <div>
      {" "}
      {drivers.map(({ givenName: firstName, familyName }) => (
        <div>
          {firstName} {familyName}
        </div>
      ))}
      {drivers.map(({ nationality: country }) => (
        <div>{country}</div>
      ))}
    </div>
  );
}

export default Drivers;
