import React , {useRef,useEffect} from 'react';


import Typed from 'typed.js';

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const element =  useRef(null);

 useEffect(() => {
    const typed = new Typed(".element", {
        strings: ["Frontend Developer", "Electrician", "Aeronautical Assembler"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      }); 

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-white">
      <span   ref={element}></span>  
    </div>
  );
}

export default MyComponent