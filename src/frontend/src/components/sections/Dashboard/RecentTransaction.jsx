

export default function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      type: 'Data Top-up',
      icon: 'A',
      bgColor: 'bg-red-600',
      phone: '0802 345 6789',
      network: 'Airtel',
      amount: '₦1,200',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 2,
      type: 'Airtime',
      icon: 'M',
      bgColor: 'bg-yellow-400',
      textColor: 'text-black',
      phone: '0803 111 2222',
      network: 'MTN',
      amount: '₦1,000',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 3,
      type: 'Data Top-up',
      icon: 'G',
      bgColor: 'bg-green-600',
      phone: '0905 444 5555',
      network: 'Glo',
      amount: '₦2,500',
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-700'
    }
  ];

  return (
    <div className='flex flex-col w-full gap-[16px]'>
        <div className="flex justify-between">
            <h2 className="md:text-2xl text-[16px] font-bold text-gray-900">
                  Recent Transactions
                </h2>
                <a href="/history" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View All
                </a>
        </div>
        
        <div className='w-full max-w-[700px] md:border-2 border-none rounded-[20px] overflow-hidden' >
            <div className='md:block hidden w-full'>
            <table className="w-full">
                <thead className="">
                  <tr className="border-b border-gray-200 bg-[#e9eef2] ">
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Type</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Phone Number</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Network</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Amount</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={tx.id}
                className={`hover:bg-gray-50 transition ${
                  index !== transactions.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                {/* Type */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`${tx.bgColor} ${tx.textColor || 'text-white'} w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}
                    >
                      {tx.icon}
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{tx.type}</span>
                  </div>
                </td>

                {/* Phone Number */}
                <td className="py-4 px-6 text-gray-600 text-sm">{tx.phone}</td>

                {/* Network */}
                <td className="py-4 px-6 text-gray-600 text-sm">{tx.network}</td>

                {/* Amount */}
                <td className="py-4 px-6 font-bold text-gray-900 text-sm">{tx.amount}</td>

                {/* Status */}
                <td className="py-4 px-6">
                  <span
                    className={`text-xs font-medium ${tx.statusColor} px-3 py-1.5 rounded-full inline-block`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
            </table>
            </div>

            {/* {Mobile view} */}
           <div className="md:hidden flex flex-col gap-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="bg-white rounded-2xl p-4 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between gap-4">
              {/* Left - Icon & Details */}
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`${tx.bgColor} ${tx.textColor || 'text-white'} w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}
                >
                  {tx.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm">{tx.type}</h3>
                  <p className="text-xs text-gray-600">
                    {tx.network} • {tx.phone}
                  </p>
                </div>
              </div>

              {/* Right - Amount & Status */}
              <div className="flex flex-col items-end gap-2">
                <p className="font-bold text-gray-900 text-base">{tx.amount}</p>
                <span
                  className={`text-xs font-medium ${tx.statusColor} px-3 py-1 rounded-full whitespace-nowrap`}
                >
                  {tx.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}