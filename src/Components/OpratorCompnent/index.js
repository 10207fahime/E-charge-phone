import hamrah from "../../assets/img/hamrah.jpg";
import irancell from "../../assets/img/irancell.jpg";
import rhitel from "../../assets/img/rhitel.jpg";
export function OpratorComponent({
  showImgHamrahAval,
  showImgIrancell,
  showImgRightel,
}) {
  return (
    <div className="d-flex justify-content-evenly flex-row mt-3 w-75 align-content-center">
      <img
        src={hamrah}
        width="50px"
        className={showImgHamrahAval ? "opacity-100" : "opacity-25"}
      />
      <img
        src={irancell}
        width="50px"
        className={showImgIrancell ? "opacity-100" : "opacity-25"}
      />
      <img
        src={rhitel}
        width="50px"
        className={showImgRightel ? "opacity-100" : "opacity-25"}
      />
    </div>
  );
}
