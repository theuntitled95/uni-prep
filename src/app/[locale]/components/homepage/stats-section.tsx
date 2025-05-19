export function StatsSection() {
  return (
    <section className="bg-indigo-900 text-white py-6">
      <div className="container mx-auto max-w-[80rem] px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">1525</div>
            <p className="text-xs md:text-sm text-gray-300">
              Students in the Crimson community
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">380</div>
            <p className="text-xs md:text-sm text-gray-300">
              Offers to Oxford & Cambridge
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">7400+</div>
            <p className="text-xs md:text-sm text-gray-300">
              Offers to Top 50 US Universities
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">2400+</div>
            <p className="text-xs md:text-sm text-gray-300">
              Offers to Top 10 UK Universities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
