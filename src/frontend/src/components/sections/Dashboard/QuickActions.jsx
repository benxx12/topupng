import { useNavigate } from 'react-router-dom';

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      id: 1,
      title: 'Buy Airtime',
      montit: 'Buy Airtime',
      description: 'Top-up airtime instantly to any mobile number',
      mobdesc: 'TopUp Instantly',
      icon: '📱',
      path: '/airtime'
    },
    {
      id: 2,
      title: 'Buy Data Plan',
      montit: 'Buy Data',
      description: 'Browse high-speed internet data bundles',
      mobdesc: 'Fast Bundles',
      icon: '🌐',
      path: '/data'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-[20px]">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => navigate(action.path)}
          className="flex items-center gap-[16px] bg-[white] p-[20px] md:p-[24px] border-2 border-[#f3f3f7] rounded-[24px] hover:border-[#878787] hover:bg-[#f3f3f7] transition"
        >
          <div className="text-[34px]">{action.icon}</div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 text-[14px] md:text-[16px] md:block hidden">{action.title}</h3>
            <h3 className="font-semibold text-gray-900 text-[14px] md:text-[16px] md:hidden block">{action.montit}</h3>
            <p className="md:text-sm text-[11px] text-gray-600 md:block hidden">{action.description}</p>
            <p className="md:text-sm text-[11px] text-gray-600 md:hidden">{action.mobdesc}</p>
          </div>
        </button>
      ))}
    </div>
  );
}