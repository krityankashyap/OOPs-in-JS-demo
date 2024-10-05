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
    static get Builder() {
        class Builder {
            constructor(){
                this.name=""; //this name property belongs to builder class 
                this.price=0; //this price property belongs to builder class
                this.description=""; //this description property belongs to builder class
            }
            setName(incomingName){
                this.name = incomingName;
                return this;
            }
            setPrice(p){
                this.price = p;
                return this;
            }
            setDescription(desc){
                this.description = desc;
                return this;
            }
            build() {
                return new Product(this); 
    // this makes the new product class and call the product constructor where we pass this which arrows the builder object
            }
        }
        return new Builder(); // whe someone cals the builder getter , they will get a new builder object
    }
} 
 const p = Product.Builder
           .setName("iphone 11")
           .setPrice(29990)
           .setDescription("apple_india")
           .build()

 p.displayProduct();          