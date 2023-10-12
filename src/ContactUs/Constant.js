import *as Yup from "yup";

export const Form_Field =
{

	name:"",
	subject:"",
	email:"",
	phone:"",
	texthere:""
};

const newPageURL = 'E:\CodeNG\Hospitania\my-app\src\ContactUs\E404.js';


export const ValidationField= Yup.object().shape({
	name: Yup.string()
	.min(5,"Name is too short")
	.max(15,"Name is to large")
	.required("This ia requied Field"),

	subject: Yup.string()
	.min(5,"subject is too short")
	.max(15,"subject is to large")
	.required("This ia requied Field"),

	email: Yup.string()
	.email("please enter correct email address")
	.required("This ia requied Field"),

	phone: Yup.string()
	.max(10,"Maxmimum phone number should be 10")
	.required("This ia requied Field"),

	texthere: Yup.string()
	.min(5,"Text is too short")
	.max(20,"Text is to large")
	.required("This ia requied Field"),
})