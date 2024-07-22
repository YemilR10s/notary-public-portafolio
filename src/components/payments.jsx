import cash from "/payments/cash.png"
import cashApp from "/payments/cashAPP.png"
import applePay from "/payments/applePay.png"
import zelle from "/payments/zelle.png"
import "../styles/payments.css"
import {motion} from "framer-motion"

export const Payments = () => {


  return (
    <>
    
    <motion.h3 
    whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
    className="securePaymentsH3">Secure Payments</motion.h3>
    <div className="payments">
    <motion.img
    whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
    src={cash} alt="cash" />
    <motion.img
    whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
    src={cashApp} alt="cashApp" />
    <motion.img
    whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
    src={applePay} alt="applePay" />
    <motion.img
    whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
    src={zelle} alt="zelle" />
    </div>
    </>
  )
}
