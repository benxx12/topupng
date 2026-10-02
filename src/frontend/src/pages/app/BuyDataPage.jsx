import React, {useState} from 'react'
import Header from '../../components/common/header'
import Navigation from '../../components/common/navigation'
import Footer from '../../components/common/footer'
import { FiGlobe } from 'react-icons/fi';


function BuyDataPage() {
  const [selectedNetwork, setSelectedNetwork] = useState('MTN ');
  const [selectedPlan, setSelectedPlan] = useState('2GB');
  const [phoneNumber, setPhoneNumber] = useState('');

  const networks = [
    { id: 'MTN ', name: 'Mtn', icon: 'M', bgColor: 'bg-yellow-400', textColor: 'text-black' },
    { id: 'AIRTEL', name: 'Airtel', icon: 'A', bgColor: 'bg-red-600', textColor: 'text-white' },
    { id: 'GLO', name: 'Glo', icon: 'G', bgColor: 'bg-green-600', textColor: 'text-white' },
    { id: '9MOBILE', name: '9mobile', icon: '9', bgColor: 'bg-teal-900', textColor: 'text-white' }
  ];
  const dataPlans = [
    { id: '1GB', size: '1GB', validity: '30 Days', price: 300, description: 'Valid for 30 days • Autorenewal available' },
    { id: '2GB', size: '2GB', validity: '30 Days', price: 500, description: 'Valid for 30 days • Autorenewal available' },
    { id: '5GB', size: '5GB', validity: '30 Days', price: 1200, description: 'Valid for 30 days • Autorenewal available' },
    { id: '10GB', size: '10GB', validity: '30 Days', price: 2500, description: 'Valid for 30 days • Autorenewal available' }
  ];

  const selectedPlanData = dataPlans.find((plan) => plan.id === selectedPlan) || dataPlans[0];

  return (
    <div className='pb-[88px] md:pb-0'>
        <Header />
        <div className='mx-auto flex h-full w-full max-w-[1440px] gap-[40px] px-0 py-0 md:px-8 md:py-10 lg:px-[120px] lg:py-12'>
          <div className='flex h-full w-full max-w-[700px] flex-grow flex-col items-start gap-[32px] bg-white p-[15px] md:rounded-[24px] md:border-[1px] md:p-[34px]'>
            <div className='flex flex-col gap-[8px] w-full '>
              <h1 className='text-[24px] font-bold text-gray-900 '>Buy Data Plan</h1>
              <p className='text-[14px] text-gray-500 '>Select mobile internet plans suited to your digital needs</p>
            </div>
           <div className="flex flex-col gap-[8px] w-full">
      <label htmlFor="Number" className="text-[14px] font-bold text-gray-900">
        Phone Number
      </label>

      {/* Input Wrapper Container */}
      <div className="flex items-center gap-[12px] h-[48px] w-full rounded-[12px] border-[1px] border-[#E5E7EB] px-[16px] bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
        
        {/* Left Icon using FiGlobe */}
        <FiGlobe className="w-[20px] h-[20px] text-gray-400 flex-shrink-0" />

        {/* Transparent Input Field */}
        <input 
          type="tel" 
          maxLength={11} 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="08032088222" 
          name="Number" 
          id="Number" 
          className="w-full h-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-[14px] text-gray-900 placeholder:text-gray-400" 
        />

        {/* Right Status / Indicator Ring (Optional) */}
        <div className="w-[16px] h-[16px] rounded-full border-[2px] border-blue-500 flex-shrink-0" />

      </div>
    </div>
    <div className="w-full flex flex-col gap-[8px]">
      {/* Label */}
      <label className="block text-sm font-bold text-gray-900 ">
        Select Network Provider
      </label>

      {/* Network Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {networks.map((network) => (
          <button
            key={network.id}
            onClick={() => setSelectedNetwork(network.id)}
            className={`py-[8px] px-[8px] rounded-[25px] font-semibold transition flex items-center justify-center gap-3 ${
              selectedNetwork === network.id
                ? 'bg-white border-2 border-blue-600 text-blue-600'
                : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-600'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${network.bgColor} ${network.textColor}`}
            >
              {network.icon}
            </div>
            <span className="text-base">{network.name}</span>
          </button>
        ))}
      </div>
            </div>
            <div className='flex flex-col gap-[8px] w-full'>
              <label htmlFor="dataPlan" className='text-[14px] font-bold text-gray-900'>
                Select Data Plan
              </label>
              
              <div className='flex flex-col gap-[12px] w-full h-full'>
                {dataPlans.map((plan) => (
                  <div className={`flex justify-between w-full p-[20px] bg-white border-[1px] rounded-[20px] items-center cursor-pointer transition hover:shadow-md ${selectedPlan === plan.id ? 'border-[2px] border-[#2563EB] ' : ''}`} key={plan.id} onClick={() => setSelectedPlan(plan.id)}>
                    <div className='flex gap-[16px] items-center'>
                      <div className="w-[20px] h-[20px] rounded-full border-[2px] border-[#2563EB] bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                          {selectedPlan === plan.id && (
                            <div className="w-[8px] h-[8px] rounded-full bg-[#2563EB]" />
                          )}
                      </div>
                      <div className='flex flex-col gap-[4px]'>
                        <div className='flex gap-[15px] items-center'>
                          <span className={`text-[20px] font-bold text-gray-900`}>{plan.size}</span>
                        <span className={`text-[12px] font-medium text-gray-500 px-[8px] py-[4px] rounded-[12px] ${selectedPlan === plan.id ? 'bg-[#2563EB] text-white' : 'bg-[#F3F4F6] text-gray-500'}`}>{plan.validity}</span>
                        </div>
                        <span className='text-[12px] font-medium text-gray-500'>{plan.description}</span>
                      </div>
                    </div>
                    <span className={`text-[20px] font-extrabold text-gray-900 ${selectedPlan === plan.id ? 'text-[#2563EB]' : ''}`}>₦{plan.price}</span>
                  </div>
                ))}
              </div>
              <button className='w-full h-[48px] bg-[#3B82F6] mt-[20px] rounded-[25px] text-white font-bold text-[16px] hover:bg-blue-700 transition md:hidden'>Pay Now</button>
            </div>
          </div>
          <div className='sticky top-24 hidden h-full w-full max-w-[380px] flex-col gap-[20px] rounded-[24px] border-[1px] bg-white p-[28px] md:flex'>
            <h1 className='text-[18px] font-extrabold text-gray-900 pb-[20px] border-b-[1px] border-gray-200'>Order Summary</h1>
            <div className='flex flex-col  border-b-[1px] border-gray-200 gap-[14px] pb-[20px]'>
              <div className='flex justify-between'>
                <span className='text-[14px] font-medium text-gray-900 '>Recepient</span>
                <span className='text-[14px] font-bold text-gray-900 '>{phoneNumber || 'Not entered'}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-[14px] font-medium text-gray-900 '>Provider</span>
                <span className='text-[14px] font-bold text-gray-900 '>{selectedNetwork} Nigeria</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-[14px] font-medium text-gray-900 '>Data Bundle</span>
                <span className='text-[14px]  text-gray-900 font-bold'>{selectedPlan}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-[14px] font-medium text-gray-900 '>Validity</span>
                <span className='text-[14px] text-green-500 font-bold '>{selectedPlanData.validity}</span>
              </div>
            </div>
            <div className='flex justify-between '>
              <span className='text-[16px] font-bold text-gray-900 '>Total to Pay</span>
              <span className='text-[22px] font-bold text-[#3B82F6] '>₦{selectedPlanData.price}</span>
            </div>
            <button className='w-full h-[48px] bg-[#3B82F6]  rounded-[25px] text-white font-bold text-[16px] hover:bg-blue-700 transition'>Pay Now</button>
          </div>
        </div>
        <Navigation />
        <Footer />
    </div>
  )
}

export default BuyDataPage
        
