class Apple {
    weights;
    constructor(weightApple) {
        this.weight = weightApple;
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        if (this.weight > 0) {
            return true;
        }else {
            return false;
        }
    }

    getWeight() {
        return this.weight;
    }
}

class human {
    name;
    gender;
    weightH;

    constructor(name, gender, weightH) {
        this.name = name;
        this.gender = gender;
        this.weightH = weightH;
    }

    isMale() {
        if(this.gender == 'male') {
            return this.gender = true;
        }

        if (this.gender == 'female') {
            return this.gender = false;
        }
    }

    eat(apple) {
        if (apple.isEmpty()) {
            this.weightH++;
            apple.decrease();
        }
    }

    say() {
        if(this.gender == 'male') {
            console.log(this.name+': Hello');
            console.log(this.name+': My name is Adam');
            console.log(this.name+': Is male');
        }
    }
}
