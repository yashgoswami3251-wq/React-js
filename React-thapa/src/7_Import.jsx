{/* import Netflixseries from "./components/Netflixseries";*/}
 {/* Default export we can name anything 
     you can like yashseries anything */}

{/*import { Netflixseries , Footer } from "./components/Namedexport"; */} {/* using named export */}
{/* we can use multiple named function */}

import Name , { Netflixseries , Footer } from "./components/Namedexport"; 
{/* Import combine export */}

export const App = () => {
    return (
        <>
            <Netflixseries />
            <Footer />
            <Name />
        </>
    );
};