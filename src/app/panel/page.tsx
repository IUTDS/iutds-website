import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <br />
      <h1 className="head_text text-center ">EC Panel</h1>
      {/* President */}
      <div className="flex-center" style={{ marginTop: '20px' }}>
        <Image 
          className="center-image"
          width={300} height={250} 
          src="/EC-Panel/President_Sakif.jpg" 
          alt="President, IUTDS" 
         />
        <br />
        <p className="text-center ">President</p>
      </div>
      {/* Vice-President */}
      <br /> 
      <h2 className="head_text text-center ">Vice President</h2>
      <br />
      <div className="flex justify-evenly">
        <div>
        <Image 
          className="center-image"
          width={300} height={250} 
          src="/EC-Panel/VP_Alif.jpg" 
          alt="Vice-president(Admin), IUTDS" 
         />
          <br />
          <p className="text-center ">Vice-president (Administration)</p>
        </div>
        <div>
        <Image 
          className="center-image"
          width={300} height={250} 
          src="/EC-Panel/VP_Arif.jpg" 
          alt="Vice-president(Operations), IUTDS" 
         />
          <br />
          <p className="text-center ">Vice-president (Operations)</p>
        </div>
        <div>

        <Image 
          className="center-image"
          width={300} height={250} 
          src="/EC-Panel/VP_Tanvir.jpg" 
          alt="Vice-president(Operations), IUTDS" 
         />
          <br />
          <p className="text-center ">Vice-president (Accounts & Development)</p>
        </div>
        <div>

        <Image 
          className="center-image"
          width={300} height={250} 
          src="/EC-Panel/VP_Sajid.jpg" 
          alt="Vice-president(Debate and Workshop), IUTDS" 
         />
          <br />
          <p className="text-center ">Vice-president (Debate & Workshop)</p>
        </div>
      </div>
      {/* Directors */}
      <br /> 
      <h2 className="head_text text-center ">Directors</h2>
      <br />
      <div className="flex justify-evenly">
        <div>
          <Image 
            className="center-image"
            width={300} height={250} 
            src="/EC-Panel/Dir_zaarin.jpg" 
            alt="Director(Administration), IUTDS" 
          />
          <br />
          <p className="text-center ">Director (Administration)</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/Dir_Reaz.jpg" 
              alt="Director(Creative), IUTDS" 
            />
          <br />
          <p className="text-center ">Director (Creative)</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/Dir_Lorin.jpg" 
              alt="Director(Logistics), IUTDS" 
            />
          <br />
          <p className="text-center ">Director (Logistics)</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/Dir_Arifin.jpg" 
              alt="Director(Publication), IUTDS" 
            />
          <br />
          <p className="text-center ">Director (Publication)</p>
        </div>
      </div>

      {/* Heads */}
      <br /> 
      <h2 className="head_text text-center ">Head of Departments</h2>
      <br />
      <div className="flex justify-evenly">
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/Head_Arpi.jpg" 
              alt="Head (Debate & Workshop), IUTDS" 
            />
          <br />
          <p className="text-center ">Head (Debate & Workshop)</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/Head_Annesha.jpg" 
              alt="Head (Branding), IUTDS" 
            />
          <br />
          <p className="text-center ">Head (Branding)</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/Head_Abrar.jpg" 
              alt="Head (Communication), IUTDS" 
            />
          <br />
          <p className="text-center ">Head (Communication)</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/Head_Muti.jpg" 
              alt="Head (Content), IUTDS" 
            />
          <br />
          <p className="text-center ">Head (Content)</p>
        </div>
      </div>
      {/* Strategic Heads */}
      <br /> 
      <h2 className="head_text text-center ">Strategic Heads</h2>
      <br />
      <div className="flex justify-evenly">
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/SH_Ihfaz.jpg" 
              alt="Strategic Head of Creative , IUTDS"
            />
          <br />
          <p className="text-center ">Strategic Head of Creative</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/SH_Ali.jpg" 
              alt="Strategic Head of Events , IUTDS"
            />
          <br />
          <p className="text-center ">Strategic Head of Events</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/SH_Ghazanfar.jpg" 
              alt="Strategic Head of Liaison , IUTDS"
            />
          <br />
          <p className="text-center ">Strategic Head of Liaison</p>
        </div>
        
      </div>
      
      <div className="flex justify-evenly" style={{ marginTop: '20px' }}>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/SH_Agni.jpg" 
              alt="Strategic Head of Liaison , IUTDS"
            />
          <br />
          <p className="text-center ">Strategic Head of Marketing</p>
        </div>
        <div>
          <Image 
              className="center-image"
              width={300} height={250} 
              src="/EC-Panel/SH_Nafisa.jpg" 
              alt="Strategic Head of Liaison , IUTDS"
            />
          <br />
          <p className="text-center ">Strategic Head of Publication</p>
          <br />
        </div>
      </div>

    </section>
  );
};

export default Page;
