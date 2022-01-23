let Circle = function(radius) {
    this.radius = radius;
};

Circle.prototype.getRadius = function() {
    return this.radius;
};

Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
};

let circle = new Circle(4);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);