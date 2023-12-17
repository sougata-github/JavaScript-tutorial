 
class railwayForm{

    submit(){
        console.log(this.name+" Form Submitted.");
    }

    cancel(){
        console.log(this.name+" Form Cancelled.");
    }

    fill(name)
    {
        this.name=name;
    }
}

let capeForm = new railwayForm();


let harryForm = new railwayForm();

harryForm.fill("Harry")

harryForm.cancel();


capeForm.fill("Cape");


capeForm.submit();

