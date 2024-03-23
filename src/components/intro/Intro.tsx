"use client"
import Image from 'next/image';
import Navbar from '../ui/Navbar';
import { useEffect } from 'react';




const Intro: React.FC = () => {
  useEffect(() => {
    // Get the canvas element and its 2D context
    const canvas = document.getElementById("glitchCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Failed to get 2D context for canvas");
      return;
    }

    // Set canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define available colors for glitch effect
    const colors: string[] = ["#DC2626", "#000000"];

    // Maximum displacement for glitch effect
    const maxDisplacement: number = 10;

    // Maximum number of glitch shapes to be drawn
    const maxGlitchShapes: number = 15;

    // Time between glitch frames in milliseconds
    const interval: number = 700;

    // Function to generate a random integer within a range
    function getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to draw the glitch effect
    function drawGlitch(): void {
      // Clear the canvas
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      // Loop through and draw glitch shapes
      for (let i = 0; i < maxGlitchShapes; i++) {
        const color: string = colors[getRandomInt(0, colors.length - 1)];
        const shapeType: number = getRandomInt(0, 2);
        const startX: number = getRandomInt(0, canvas.width);
        const startY: number = getRandomInt(0, canvas.height);
        const displacementX: number = getRandomInt(-maxDisplacement, maxDisplacement);
        const displacementY: number = getRandomInt(-maxDisplacement, maxDisplacement);
        const width: number = getRandomInt(10, 50);
        const height: number = getRandomInt(10, 50);

        // Set the fill color
        ctx!.fillStyle = color;

        // Draw a glitch shape based on shapeType
        if (shapeType === 0) {
          // Draw a line with width spanning the canvas
          ctx!.fillRect(
            startX + displacementX,
            startY + displacementY,
            canvas.width,
            1
          );
        } else {
          // Draw a rectangle or square
          ctx!.fillRect(
            startX + displacementX,
            startY + displacementY,
            width,
            height
          );
        }
      }
    }

    // Function to animate the glitch effect
    function animate(): void {
      // Call the drawGlitch function
      drawGlitch();

      // Schedule the next animation frame
      setTimeout(animate, interval + getRandomInt(-50, 50));
    }

    // Start the animation
    animate();
  }, []);
  
  return (
    <div  className="m-0 overflow-hidden bg-cover bg-[url('/assets/images/bgImage.svg')] md:bg-[url('/assets/images/Bgtogether.png')] bg-center bg-no-repeat flex w-screen h-screen">
        <canvas suppressHydrationWarning className="fixed z-0 w-full h-screen" id="glitchCanvas"></canvas>
      <div className='items-center w-full'>
 <Navbar/>
 </div>

 <div className="absolute top-72 md:top-24 left-0 right-0 mx-auto w-[23rem]  md:w-96 z-10  h-32">
        <Image src="/assets/images/DEFCON.png" alt='' layout="fill" objectFit="contain" />
      </div>
    
  <div>
   
  
        
      
    <Image className='absolute bottom-0 left-0 right-0 mx-auto h-96 max-h-96 z-20 w-[400px] md:w-[500px]'  width={500} height={500} src="/assets/images/mrRobot.png" alt='mr robot icon ' />
  </div>
 
    
  </div>

  
  );
}

export default Intro;
