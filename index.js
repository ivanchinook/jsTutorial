let car = {
    colour: 'red',
    drive: function() {
        const inner = function(){
            console.log(this);
        }.bind(this);
        inner();
    },
    honk: function(){
        const inner = () => {
            console.log(this);
        }
        inner();
    }
}
car.drive();
//car.honk();
//const boom = car.drive();
//console.log(car.drive);
//const boom1 = car.drive;
//console.log(boom1);
//boom1();
