// function Circle(radius) {

//         this.radius = radius;
//         let defaultLocation = {x: 0, y: 0};
//         this.getDefaultLocation = function(){
//             return defaultLocation;
//         }

//         this.draw = function() {
//             computeOptimalLocation();
//             console.log('draw');
//             this.radius;
//         };
//     Object.defineProperty(this, 'defaultLocation', {
//         get : function(){
//           return defaultLocation;
//          },
//          set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('errorrr');
//             defaultLocation = value;
//          }
//       });
//     }

// const circle = new Circle(1);
// circle.defaultLocation;
// circle.defaultLocation = {x:1, y:2};
// circle.getDEfaultLocation;
// circle.location = {x:1};
// const propertyName = 'location4';
// circle[propertyName] = {x:4};
// circle['location1'] = {x:2};
// delete circle.location;
//circle.draw();

// for (let key in circle) {

//     if (typeof circle[key] != 'function')
//     console.log(key, circle[key])
// }
// const keys = Object.keys(circle);
// console.log(keys);

// circle.location = {x:1};

// console.log(circle.location);

// const properyName = ' center location'

// circle[properyName] = {x:2};


// console.log(circle[properyName]);
// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
//  console.log('circle has a darius');
// circle.draw.com

// x=20;
// y=x;

// x=30;

// let number = {value : 10};

// function increase(number) {

//     number.value++;
// }

// increase(number);
    
//     console.log(number);


