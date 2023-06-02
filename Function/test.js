function car({ brand, maxSpeed, wheelCount }) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this.wheelCount = wheelCount;
  }
  
  const myCar = new car({ brand: 'Toyota', maxSpeed: 200, wheelCount: 4 });
  console.log(myCar);