const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`There are ${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
