import './EV.css';

export const EvenPropagation = () => {

    const handleGranparent = () => {
        console.log("Grandparent Clicked");
    };

    const handleparent = () => {
        console.log("Parent Clicked");
    };

    const handleChildclick = () => {
    event.stopPropagation();
    console.log("Child clicked");
    };

    return (
        <div className='main-div'>
            <div className='g-div' onClickCapture={handleGranparent}>  
                <div className='p-div' onClickCapture={handleparent}>
                    <button className='c-div' onClickCapture={handleChildclick}>
                        Child Div
                    </button>
                </div>
            </div>
        </div>
    );
};

// onClickCapture is use for event propagate from top to botton 
// without use event propagate bottom to top only use onClick we can access bottom to top.