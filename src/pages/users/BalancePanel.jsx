import React, { useState } from "react";
import FormInput from "../../components/form/FormInput";
import Switch from "../../components/form/Switch";
import FormInputWithUnit from "../../components/form/FormInputWithUnit";

const BalancePanel = () => {
    const [toggle, setToggle] = useState(true); // true = Add, false = Subtract
    const [wallet, setWallet] = useState("main");
    const [amount, setAmount] = useState("");
    const [remarks, setRemarks] = useState("");

    // Handle toggle switch changes
    const handleToggle = async (field, value) => {
        setToggle(value);
    }

    // Handle wallet select changes
    const handleWalletChange = (e) => {
        setWallet(e.target.value);
    };

    // Handle amount input changes
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };
    
    // Handle message textarea changes
    const handleMessageChange = (e) => {
        setRemarks(e.target.value);
    };

    const handleSubmit = async (e) => {
        
    e.preventDefault(); // Prevent default form submit reload

    const data = {
      wallet,
      amount: Number(amount),
      action: toggle ? "Add" : "Subtract",
      remarks,
    };

    try {
      const response = await fetch("https://your-api-url.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Optionally reset form or show success message here
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally show error message here
    }
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <div className="site-input-groups">
                <Switch
                    name=""
                    enabled={toggle}
                    labels={['Add', 'Subtract']}
                    onToggle={handleToggle}
                />
            </div>
            <div className="site-input-groups">
                <select className="form-select" name="wallet" value={wallet} onChange={handleWalletChange}>
                    <option value="main">Main Wallet</option>
                    <option value="profit">Profit Wallet</option>
                </select>
            </div>
            <div className="site-input-groups">
              <FormInputWithUnit
                label=""
                name="amount"
                value={amount}
                unit="INR"
                type="number"
                placeholder="Amount"
                onChange={handleAmountChange}
                required
                />
            </div>
            <div className="site-input-groups">
                <textarea
                name="remarks"
                className="form-textarea mb-0"
                value={remarks}
                onChange={handleMessageChange}
                />
            </div>
            <button type="submit" className="site-btn primary-btn w-100">Apply Now</button>
        </form>
    );

}
export default BalancePanel;