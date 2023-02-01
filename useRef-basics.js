import React,{ useEffect,useRef} from 'react';
const UseRefBasics=()=>{

    const refContainer=useRef(null);
    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    };
    useEffect(()=>{
        console.log(refContainer.current);
        refContainer.current.focus();
    });
    return (
        <>
            <center><b>This is My App</b>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                 <input type='text' ref={refContainer}/>
                </div>
                <button type='submit'>submit</button>
            </form>
            </center>
        </>
    );
};
export default UseRefBasics;