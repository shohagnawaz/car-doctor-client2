import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-20 border-8 border-white
                    top-1/2 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 space-y-5">
                    <h3 className="text-3xl text-orange-700 font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-4">
                        There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration is some form, by injected humour, or randomised words 
                        which do not look even slightly believable.
                    </p>
                    <p className="py-4">
                        There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration is some form, by injected humour, or randomised words 
                        which do not look even slightly believable. 
                    </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;