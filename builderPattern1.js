class Product{
    #name;
    #price;
    #description;

    constructor(builder){
        this.name = builder.name;

        if(builder.price > 0){
            this.price = builder.price;
        }
        else {
           this.price = undefined;
        }

        this.description = builder.description;
    }
    displayProduct(){
        console.log(this.name);
        console.log(this.price);
        console.log(this.description)
    }
}

const p = new Product({name: "iphone 11" , price:29990 , description:"Apple India"});
 p.displayProduct();
    