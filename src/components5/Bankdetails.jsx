function Bankdetails() {
  return (
    <div className="bg-[#ECF1F0] text-black m-20 p-16 rounded-xl w-[1000px] h-[500px] mx-auto flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Left Side: Donation and Payment Methods */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Donate Here</h2>
          <p className="mb-6 text-base">
            Thank you for your generosity. Your donation has made a meaningful
            difference today, and its impact will be felt for years to come.
            Thank you for your trust and belief in our mission.
          </p>

          <h3 className="text-lg font-semibold mb-4">Accepted Payment Methods</h3>

          <div className="space-y-4">
            <div className="flex items-center bg-white w-[350px] h-12 rounded-xl shadow p-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Credit Card"
                className="w-10 h-6 mr-3 object-contain"
              />
              <span>Credit Card</span>
            </div>
            <div className="flex items-center bg-white w-[350px] h-12 rounded-xl shadow p-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg"
                alt="Google Pay"
                className="w-10 h-6 mr-3 object-contain"
              />
              <span>Google Pay</span>
            </div>
            <div className="flex items-center bg-white w-[350px] h-12 rounded-xl shadow p-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Pay"
                className="w-10 h-6 mr-3 object-contain"
              />
              <span>Apple Pay</span>
            </div>
          </div>
        </div>

        {/* Right Side: Bank Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Bank Details</h2>
          <p className="mb-6 text-base">
            Create and format headings, paragraphs, blockquotes, images, and
            videos all in one place instead.
          </p>

          <div className="grid grid-cols-2 gap-3 w-[350px] p-1">
            <div className="flex flex-col space-y-2 font-semibold">
              <span>Account Number</span>
              <span>Beneficiary Name</span>
              <span>IFSC Code</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span>2223330000456987</span>
              <span>Nard Organization</span>
              <span>WRDSBI0BNKPIS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bankdetails;
