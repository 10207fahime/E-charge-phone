export function AmountComponent({ chargeAmounts, open, setAmount }) {
  return (
    <>
      {open ? (
        <div className="d-flex flex-nowrap justify-content-evenly mt-3">
          {chargeAmounts.map((item) => (
            <div
              className="card card-style"
              style={{ height: "40px", width: "90px" }}
            >
              <button
                onClick={(e) => setAmount(item)}
                className=" text-dark pt-2 border-0"
              >
                {" "}
                {item}
              </button>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
