
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    if(numAnimals>0&&avgFood>0){
        return numAnimals*avgFood;
    }else{
        return -1;
    }
    
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    var mostTraffic;
    var mostPopularDay;
    var mostPopularDays=[];
    if(week&&week!=""){
        mostPopularDay=week[0].name;
        for(var i=0;i<week.length;i++){
            if(week[i+1].traffic>week[i].traffic){
                mostPopularDay=week[i+1].name;
                mostTraffic=week[i+1].traffic;
            }
            mostPopularDays.push(mostPopularDay);
        }
        for(var i=0;i<week.length;i++){
            if(week[i].traffic==mostTraffic&&week[i].name!=mostPopularDay){
                mostPopularDays.push(week[i].name);
            }
        }
        // if(week.length==1){
        //     mostPopularDays=week[0].name;
        // }else{
        //     for(var i=0;i<week.length;i++){
        //         if(week[i].traffic>week[i+1].traffic){
        //             mostPopularDay=week[i].name;
        //             mostTraffic=week[i].traffic;
        //         }else{
        //             mostPopularDay=week[i+1].name;
        //             mostTraffic=week[i+1].traffic;
        //         }
        //     }
        //     for(var i=0;i<week.length;i++){
        //         if(week[i].traffic==mostTraffic&&week[i].name!=mostPopularDay){
        //             mostPopularDays.push(week[i].name);
        //         }
        //     }
        }
    }else{
        mostPopularDays=null;
    }
    // if(week.every((currentValue)=>currenteValue>0){
    //     mostPopularDay=week[week.length-1].name;
    //     var i=week.length-1;
    //     do{
    //         if(week[i-1].traffic==week[i].traffic){
    //             mostPopularDay.push(week[week.length-1].name);
    //         }
    //         i--;
    //     }while(i<=0);
    // }
    return mostPopularDays;
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
    var animal={};
    var animals=[];
    if((names)&&(types)&&(breeds)&&((names.lenght==types.length)&&(types.length==breeds.length))){
        for(var i=0;i<=names.length-1;i++){
            // if(names[i]&&types[i]&&breeds[i]){
                animal.name=names[i];
                animal.type=types[i];
                animal.breed=breeds[i];
                animals.push(animal);
            // }
            // else{
            //     animals=[];
            //     i=names.length;
            // }
        }
    
    }
    return animals;
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

