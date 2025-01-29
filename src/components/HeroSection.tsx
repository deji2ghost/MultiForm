import { useEffect, useState } from "react";
import Header from "./ui/header/header";
import Input from "./ui/input/input";
import { checkBox, subscription } from "../data/constant";
import { PiToggleLeftBold, PiToggleRightBold } from "react-icons/pi";

interface NumberProps {
  numbers: number;
}

interface AddOn{
  name: string,
  plan: string,
  id: string;
}
interface FormDataProps {
  email: string;
  name: string;
  number: string;
  addOns: AddOn[];
  plan: PlanProps;
}
interface PlanProps {
  img: string;
  name: string;
  monthly: string;
  yearly: string;
  extras: string;
}

const HeroSection = ({ numbers }: NumberProps) => {
  const [formData, setFormData] = useState<FormDataProps>({
    email: "",
    name: "",
    number: "",
    addOns: [],
    plan: {
      img: "",
      name: "",
      monthly: "",
      yearly: "",
      extras: "",
    },
  });
  const [highlightDiv, setHighlightDiv] = useState<string | null>(null);
  const [monthly, setMonthly] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, id } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        addOns: [...prevData.addOns, { name: name, plan: value, id: id }],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        addOns: prevData.addOns.filter((item) => item?.name !== name),
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
    <div className="bg-white flex flex-col gap-6 mx-auto w-[90%] lg:w-full absolute lg:static left-0 right-0 top-24 rounded-md p-6 lg:px-0 lg:py-9">
      {numbers === 1 ? (
        <>
          <Header
            description="Please provide your name, email address, and phone number"
            header="Personal Info"
          />
          <div className="flex flex-col lg:gap-[18px]">
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
          </div>
        </>
      ) : numbers === 2 ? (
        <>
          <Header
            description="You have the option of monthly or yearly billing"
            header="Select your plan"
          />
          <div className="flex flex-col lg:flex-row gap-4">
            {subscription.map((sub) => {
              return (
                <div
                  onClick={() => handleDiv(sub)}
                  className={`${
                    highlightDiv === sub.name
                      ? "border-PurplishBlue"
                      : "border-LightGray"
                  } border  p-2 flex gap-9 lg:flex-col lg:w-[35%] rounded-lg cursor-pointer`}
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
          <div className="flex items-center justify-center gap-4 bg-Magnolia p-3">
            <p className={`${monthly ? "text-MarineBlue" : "text-CoolGray"} font-semibold`}>Monthly</p>
            <div onClick={() => setMonthly(!monthly)}>
              {monthly ? <PiToggleLeftBold /> : <PiToggleRightBold /> }
            </div>
            <p className={`${!monthly ? "text-MarineBlue" : "text-CoolGray"} font-semibold`}>Yearly</p>
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
              <div className="flex items-center justify-between border border-LightGray lg:py-2 lg:px-5 rounded-md">
                <div className="flex items-center gap-2">
                  <div>
                    <Input
                      name={item?.name}
                      type="checkbox"
                      id={monthly ? item.yearly : item?.monthly}
                      value={monthly ? item?.monthly : item?.yearly}
                      checked={formData.addOns.some((addOn) => addOn.name === item?.name)}
                      onChange={handleCheckChange}
                      placeholder="e.g Stephen King"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-[15px] font-medium text-MarineBlue">{item?.name}</h1>
                    <p className="text-[13px] text-CoolGray">{item?.desc}</p>
                  </div>
                </div>
                <p className="text-[14px] text-PurplishBlue">{monthly ? item?.monthly : item?.yearly}</p>
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
          <div className="bg-LightBlue">
            <div className="flex justify-between border-b">
              <div className="flex flex-col gap-1">
                <h1>{formData?.plan?.name} ({monthly ? "Monthly" : "Yearly"})</h1>
                <p onClick={() => setMonthly(!monthly)}>Change</p>
              </div>
              <div className="">
                { monthly ? formData.plan.monthly : formData.plan.yearly }
              </div>
            </div>
            <div>
              { 
                formData.addOns.map(item => {
                  return(
                    <div className="flex justify-between">
                      <h1>{item?.name}</h1>
                      <p>{monthly ? item.plan : item?.id}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default HeroSection;
