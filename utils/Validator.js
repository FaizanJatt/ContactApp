
// const Validator = {
   
// }
class Validator{
    constructor(name,email,num,message){
        this.name = !this.ValidateName(name),
        this.email = !this.ValidateEmail(email),
        this.num = !this.ValidateNum(num),
        this.message = !this.ValidateMessage(message)
    }
    ValidateEmail(mail){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
            alert("Email is not correct")
            return (false)
        }
    ValidateName(name){
        if(name.length > 3)return true;
        alert("Name must be of at least 3 Characters")
         return false
    }
    ValidateMessage(message){
        if(message.length > 10) return true;
        alert("Message must be of at least 10 Characters");

         return false
    }
    ValidateNum(num){
        if(num.toString().length === 11 && num[0] == 0)return true;
            alert("Number must be in the format 07777777777");
            return false;
    }
    

}

export default Validator;