import { useState } from "react";
import Switch from "../../components/form/Switch";
import FormInputWithUnit from "../../components/form/FormInputWithUnit";

const CURRENCY = "INR";

const BalancePanel = ({ userId, username }) => {
  const [isAddMode, setIsAddMode] = useState(true);
  const [wallet, setWallet] = useState("main");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");


  const handleToggle = (_, value) => setIsAddMode(value);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") setAmount(value);
    if (name === "remarks") setRemarks(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submit reload
    const requestPayload = {
      userId,
      wallet,
      amount: parseFloat(amount),
      action: isAddMode ? "Add" : "Subtract",
      remarks,
    };

    const endpoint = isAddMode
      ? "/api/v1/transactions/adjustments/add"
      : "/api/v1/transactions/adjustments/subtract";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(requestPayload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the balance adjustment");
      }

      const result = await response.json();
      //const result = await response.text();
      console.log("Success:", result);

      // Optionally reset form or show success message here
      setAmount("");
      setRemarks("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <div className="site-input-groups">
        <Switch
          name=""
          enabled={isAddMode}
          labels={['Add', 'Subtract']}
          onToggle={handleToggle}
        />
      </div>
      {/* <div className="site-input-groups">
                <select className="form-select" name="wallet" value={wallet} onChange={handleWalletChange}>
                    <option value="main">Main Wallet</option>
                    <option value="profit">Profit Wallet</option>
                </select>
            </div> */}
      <div className="site-input-groups mb-0">
        <FormInputWithUnit
          label="Amount"
          name="amount"
          value={amount}
          unit={CURRENCY}
          type="number"
          placeholder="Amount"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="site-input-groups">
        <label className="box-input-label d-flex align-items-center gap-1">Remarks</label>
        <textarea
          name="remarks"
          className="form-textarea mb-0"
          value={remarks}
          onChange={handleInputChange}
          required={true}
        />
      </div>
      <button type="submit" className="site-btn primary-btn w-100">Apply Now</button>
    </form>
  );

}
export default BalancePanel;