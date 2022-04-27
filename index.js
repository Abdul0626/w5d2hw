//#1
let dog = {
    name: "Sparky",
    numLegs: 4
    };

//#2
let dog = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name);
  console.log(dog.numLegs);


  //#3
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  };
  
  dog.sayLegs();

  //#4
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();


  //#5
  function Dog () {
    this.name = "Sparky";
    this.color = "Red";
    this.numLegs = 4;
  }

  //#6
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  
  let hound = new Dog();

  //#7
  function  Dog(name, color, numLegs){
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
    
    let terrier = new Dog ("Chris", "Brown", "4");
    
    console.log(terrier);

    //#8
    function House(numBedrooms) {
        this.numBedrooms = numBedrooms;
      }
      
      // Only change code below this line
      let myHouse = new House(3);
      myHouse instanceof House;

      //#9
      function Bird(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird("Tweety");
      let ownProps = [];
      // Only change code below this line
      for (let property in canary) {
        if(canary.hasOwnProperty(property)){
          ownProps.push(property);
        }
      }
      console.log(ownProps);


      //#10
      function Dog(name) {
        this.name = name;
      }
      Dog.prototype.numLegs= 4;
      console.log(Dog.numLegs);
      
      // Only change code above this line
      let beagle = new Dog("Snoopy");

    
