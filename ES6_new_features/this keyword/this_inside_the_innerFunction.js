/**
 * this inside the inner function 
 */
let person = {
    name : "Panparag",
    greet () {
        console.log(this);
        console.log(this.name);

        function innerFunc() {
            console.log(this);// {window object}
            console.log(this.name); // undefined
        }
        innerFunc()

    }
}

person.greet()