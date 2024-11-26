import * as Yup from "yup"

export const SignInSchema = () => Yup.object({
    name: Yup.string().min(4).max(20).required("Please enter your name between 4 to 20 letters") , 
    phone: Yup.string().min(11).max(11).required("Please Enter Your Phone number"), 
    address: Yup.string().min(10).max(40).required("Please enter your address between 10 to 40 letters"), 
    email: Yup.string().email().required("Enter valid email address")
})