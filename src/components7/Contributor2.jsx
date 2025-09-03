import React from "react";

const Contributor2 = () => {
  const contributors = Array.from({ length: 6 }, (_, i) => ({
    no: "01",
    date: "1/10/2024",
    title: "The Prime Minister of Singapore visits to farm",
  }));

  return (
    <section className="space-y-6">

      <div className="bg-white m-10 p-6 rounded-lg shadow-md">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">Contributor</h4>

        {/* Table headers */}
        <div className="flex bg-green-500 rounded-t-lg p-2 text-sm font-semibold text-white">
          <div className="w-1/6">No</div>
          <div className="w-2/6">Date</div>
          <div className="w-3/6">Title</div>
        </div>

        {/* Table rows */}
        {contributors.map((row, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center p-2 text-sm">
              <div className="w-1/6">{row.no}</div>
              <div className="w-2/6">{row.date}</div>
              <div className="w-3/6 flex items-center gap-2">
                <span className="bg-green-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  +
                </span>
                {row.title}
              </div>
            </div>

            {/* Insert Announcement after first row */}
            {index === 0 && (
              <div className="bg-white m-6 p-4  text-center">
                <h4 className="text-sm font-semibold text-black mb-2">Announcement</h4>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Facilisis pharetra risus varius mauris at. 
                  Vitae elit morbi suspendisse lectus id magna lorem elementum. Risus quis facilisis at amet eleifend vitae. 
                  Adipiscing nunc faucibus rhoncus lorem. Mauris ipsum elit dolor tellus. In suscipit risus amet quam. 
                  Lectus eget nam adipiscing sed egestas nunc neque. Et dui est senectus diam vestibulum morbi. 
                  Ut urna ut et diam. Eget pharetra libero orci arcu nisi. Semper facilisis in egestas hac. Volutpat nec sed risus semper pharetra arcu.
                </p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Contributor2;
