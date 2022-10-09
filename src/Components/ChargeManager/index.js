import { useEffect, useReducer, useState } from "react";
import { Reducer } from "../../reducer/Reducer";
import { OpratorComponent } from "../OpratorCompnent";
import { ActionType } from "./../../reducer/ActionType";
import {
  phoneNumberDetail,
  phoneNumberValidator,
} from "@persian-tools/persian-tools";
import { AmountComponent } from "../AmountsComponent";

export function ChargeManager() {
  const [showImgHamrahAval, setShowImgHamrahAval] = useState(false);
  const [showImgIrancell, setShowImgIrancell] = useState(false);
  const [showImgRightel, setShowImgRightel] = useState(false);
  const [value, setValue] = useState();
  const [amount, setAmount] = useState([]);
  const [open, setOpen] = useState(false);
  const [chargeAmounts, setChargeAmounts] = useState("");
  const [hasError, setHasError] = useState(false);
  const initialState = [];
  const [state, dispatch] = useReducer(Reducer, initialState);
  const charge_amouts_hamrahAval = ["10000", "20000", "50000", "100000"];
  const charge_amouts_irancell = ["15000", "25000", "500000", "200000"];
  const charge_amouts_rightel = ["70000", "140000", "60000", "30000"];
  const operatorPhoneNumber = phoneNumberDetail(value);
  const validatePhoneNumber = phoneNumberValidator(value);
  useEffect(() => {
    if (operatorPhoneNumber) {
      if (operatorPhoneNumber.operator == "همراه اول") {
        setOpen(true);
        setShowImgHamrahAval(true);
        setChargeAmounts(charge_amouts_hamrahAval);
        setHasError(false);
      } else if (operatorPhoneNumber.operator == "ایرانسل") {
        setShowImgIrancell(true);
        setChargeAmounts(charge_amouts_irancell);
        setOpen(true);
        setHasError(false);
      } else if (operatorPhoneNumber.operator == "رایتل") {
        setShowImgRightel(true);
        setHasError(false);
        setChargeAmounts(charge_amouts_rightel);
        setOpen(true);
      }
    }
    if (!value) {
      setHasError(false);
      setShowImgHamrahAval(false);
      setShowImgIrancell(false);
      setShowImgRightel(false);
      setChargeAmounts([]);
    } else if (validatePhoneNumber === false) {
      setHasError(true);
      setShowImgHamrahAval(false);
      setShowImgIrancell(false);
      setShowImgRightel(false);
    }
  }, [value]);

  function handleAddCharge(value, amount) {
    dispatch({
      type: ActionType.ADD_CHARGE,
      payload: {
        phoneNumber: value,
        amount: amount,
      },
    });
  }
  console.log(state, "state");
  return (
    <div className="" style={{ height: "900px" }}>
      <div className="bg-image"></div>
      <div className="row d-flex justify-content-center">
        <div className="bg-text" style={{ height: "400px", width: "600px" }}>
          <div className="mt-5 row d-flex justify-content-around align-content-center">
            <label htmlFor="phone" className=" col-form-label ml-5">
              Enter your number
            </label>
            <input
              type="text"
              maxlength="11"
              className="form-control w-50"
              style={
                hasError ? { border: "1px solid red" } : { border: "none" }
              }
              id="phone"
              name="phone"
              value={value}
              required
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            {hasError ? (
              <span style={{ color: "red", fontSize: "12px" }}>
                phone number is wrong!
              </span>
            ) : (
              ""
            )}
            <OpratorComponent
              showImgRightel={showImgRightel}
              showImgHamrahAval={showImgHamrahAval}
              showImgIrancell={showImgIrancell}
            />

            <AmountComponent
              chargeAmounts={chargeAmounts}
              open={open}
              setAmount={setAmount}
            />
            <div className="d-flex justify-content-center mt-5">
              <button
                className="btn btn-outline-primary btn-sm w-25"
                type="submit"
                onClick={() => handleAddCharge(value, amount)}
              >
                buy{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
