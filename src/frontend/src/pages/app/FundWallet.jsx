import React from 'react';
import Header from '../../components/common/header';
import Navigation from '../../components/common/navigation';
import Footer from '../../components/common/footer';
import { useNavigate } from 'react-router-dom';
import { FiCreditCard, FiHome } from 'react-icons/fi';
import WalletCard from '../../components/sections/fund-wallet/WalletCard';
import ProgressSteps from '../../components/sections/fund-wallet/ProgressSteps';
import DebitCardPage from '../../components/sections/fund-wallet/DebitCardPage';
import BankTransferPage from '../../components/sections/fund-wallet/BankTransferPage';
import ConfirmAccountPage from '../../components/sections/fund-wallet/ConfirmAccountPage';
import VerifyPaymentPage from '../../components/sections/fund-wallet/VerifyPaymentPage';
import PaymentCompletePage from '../../components/sections/fund-wallet/PaymentCompletePage';

const presetAmounts = [100, 200, 500, 1000, 2000, 5000];

function FundWallet({ embedded = false, onBack }) {
  const navigate = useNavigate();
  const [screen, setScreen] = React.useState('amount');
  const [screenHistory, setScreenHistory] = React.useState(['amount']);
  const [selectedAmount, setSelectedAmount] = React.useState(1000);
  const [customAmount, setCustomAmount] = React.useState('');
  const [selectedMethod, setSelectedMethod] = React.useState('debit-card');

  const goToScreen = (nextScreen) => {
    setScreenHistory((history) => [...history, nextScreen]);
    setScreen(nextScreen);
  };

  const handleBack = () => {
    if (screenHistory.length > 1) {
      const previousScreen = screenHistory[screenHistory.length - 2];
      setScreenHistory((history) => history.slice(0, -1));
      setScreen(previousScreen);
      return;
    }

    if (onBack) {
      onBack();
      return;
    }

    navigate(-1);
  };

  const handleContinue = () => {
    goToScreen(selectedMethod === 'debit-card' ? 'card-details' : 'bank-transfer');
  };

  const amountContent = (
    <div className='mx-auto w-full h-full'>
      <div className='mb-[20px] flex flex-col gap-[24px] lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <button
            type='button'
            onClick={handleBack}
            className='mb-[6px] flex items-center gap-[6px] rounded-full text-[12px] font-semibold text-[#3B82F6] transition hover:text-[#2563EB]'
          >
            <span aria-hidden='true' className='text-[18px] leading-none'>‹</span>
            Back to dashboard
          </button>
          <h1 className='text-[20px] font-extrabold leading-tight text-[#0F172A]'>Fund Wallet</h1>
          <p className='mt-[5px] text-[12px] text-[#475569]'>Choose an amount and how you would like to fund your wallet</p>
        </div>

        <div className='w-full max-w-[320px] lg:pb-[2px]'>
          <ProgressSteps activeStep={1} />
        </div>
      </div>

      <div className='grid gap-[26px] lg:grid-cols-[minmax(0,1fr)_352px] lg:gap-[36px]'>
        <section className='rounded-[18px] border border-[#E2E8F0] bg-white p-[18px] shadow-[0_5px_14px_rgba(15,23,42,0.04)] sm:p-[24px] lg:rounded-[24px] lg:p-[28px]'>
          <h2 className='text-[18px] font-extrabold text-[#0F172A] lg:text-[20px]'>How much would you like to add?</h2>
          <p className='mt-[4px] text-[12px] text-[#475569] lg:mt-[6px] lg:text-[14px]'>Select a preset or enter a custom amount</p>

          <label className='mt-[18px] block lg:mt-[22px]'>
            <span className='mb-[7px] block text-[12px] font-semibold text-[#475569] lg:mb-[8px] lg:text-[12px]'>Custom Amount (₦)</span>
            <span className='flex h-[46px] items-center gap-[8px] rounded-[13px] border border-[#DCE5F1] bg-white px-[12px] focus-within:border-[#3B82F6] lg:h-[50px] lg:gap-[10px] lg:rounded-[14px] lg:px-[14px]'>
              <span className='text-[12px] font-semibold text-[#475569] lg:text-[14px]'>₦</span>
              <input
                type='number'
                min='50'
                value={customAmount}
                onChange={(event) => {
                  const value = event.target.value;
                  setCustomAmount(value);
                  if (value) setSelectedAmount(Number(value));
                }}
                placeholder='Enter amount (Min: ₦50)'
                className='w-full bg-transparent text-[12px] text-[#0F172A] outline-none placeholder:text-[#94A3B8] lg:text-[14px]'
              />
            </span>
          </label>

          <div className='mt-[18px] lg:mt-[18px]'>
            <p className='mb-[8px] text-[12px] font-semibold text-[#475569] lg:mb-[10px] lg:text-[12px]'>Select Preset Amount</p>
            <div className='grid grid-cols-3 gap-[8px] sm:grid-cols-6 lg:gap-[8px]'>
              {presetAmounts.map((amount) => {
                const isSelected = !customAmount && selectedAmount === amount;

                return (
                  <button
                    key={amount}
                    type='button'
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={[
                      'flex h-[42px] items-center justify-center rounded-full border px-[8px] text-[12px] font-bold transition lg:h-[42px] lg:rounded-full lg:px-[8px] lg:text-[12px]',
                      isSelected
                        ? 'border-[#3B82F6] bg-[#3B82F6] text-white'
                        : 'border-[#DCE5F1] bg-white text-[#0F172A] hover:border-[#93C5FD]',
                    ].join(' ')}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                );
              })}
            </div>
          </div>

          <fieldset className='mt-[18px] lg:mt-[18px]'>
            <legend className='mb-[8px] text-[12px] font-semibold text-[#475569] lg:mb-[10px] lg:text-[12px]'>Payment Method</legend>
            <div className='grid gap-[10px] sm:grid-cols-2 lg:gap-[10px]'>
              <button
                type='button'
                role='radio'
                aria-checked={selectedMethod === 'debit-card'}
                onClick={() => setSelectedMethod('debit-card')}
                className={[
                  'flex min-h-[66px] items-center justify-between gap-[10px] rounded-[15px] border px-[12px] text-left transition lg:min-h-[72px] lg:gap-[10px] lg:rounded-[15px] lg:px-[14px]',
                  selectedMethod === 'debit-card' ? 'border-[1.5px] border-[#3B82F6] bg-[#F4F8FF]' : 'border-[#DCE5F1] bg-white hover:border-[#93C5FD]',
                ].join(' ')}
              >
                <span className='flex min-w-0 items-center gap-[10px]'>
                  <span className='flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[11px] bg-[#E7F0FF] text-[#3B82F6] lg:h-[36px] lg:w-[36px] lg:rounded-[11px]'>
                    <FiCreditCard className='h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]' />
                  </span>
                  <span className='min-w-0'>
                    <span className='block text-[12px] font-semibold text-[#0F172A] lg:text-[13px]'>Debit Card</span>
                    <span className='mt-[2px] block truncate text-[9px] text-[#94A3B8] lg:mt-[3px] lg:text-[10px]'>Visa, Mastercard, Verve</span>
                  </span>
                </span>
                <span className={[
                  'flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 lg:h-[20px] lg:w-[20px]',
                  selectedMethod === 'debit-card' ? 'border-[#3B82F6]' : 'border-[#94A3B8]',
                ].join(' ')}>
                  {selectedMethod === 'debit-card' && <span className='h-[10px] w-[10px] rounded-full bg-[#3B82F6] lg:h-[10px] lg:w-[10px]' />}
                </span>
              </button>

              <button
                type='button'
                role='radio'
                aria-checked={selectedMethod === 'bank-transfer'}
                onClick={() => setSelectedMethod('bank-transfer')}
                className={[
                  'flex min-h-[66px] items-center justify-between gap-[10px] rounded-[15px] border px-[12px] text-left transition lg:min-h-[72px] lg:gap-[10px] lg:rounded-[15px] lg:px-[14px]',
                  selectedMethod === 'bank-transfer' ? 'border-[1.5px] border-[#3B82F6] bg-[#F4F8FF]' : 'border-[#DCE5F1] bg-white hover:border-[#93C5FD]',
                ].join(' ')}
              >
                <span className='flex min-w-0 items-center gap-[10px]'>
                  <span className='flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[11px] bg-[#F1F5F9] text-[#94A3B8] lg:h-[36px] lg:w-[36px] lg:rounded-[11px]'>
                    <FiHome className='h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]' />
                  </span>
                  <span className='min-w-0'>
                    <span className='block text-[12px] font-semibold text-[#0F172A] lg:text-[13px]'>Bank Transfer</span>
                    <span className='mt-[2px] block truncate text-[9px] text-[#94A3B8] lg:mt-[3px] lg:text-[10px]'>Pay from your bank app</span>
                  </span>
                </span>
                <span className={[
                  'flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 lg:h-[20px] lg:w-[20px]',
                  selectedMethod === 'bank-transfer' ? 'border-[#3B82F6]' : 'border-[#94A3B8]',
                ].join(' ')}>
                  {selectedMethod === 'bank-transfer' && <span className='h-[10px] w-[10px] rounded-full bg-[#3B82F6] lg:h-[10px] lg:w-[10px]' />}
                </span>
              </button>
            </div>
          </fieldset>
        </section>

        <div className='lg:pt-0'>
          <WalletCard
            method={selectedMethod === 'debit-card' ? 'Debit Card' : 'Bank Transfer'}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </div>
  );

  let content = amountContent;
  if (screen === 'card-details') {
    content = <DebitCardPage selectedAmount={selectedAmount} onBack={handleBack} onFundWallet={() => goToScreen('confirm-account')} />;
  } else if (screen === 'bank-transfer') {
    content = <BankTransferPage selectedAmount={selectedAmount} onBack={handleBack} onContinue={() => goToScreen('verify-payment')} />;
  } else if (screen === 'confirm-account') {
    content = <ConfirmAccountPage selectedAmount={selectedAmount} onBack={handleBack} onContinue={() => goToScreen('payment-complete')} />;
  } else if (screen === 'verify-payment') {
    content = <VerifyPaymentPage selectedAmount={selectedAmount} onBack={handleBack} onVerify={() => goToScreen('payment-complete')} />;
  } else if (screen === 'payment-complete') {
    content = (
      <PaymentCompletePage
        selectedAmount={selectedAmount}
        method={selectedMethod === 'debit-card' ? 'Debit card' : 'Bank transfer'}
        onBack={handleBack}
        onBackHome={() => {
          if (onBack) onBack();
          else navigate('/dashboard');
        }}
      />
    );
  }

  if (embedded) {
    return <div className='min-h-screen bg-[#F8FAFC] px-0 py-[22px] pb-[110px] md:pb-[32px]'>{content}</div>;
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
  );
}

export default FundWallet;