import FlipCard from './flipCard';
function ContactMe() {
    return (
        <div className='pt-32 md:pt-64 mx-auto md:w-3/5 pb-64'>
            <h2 className='purple' id="contact">Contact me</h2>
            <p className='text-gray-400 mt-5 mb-5' data-aos="fade-right" data-aos-duration="2000">Hello, Bonjour, నమస్కారం <br /> Overall you know me! <br /> You know, <br />What i DO, <br />What i LIKE. <br />SO, What are you waiting for ? Send me message! Let me know "<span className='purple'>Who you are</span>"   
            </p>
            <form className="membership-form webform" action="https://formsubmit.co/annevlokesh@gmail.com" method="POST">
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control mb-10" placeholder="Full Name" required />
                        </div>
                        <div className="col">
                            <input type="email" name="email" className="form-control mb-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" className="h-96 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-10" name="message" required></textarea>
                </div>
                <div className='w-full text-center'>
                <button type="submit" className="px-6 py-2 border-2 border-white-600 text-white font-medium text-2xl leading-tight uppercase rounded-full hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Submit</button></div>
            </form>
        </div>
    )
}

export default ContactMe;