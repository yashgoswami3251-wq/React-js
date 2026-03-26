function Profile () {
    return(
        <div>
            <h1>Profile card challenge</h1>

            <Profilecard
                name = "yash"
                age = {20}
                greeting = {
                    <div>
                        <strong>Hi yash, have a worderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Tracking</p>
                <button>Contact</button>
            </Profilecard>

            <Profilecard
                name = "Kalpesh"
                age = {22}
                greeting = {
                    <div>
                        <strong>Hi Kalpesh, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Swimming, Playing</p>
                <button>Contact</button>
            </Profilecard>
        </div>
    );
};

export default Profile;

function Profilecard({name,age,greeting,children}){
    // const {name,age,greeting,children} = props;
    return(
        <>
        <h2>name:{name}</h2>
        <p>Age:{age}</p>
        <p>greeting:{greeting}</p>
        <div>{children}</div>
        </>
    );
};