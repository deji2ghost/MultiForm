import { useEffect, useState } from "react"
import Header from "./ui/header/header"
import Input from "./ui/input/input"
import { subscription } from "../data/constant"

interface NumberProps{
    numbers: number
}

const HeroSection = ({ numbers }: NumberProps) => {
    const [ formData, setFormData ] = useState({
        email: "",
        name: "",
        number: "",
    })
    const [ highlightDiv, setHighlightDiv ] = useState<string | null>(null)

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        })
    }

    const handleDiv = (name: string) => {
        setHighlightDiv((prev) => (prev === name ? null : name))
    }

    useEffect(()=> {
        console.log(formData)
        console.log(numbers)
    }, [formData, numbers])

  return (
    <div className="bg-white flex flex-col gap-3 mx-auto w-[90%] absolute left-0 right-0 top-24 rounded-md p-6">
        {numbers === 1 
        ?
        <>
            <Header description="Please provide your name, email address, and phone number" header="Personal Info"/>
            <Input name="name" label="Name" type="text" value={formData.name} onChange={handleChange} placeholder="e.g Stephen King"/>
            <Input name="email" label="Email Address" type="text" value={formData.email} onChange={handleChange} placeholder="e.g. stephenking@lorem.com"/>
            <Input name="number" label="Phone Number" type="text" value={formData.number} onChange={handleChange} placeholder="e.g. 08063732262"/>
        </>
        :
        <>
        <Header description="You have the option of monthly or yearly billing" header="Select your plan"/>
        <div className="flex flex-col gap-4">
            {
                subscription.map((sub)=> {
                    return(
                        <div onClick={()=> handleDiv(sub.name)} className={`${highlightDiv === sub.name ? "border-PurplishBlue" : "border-PastelBlue"} border p-2 flex gap-3`}>
                            <div>
                            <img src={sub.img}/>
                            </div>
                            <div>
                                <p>{sub.name}</p>
                                <p>{sub.monthly}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
        }
    </div>
  )
}

export default HeroSection
