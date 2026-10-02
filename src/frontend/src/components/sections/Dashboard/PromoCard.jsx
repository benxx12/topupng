export default function PromoCard() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-[24px] p-[24px] w-full gap-[12px] items-start flex flex-col">
      <h3 className="text-[16px] font-semibold text-[white]">Get 5% cashback on MTN Airtime!</h3>
      <p className="text-blue-200 text-[14px]">
        Top up your line now and enjoy exclusive weekly cashback bonuses credited straight to your digital wallet.
      </p>
      <button className="textwhite hover:text-blue-200 font-semibold text-sm transition">
        Learn more →
      </button>
    </div>
  );
}