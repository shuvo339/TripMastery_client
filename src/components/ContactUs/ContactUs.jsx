
const ContactUs = () => {
    const handleMessage=e=>{
        e.preventDefault();
    }
    return (
        <div className="flex flex-col-reverse md:flex-row gap-8 my-16 bg-blue-100 p-6 rounded-lg">
            <div className="md:w-1/2 w-full">
                <h2 className="text-4xl font-bold pb-8 text-center">Contact Us</h2>
                <form onSubmit={handleMessage} className="space-y-8">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Username" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>

                    <textarea className="textarea textarea-bordered h-32 w-full" placeholder="Write your message"></textarea>
                    <br />

                    <button className="btn w-full bg-cyan-600 text-white font-semibold">Send Message</button>
                </form>
            </div>
            <div className="md:w-1/2 w-full">
                <img className="w-full md:h-full rounded-lg" src="https://i.ibb.co/MDDrxkG/contact.jpg" alt="" />
            </div>
        </div>
    );
};

export default ContactUs;