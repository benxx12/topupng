import React, {useState} from 'react'
import Header from '../../components/common/header'
  import Navigation from '../../components/common/navigation'
  import Footer from '../../components/common/footer'
  import { FiSearch } from 'react-icons/fi';

function HistoryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const filters = [
    { id: 'all', label: 'All'},
    { id: 'airtime', label: 'Airtime'},
    { id: 'data', label: 'Data' }
  ];
  const label =[
    {id: 1, label: "Tranasaction Details", Key: "transactionDetails"},
    {id: 2, label: "Phone Number", Key: "PhoneNumber"},
    {id: 3, label: "Provider", Key: "provider"},
    {id: 4, label: "Amount", Key: "amount"},
    {id: 5, label: "Date", Key: "date"},
    {id: 6, label: "Status", Key: "status"},
  ]
  const transactions = [
    {
      id: 1,
      type: 'Data Top-up',
      typeId: 'data',
      icon: 'A',
      bgColor: 'bg-red-600',
      phone: '0802 345 6789',
      network: 'Airtel',
      date: 'Today, 10:45 AM',
      amount: '₦1,200',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 2,
      type: 'Airtime',
      typeId: 'airtime',
      icon: 'M',
      bgColor: 'bg-yellow-400',
      textColor: 'text-black',
      phone: '0803 111 2222',
      network: 'MTN',
      date: 'Yesterday, 3:15 PM',
      amount: '₦1,000',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 3,
      type: 'Data Top-up',
      typeId: 'data',
      icon: 'G',
      bgColor: 'bg-green-600',
      phone: '0905 444 5555',
      network: 'Glo',
      date: '08 Oct, 11:20 AM',
      amount: '₦2,500',
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 4,
      type: 'Airtime',
      typeId: 'airtime',
      icon: '9',
      bgColor: 'bg-teal-900',
      phone: '0809 777 8888',
      network: '9mobile',
      date: '02 Oct, 9:10 AM',
      amount: '₦500',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 5,
      type: 'Data Top-up',
      typeId: 'data',
      icon: 'M',
      bgColor: 'bg-yellow-400',
      textColor: 'text-black',
      phone: '0803 123 4567',
      network: 'MTN',
      date: '28 Sep, 4:30 PM',
      amount: '₦5,000',
      status: 'Failed',
      statusColor: 'bg-red-100 text-red-700'
    },
    {
      id: 5,
      type: 'Data Top-up',
      typeId: 'data',
      icon: 'M',
      bgColor: 'bg-yellow-400',
      textColor: 'text-black',
      phone: '0803 123 4567',
      network: 'MTN',
      date: '28 Sep, 4:30 PM',
      amount: '₦5,000',
      status: 'Failed',
      statusColor: 'bg-red-100 text-red-700'
    }
  ];

  return (
    <div className='pb-[88px] md:pb-0'>
        <Header />
        <div className='mx-auto flex h-full w-full max-w-[1440px] flex-col gap-[32px] px-0 py-0 md:px-8 md:py-10 lg:px-[120px] lg:py-12'>
          <div className='flex w-full flex-col justify-between gap-4 md:flex-row md:items-center'>
            <div className='flex flex-col gap-[6px] md:w-auto'>
              <h1 className='text-[24px] font-bold text-gray-900 '>Transaction History</h1>
              <p className='text-[#475569] text-[14px]'>Monitor and search your previous airtime and data purchases</p>
            </div>
            <div className='flex flex-col items-center gap-[24px] md:flex-row'>
              <div className=' p-[4px] flex gap-[6px] bg-[white] rounded-[100px] border border-[#E2E8F0]'>
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-[20px] py-[8px] rounded-[100px]  text-[14px] font-bold transition ${
                      selectedFilter === filter.id
                        ? 'bg-[#3B82F6] text-white'
                        : 'text-[#475569] hover:bg-[#EFF6FF] hover:text-[#2563EB]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 w-full py-[10px] px-[16px] bg-white border border-gray-200 rounded-[100px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                <FiSearch className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search Transactions..."
                  className="w-full h-full bg-transparent border-none outline-none text-sm text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
          <div className='h-full w-full'>
            <div className="overflow-hidden rounded-[24px] border-[1px] border-[#E2E8F0]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse">
                  <thead className="bg-[#e9eef2]">
                    <tr className="border-b border-gray-200">
                      {label.map((item) => (
                        <th key={item.id} className="px-6 py-4 text-left text-sm font-bold text-gray-900 whitespace-nowrap">
                          {item.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-[14px]">
                            <div className={`h-[40px] w-[40px] rounded-full font-bold flex items-center justify-center ${transaction.bgColor} ${transaction.textColor || 'text-white'}`}>
                              {transaction.icon}
                            </div>
                            <span className="text-sm font-bold text-gray-900">{transaction.type}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.network}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          {transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-[12px] py-[4px] inline-flex text-[14px] font-medium leading-full rounded-full ${transaction.statusColor}`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
        <Footer />
    </div>
  )
}

export default HistoryPage