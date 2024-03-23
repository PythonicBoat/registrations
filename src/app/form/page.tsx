import Form from "@/components/form/Mainform";
import Image from "next/image";
export default function FormPage() {
  return (
    // <div className="">
    //   <Form />
    //   <div className="mt-5 ml-3" >
    //   <Image src={"/asstes/icons/mlsa.png"} alt="mlsa logo" height={200} width={200}/></div>
    // </div>


<div style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'transparent',
    }}>
      <div style={{
        backgroundImage: `url('/assets/images/bg.png')`,
        backgroundSize: 'cover',
        opacity: 0.6,
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundPosition: '0 -50px' 
      }} />
      
      <Form />
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: 'transparent',
      }}>
        <Image
          src={"/assets/icons/mlsa.png"}
          alt="mlsa logo"
          height={200}
          width={200}
        />
      </div>
    </div>

  );
}
