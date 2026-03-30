export const Eventprops = () =>{

    const HandleWelcomeUser = (user) => {
        alert(`hello ${user}`);
    };

    const handleHover = () => {
        alert("Hey thanks for hovering Me");
    };

    return(
        <>

        <WelcomeUser 
        // here onButtonclick we can user anything name 
        onButtonclick={() => HandleWelcomeUser("yash")} 
        onMouseEnter={handleHover}
        />

        </>
    );
};

const WelcomeUser = (props) => {

    const{onButtonclick,onMouseEnter} = props;

    const Handlegreeting = () =>{
        console.log("Hey user, Welcome");
        onButtonclick();
    }

    return(
        <>
        {/* here we can pass event name li onclick */}
        <button onClick={onButtonclick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={Handlegreeting}>greeting</button>
        </>
    );
};