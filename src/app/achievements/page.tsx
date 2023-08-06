import React from 'react'
import Image from 'next/image'

const achievements = () => {
  return (
    <>
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center red_gradient mt-6">Achievements</h1>
    </section>

    <div className='container mx-16 my-8'>
      <div className='flex justify-around shadow-xl rounded-lg'>
        <Image 
          className="center-image p-4"
          width={300} height={250} 
          src="/achievements/Screenshot 2023-08-06 at 1.32.59 PM.png" 
          alt="President, IUTDS" 
         />
        <p className='mx-4 p-4'>
        <h1 className='font-bold text-xl mt-2'>Australasian Intervarsity Debating Championships 2023</h1>
        <div className='horizontal-line my-4'></div>
        Every year, teams from universities in the Australasian region compete in the 
        Australasian Intervarsity Debating Championships, or “Australs.” In 2023, it 
        was held in Krabi, Thailand.  It is one of the largest debating tournaments in 
        the world, second only in size to the World Universities Debating Championships 
        (WUDC). Team IUT, consisting of Tamim Ahmed, Tanzim Noor Tanmoy, and Evan Ashfaque, 
        became the EFL champions of the Australasian Intervarsity Debate Championships 2023. 
        Tanzim and Tamim were the 7th and 8th best EFL speakers of the tournament, and Tamim 
        had received the best speaker award in the finals. IUT participated as the only Bangladeshi 
        team at this tournament and they made the whole country proud. Most prominent news organizations 
        of the country covered the story of their success.
        </p>
      </div>
    </div>

    <div className='container mx-16 my-8'>
      <div className='flex justify-around shadow-xl rounded-lg'>
        <p className='mx-4 p-4'>
        <h1 className='font-bold text-xl mt-2'>Australasian Intervarsity Debating Championships 2023</h1>
        <div className='horizontal-line my-4'></div>
        Every year, teams from universities in the Australasian region compete in the 
        Australasian Intervarsity Debating Championships, or “Australs.” In 2023, it 
        was held in Krabi, Thailand.  It is one of the largest debating tournaments in 
        the world, second only in size to the World Universities Debating Championships 
        (WUDC). Team IUT, consisting of Tamim Ahmed, Tanzim Noor Tanmoy, and Evan Ashfaque, 
        became the EFL champions of the Australasian Intervarsity Debate Championships 2023. 
        Tanzim and Tamim were the 7th and 8th best EFL speakers of the tournament, and Tamim 
        had received the best speaker award in the finals. IUT participated as the only Bangladeshi 
        team at this tournament and they made the whole country proud. Most prominent news organizations 
        of the country covered the story of their success.
        </p>
        <Image 
          className="center-image p-4"
          width={300} height={250} 
          src="/achievements/Screenshot 2023-08-06 at 1.32.59 PM.png" 
          alt="President, IUTDS" 
         />
      </div>
    </div>

    <div className='container mx-16 my-8'>
      <div className='flex justify-around shadow-xl rounded-lg'>
        <Image 
          className="center-image p-4"
          width={300} height={250} 
          src="/achievements/Screenshot 2023-08-06 at 1.32.59 PM.png" 
          alt="President, IUTDS" 
         />
        <p className='mx-4 p-4'>
        <h1 className='font-bold text-xl mt-2'>Australasian Intervarsity Debating Championships 2023</h1>
        <div className='horizontal-line my-4'></div>
        Every year, teams from universities in the Australasian region compete in the 
        Australasian Intervarsity Debating Championships, or “Australs.” In 2023, it 
        was held in Krabi, Thailand.  It is one of the largest debating tournaments in 
        the world, second only in size to the World Universities Debating Championships 
        (WUDC). Team IUT, consisting of Tamim Ahmed, Tanzim Noor Tanmoy, and Evan Ashfaque, 
        became the EFL champions of the Australasian Intervarsity Debate Championships 2023. 
        Tanzim and Tamim were the 7th and 8th best EFL speakers of the tournament, and Tamim 
        had received the best speaker award in the finals. IUT participated as the only Bangladeshi 
        team at this tournament and they made the whole country proud. Most prominent news organizations 
        of the country covered the story of their success.
        </p>
      </div>
    </div>

    
    </>
  )
}

export default achievements
