import React from 'react'
import Header from '../../components/common/header'
import Navigation from '../../components/common/navigation'
import Footer from '../../components/common/footer'
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

function FundWallet({ embedded = false }) {
 const navigate = useNavigate();

  const content = (
    <div className='flex justify-between items-center '>
        <div className='flex flex-col gap-[6px]'>
            <button type='button'onClick={() => navigate(-1)}className=' flex items-center gap-[8px] text-[14px] font-semibold text-gray-700'>
                <span className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-gray-100'>
                   <FiChevronLeft className='h-[16px] w-[16px]' />
                </span>
                 Back To DashBoard
            </button>
            <h1 className='text-[24px] font-bold text-gray-900 ml-[30px]'>Fund Wallet</h1>
            <p className='text-[14px] text-gray-600 ml-[30px]'>Choose an amount and how you would like to fund your wallet</p>
        </div>
        
    </div>
  ); 

  if (embedded) {
    return content;
  }

  return (
    <div>
      <Header />
      <main className='mx-auto flex flex-col gap-[24px] h-full w-full max-w-[1440px] px-0 py-0 md:px-8 md:py-10 lg:px-[120px] lg:py-12'>
        {content}
      </main>
      <Footer />
      <Navigation />
    </div>
  )
}

export default FundWallet