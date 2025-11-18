import { Phone } from "lucide-react"

export const registerFormControls =[
    {
        name:'patientName',
        label:'Patient Name',
        placeholder:'Enter your name',
        componentType:'input',
        type:'text'
    },
    {
        name:'email',
        label:'Email',
        placeholder:'Enter your email',
        componentType:'input',
        type:'email'
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter your password',
        componentType:'input',
        type:'password'
    },
    {
        name:'age',
        label:'Age',
        placeholder:'Enter your age',
        componentType:'input',
        type:'number'
    },
    {
       name:'phone',
       label:'Phone number',
       placeholder:'Enter your phone number',
       componentType:'input',
       type:'number'
    },
    {
        name:'gender',
        label:'Gender',
        placeholder:'Select your gender',
        componentType:'select',
        options:[
            {id:'male', label   :'Male'},
            {id:'female', label:'Female'},
            {id:'other', label :'Other'},
        ]
    }
]

export const loginFormControls = [
    {
        name:'email',
        label:'Email',
        placeholder:'Enter your email.',
        componentType:'input',
        type:'email'
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter your password.',
        componentType:'input',
        type:'password'
    }
]