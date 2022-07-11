import { FunctionComponent } from "react";
import Header from "./layouts/_header";

interface AboutProps {
    
}
 
const About: FunctionComponent<AboutProps> = () => {
    return ( 
        <>
            <Header title="About Us" />

            <main className="main">
                <div className="about-project-section">
                    <h3 className="about-heading">About This Project</h3>
                    <p className="about-text">
                        This project was made with &#10084; by <a href="http://github.com/AbdelrahmaDwedar" target="_blank" rel="noopener noreferrer">AbdelrahmaDwedar</a>. <br />
                        This project is just a simple layout for a <strong>simple shope</strong>, it's not secure to use it as the backend or the server side of your project at all. <br />

                        If you used this layout be aware that only the layout is available for use, the server side is just a testing for <a href="http://https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>. <br />
                        If there was any issue that you ran through with the server side the owner of this repository is not responcable. &#9888;
                    </p>
                </div>
            </main>
        </>
     );
}
 
export default About;