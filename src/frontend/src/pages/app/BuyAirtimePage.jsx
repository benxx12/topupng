import Header from '../../components/common/header'
import Navigation from '../../components/common/navigation'
import Footer from '../../components/common/footer'
import { useState } from 'react'
import { FiGlobe } from 'react-icons/fi';

function BuyAirtimePage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('MTN ');
  const [selectedAmount, setSelectedAmount] = useState('₦1000');
  const [customAmount, setCustomAmount] = useState('');

  const parseCurrencyValue = (value) => {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    const sanitizedValue = String(value ?? '').replace(/[^\d.]/g, '');
    const parsedValue = Number(sanitizedValue);

    return Number.isFinite(parsedValue) ? parsedValue : 0;
  };

  const displayAmount = customAmount ? parseCurrencyValue(customAmount) : parseCurrencyValue(selectedAmount);
  const formatNaira = (value) => `₦${Number(value).toLocaleString()}`;
  const cashback = (displayAmount * 5) / 100;
  const totalToPay = displayAmount;

  const networks = [
    { id: 'MTN ', name: 'Mtn', icon: 'M', bgColor: 'bg-yellow-400', textColor: 'text-black' },
    { id: 'AIRTEL', name: 'Airtel', icon: 'A', bgColor: 'bg-red-600', textColor: 'text-white' },
    { id: 'GLO', name: 'Glo', icon: 'G', bgColor: 'bg-green-600', textColor: 'text-white' },
    { id: '9MOBILE', name: '9mobile', icon: '9', bgColor: 'bg-teal-900', textColor: 'text-white' }
  ];
  const amount =[
    {amount: "₦100"},
    {amount: "₦200"},
    {amount: "₦500"},
    {amount: "₦1000"},
    {amount: "₦2000"},
    {amount: "#5000"},
  ]
  return (
    <div className="h-full w-full pb-[88px] md:pb-0">
      <Header />
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] bg-gray-50 px-0 py-0 md:flex-row md:px-8 md:py-10 lg:px-[120px] lg:py-12'>
          <div className='flex h-full w-full max-w-[708px] flex-grow flex-col items-start gap-[32px] bg-white p-[15px] md:rounded-[24px] md:border-[1px] md:p-[40px]'>
            <div className='flex flex-col gap-[8px] w-full '>
              <h1 className='text-[24px] font-bold text-gray-900 '>Buy Airtime</h1>
              <p className='text-[14px] text-gray-500 '>Enter details below to purchase instant talktime</p>
            </div>
            <div className='flex flex-col gap-[8px] w-full'>
      <label htmlFor="Number" className='text-[14px] font-bold text-gray-900'>
        Phone Number
      </label>

      {/* Outer Wrapper Container */}
      <div className='flex items-center gap-[12px] h-[48px] w-full rounded-[12px] border-[1px] border-[#E5E7EB] px-[16px] bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all'>
        
        {/* Left Icon */}
        <FiGlobe className='w-[20px] h-[20px] text-gray-400 flex-shrink-0' />

        {/* Input Field */}
        <input 
          type="tel" 
          maxLength="11" 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} 
          placeholder='08032088222' 
          name="Number" 
          id="Number" 
          className='w-full h-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-[14px] text-gray-900 placeholder:text-gray-400' 
        />

        {/* Optional Right Indicator */}
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
            <div className='w-full flex flex-col gap-[8px]'>
              <label htmlFor="Amount" className='block text-sm font-bold text-gray-900 '>Amount</label>
              <div className='grid grid-cols-3 gap-[16px]'>
                {amount.map((item) => (
                  <button 
                    key={item.amount}
                    onClick={() => {
                      setCustomAmount('');
                      setSelectedAmount(item.amount);
                    }}
                    className={`p-3 border-[1px] rounded-[16px] font-bold ${selectedAmount === item.amount ? 'bg-blue-600 text-white' : 'border-gray-200 text-black hover:bg-blue-600 hover:text-white'}`}
                  >{item.amount}</button>
                ))}
              </div>
            </div>
           <div className='flex flex-col gap-[8px] w-full '>
              <label htmlFor="Number" 
              className='text-[14px] font-bold text-gray-900 '>Custom Amount (&#8358;)</label>
              <input type="text"
                      inputMode="numeric"
                      maxLength={12} 
                  min="50"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder='Enter Custom Amount (Min: &#8358;50)' name="Number" id="Number" className='h-[48px] rounded-[12px] border-[1px] border-[#E5E7EB] px-[16px] ' />
                  <button className='w-full h-[48px] bg-[#3B82F6] mt-[12px] rounded-[25px] text-white font-bold text-[16px] hover:bg-blue-700 transition md:hidden block'>Pay Now</button>
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
                <span className='text-[14px] font-medium text-gray-900 '>Amount</span>
                <span className='text-[14px]  text-gray-900 font-bold'>{formatNaira(displayAmount)}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-[14px] font-medium text-gray-900 '>CashBack (5%)</span>
                <span className='text-[14px] text-green-500 font-bold '>+{formatNaira(cashback)}</span>
              </div>
            </div>
            <div className='flex justify-between '>
              <span className='text-[16px] font-bold text-gray-900 '>Total to Pay</span>
              <span className='text-[22px] font-bold text-[#3B82F6] '>{formatNaira(totalToPay)}</span>
            </div>
            <button className='w-full h-[48px] bg-[#3B82F6] rounded-[25px] text-white font-bold text-[16px] hover:bg-blue-700 transition'>Pay Now</button>
          </div>
      </div>
      <Navigation />
      <Footer />
    </div>
  )
}

export default BuyAirtimePage





