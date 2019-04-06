// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.


class CuboidMaker2 {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
  }
 
    volume() { 
        return this.length * this.width * this.height; 
    }
  
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
  
}
  
  let test1 = new CuboidMaker2(4,5,5);
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(test1.volume(test1));  100
 console.log(test1.surfaceArea(test1));  130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.