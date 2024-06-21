import cash from "/payments/cash.png"
import cashApp from "/payments/cashAPP.png"
import applePay from "/payments/applePay.png"
import zelle from "/payments/zelle.png"
import "../styles/payments.css"

export const Payments = () => {


  return (
    <>
    
    <h3 className="securePaymentsH3">Secure Payments</h3>
    <div className="payments">
    <img src={cash} alt="cash" />
    <img src={cashApp} alt="cashApp" />
    <img src={applePay} alt="applePay" />
    <img src={zelle} alt="zelle" />
    </div>
    </>
  )
}
