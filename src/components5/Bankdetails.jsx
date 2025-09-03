import CreditCardImg from "../assets/creditcard.svg";
import GooglePayImg from "../assets/repo.svg";
import ApplePayImg from "../assets/apple.svg";

function Bankdetails() {
  return (
    <div className="bg-[#ECF1F0] text-black mx-[100px] p-6 sm:p-12 md:p-16 rounded-xl w-full max-w-5xl mx-auto flex flex-col md:flex-row items-start shadow-lg gap-8 mb-10">

      {/* Left Side: Donation and Payment Methods */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">Donate Here</h2>
        <p className="mb-6 text-base text-[#727272]">
          Thank you for your generosity. Your donation<br/> has made a meaningful
          difference today, and<br/> its impact will be felt for years to come.
          Thank<br/> you for your trust and belief in our mission.
        </p>

        <h3 className="text-lg font-semibold mb-4">Accepted Payment Methods</h3>

        <div className="space-y-4">
          <div className="flex items-center bg-white w-full sm:w-[350px] h-12 rounded-2xl shadow p-3">
            <img src={CreditCardImg} alt="Credit Card" className="w-10 h-6 mr-3 object-contain" />
            <span>Credit Card</span>
          </div>
          <div className="flex items-center bg-white w-full sm:w-[350px] h-12 rounded-2xl shadow p-3">
            <img src={GooglePayImg} alt="Google Pay" className="w-10 h-6 mr-3 object-contain" />
            <span>Google Pay</span>
          </div>
          <div className="flex items-center bg-white w-full sm:w-[350px] h-12 rounded-2xl shadow p-3">
            <img src={ApplePayImg} alt="Apple Pay" className="w-10 h-6 mr-3 object-contain" />
            <span>Apple Pay</span>
          </div>
        </div>
      </div>

      {/* Right Side: Bank Details */}
      <div className="flex-1 w-full">
        <h2 className="text-2xl font-semibold mb-2">Bank Details</h2>
        <p className="mb-6 text-base text-[#727272]">
          Create and format headings, paragraphs,<br/> blockquotes, images, and
          videos all in one place<br/> instead.
        </p>

        <div className="grid grid-cols-2 gap-3 w-full sm:w-[350px] p-1">
          <div className="flex flex-col space-y-2 text-[#2E4049]">
            <span>Account Number</span>
            <span>Beneficiary Name</span>
            <span>IFSC Code</span>
          </div>
          <div className="flex flex-col space-y-2 text-[#2E4049]">
            <span>2223330000456987</span>
            <span>Nard Organization</span>
            <span>WRDSBI0BNKPIS</span>
          </div>
        </div>

        {/* Copy Account Details Button */}
        <button className="mt-4 px-6 py-3 bg-[#273750] text-white rounded-3xl hover:bg-[#1f2a3b] transition w-full sm:w-auto">
          COPY ACCOUNT DETAILS
        </button>
      </div>
    </div>
  );
}

export default Bankdetails;
