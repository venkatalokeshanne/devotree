import Link from "next/link";

function Thankyou() {

    return (
        <div className="mb-64">
            <h2>Thank you for website</h2>
            <p className="text-gray-400"> // It's work in process so check back often</p>
            <h1 >Check <Link href="/about"><span className="purple">About me</span></Link> <br/>for more <Link href="/work"><span className="purple">details</span></Link></h1>
        </div>
    )
}

export default Thankyou;