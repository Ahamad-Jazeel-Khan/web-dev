import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
    await connectDb();
    let body = await req.formData()
    body = Object.fromEntries(body)

    //Check if razorpay order id is present on the server 

    let p = await Payment.findOne({ oid: body.razorpay_order_id }) 
    if (!p) {
        return NextResponse.json({ message: "Invalid Order ID" }, { status: 400 })

    }

    // fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: p.to_user })
    const secret = user.razorpaysecret

    //Check if the payment is verified or not
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret)

    if (xx) {
        // udate the payment status
        const uddatePayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id },{done:"true"} ,{ status: "paid" }, { new: true })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${uddatePayment.to_user}?paymentdone=true`)
    }

    else {
        return NextResponse.json({ message: "Payment not verified" }, { status: 400 })
    }        
}