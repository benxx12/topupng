
import Header from "../../components/common/header"
import Navigation from "../../components/common/navigation"
import Footer from "../../components/common/footer"
import WalletBalance from '../../components/sections/Dashboard/WalletBalance.jsx';
import QuickActions from '../../components/sections/Dashboard/QuickActions.jsx';
import RecentTransactions from '../../components/sections/Dashboard/RecentTransaction.jsx';
import PromoCard from '../../components/sections/Dashboard/PromoCard.jsx';


function DashboardPage() {
  

    return (
        <div className="h-full w-full pb-[88px] md:pb-0">
          <Header />
            
            <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="w-full px-0 py-0 md:px-8 md:py-10 lg:px-[120px] lg:py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Left Column (2/3) */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {/* Welcome & Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What would you like to do?
              </h2>
              <QuickActions />
            </div>

            {/* Recent Transactions */}
            <div>
              <div className="flex justify-between items-center mb-6">
                
              </div>
              <RecentTransactions />
            </div>
          </div>

          {/* Right Column (1/3) */}
          <div className="flex flex-col gap-6">
            <WalletBalance />
            <PromoCard />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Welcome Section */}
          <div className="bg-[#1E3A8A] text-white w-full rounded-b-[40px] px-[24px] pb-[32px] pt-[12px] flex flex-col gap-[20px] ">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-[4px]">
                  <p className="text-[#93C5FD] ">Welcome back 👋</p>
                 <h1 className="text-[20px] text-white font-bold ">Ewuji Benjamin</h1>
              </div>
              <div className="w-[44px] h-[44px] bg-[#3B82F6] rounded-full text-[white] flex justify-center items-center font-bold">EB</div>
              
            </div>
            
            <WalletBalance />
          </div>

          {/* Quick Actions */}
          <div className="px-[24px]">
            <h2 className="md:text-xl text-[16px] font-bold text-gray-900 mb-4">
              What would you like to do?
            </h2>
            <QuickActions />
          </div>

          {/* Recent Transactions */}
          <div className="w-full px-[24px]">
           
            <RecentTransactions isMobile={true} />
          </div>

         
        </div>
      </div>
    </div>
                <Navigation />
                <Footer />
        </div>
    )
} 

export default DashboardPage