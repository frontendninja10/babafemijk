const createCar = () => {
  const car = {};

  const addCarProperty = (id: string, value: string) => {
    car[id] = value;
  };

  return {
    car,
    addCarProperty,
  };
};

// We can ensure some type safety by typing the parameters of the 'addCarProperty' function
const addCarProperty = (id: string, value: string) => {
  car[id] = value;
};
// Now the function is a bit type safe because we have typed its parameters, but TypeScript is still unhappy because the object
// the function is trying to manipulate is not type safe.
// We are trying to give the car object properties that it is not aware of.
// For objects in TypeScript to be type safe, you must give it known properties names and known value types. E.g.

interface car {
  name: string;
  brand: number;
  color: string;
  speed: number;
}

// But typing objects this way means that you know all the property names the object is going to have. This defeats our objective
// which is to create a function that allows different information about a car. We want users to be able to specify
// anything about their dream car. We do not want to restrict how much properties the car object can have.

// So how can we allow users create a car model without restricting the amount of properties they can add to the model,
// and at the same time, ensure that the car model object is type safe.
