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
        <section className='main-div'>
            <div className='g-div' onClickCapture={handleGranparent}>  
                <div className='p-div' onClickCapture={handleparent}>
                    <button className='c-div' onClickCapture={handleChildclick}>
                        child Div
                    </button>
                </div>
            </div>
        </section>
    );
};
// onClickCapture is use for event propagare from top to botton 
// without use event propagate bottom to top