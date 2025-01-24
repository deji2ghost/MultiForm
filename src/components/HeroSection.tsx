import { useEffect, useState } from "react";
import Header from "./ui/header/header";
import Input from "./ui/input/input";
import { checkBox, subscription } from "../data/constant";

interface NumberProps {
  numbers: number;
}

interface PlanProps {
  img: string;
  name: string;
  monthly: string;
  yearly: string;
  extras: string;
}

const HeroSection = ({ numbers }: NumberProps) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    number: "",
    addOns: [],
    plan: {},
  });
  const [highlightDiv, setHighlightDiv] = useState<string | null>(null);
  const [monthly, setMonthly] = useState("monthly");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        addOns: [...prevData.addOns, { name: name, plan: value }],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        addOns: prevData.addOns.filter((item) => item.name !== name),
      }));
    }
  };

  const handleDiv = (planObj: PlanProps) => {
    setHighlightDiv((prev) => (prev === planObj.name ? null : planObj.name));
    setFormData({
      ...formData,
      plan: { 
        img: planObj.img,
        name: planObj.name,
        monthly: planObj.monthly,
        yearly: planObj.yearly,
        extras: planObj.extras,
      },
    });
  };

  useEffect(() => {
    console.log(formData);
    console.log(numbers);
  }, [formData, numbers]);

  return (
    <div className="bg-white flex flex-col gap-3 mx-auto w-[90%] absolute left-0 right-0 top-24 rounded-md p-6">
      {numbers === 1 ? (
        <>
          <Header
            description="Please provide your name, email address, and phone number"
            header="Personal Info"
          />
          <Input
            name="name"
            label="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g Stephen King"
          />
          <Input
            name="email"
            label="Email Address"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
          />
          <Input
            name="number"
            label="Phone Number"
            type="text"
            value={formData.number}
            onChange={handleChange}
            placeholder="e.g. 08063732262"
          />
        </>
      ) : numbers === 2 ? (
        <>
          <Header
            description="You have the option of monthly or yearly billing"
            header="Select your plan"
          />
          <div className="flex flex-col gap-4">
            {subscription.map((sub) => {
              return (
                <div
                  onClick={() => handleDiv(sub)}
                  className={`${
                    highlightDiv === sub.name
                      ? "border-PurplishBlue"
                      : "border-PastelBlue"
                  } border p-2 flex gap-3`}
                >
                  <div>
                    <img src={sub.img} />
                  </div>
                  <div>
                    <p>{sub.name}</p>
                    <p>{sub.monthly}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : numbers === 3 ? (
        <>
          <Header
            description="Please provide your name, email address, and phone number"
            header="Personal Info"
          />
          <>
            {checkBox.map((item) => (
              <div className="flex items-center ">
                <div>
                  <Input
                    name={item?.name}
                    type="checkbox"
                    value={monthly === "monthly" ? item?.monthly : item?.yearly}
                    onChange={handleCheckChange}
                    placeholder="e.g Stephen King"
                  />
                </div>
                <div>
                  <h1 className="">{item?.name}</h1>
                  <p className="">{item?.desc}</p>
                </div>
                <p>{monthly === "monthly" ? item?.monthly : item?.yearly}</p>
              </div>
            ))}
          </>
        </>
      ) : numbers === 4 ? (
        <>
          <Header
            description="Double-check everything looks okay before confirming"
            header="Finishing Up"
          />
          <>
            {checkBox.map((item) => (
              <div className="flex items-center ">
                <div>
                  <Input
                    name={item?.name}
                    type="checkbox"
                    value={monthly === "monthly" ? item?.monthly : item?.yearly}
                    onChange={handleCheckChange}
                    placeholder="e.g Stephen King"
                  />
                </div>
                <div>
                  <h1 className="">{item?.name}</h1>
                  <p className="">{item?.desc}</p>
                </div>
                <p>{monthly === "monthly" ? item?.monthly : item?.yearly}</p>
              </div>
            ))}
          </>
        </>
      ) : null}
    </div>
  );
};

export default HeroSection;
