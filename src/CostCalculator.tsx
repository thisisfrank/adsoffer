import { useState } from 'react';

export default function CostCalculator() {
  const [coreFeatures, setCoreFeatures] = useState(10);
  const [valueYear1, setValueYear1] = useState(100000);
  const [valueYear5, setValueYear5] = useState(500000);

  const calculateTraditionalCost = () => {
    const baseCostPerFeature = 3500;

    let complexityMultiplier = 1.0;
    if (valueYear1 >= 500000) {
      complexityMultiplier = 1.8;
    } else if (valueYear1 >= 250000) {
      complexityMultiplier = 1.5;
    } else if (valueYear1 >= 50000) {
      complexityMultiplier = 1.3;
    }

    let visionMultiplier = 1.0;
    if (valueYear5 >= 5000000) {
      visionMultiplier = 1.5;
    } else if (valueYear5 >= 2000000) {
      visionMultiplier = 1.3;
    } else if (valueYear5 >= 500000) {
      visionMultiplier = 1.15;
    }

    const traditionalCost = Math.round(
      (coreFeatures * baseCostPerFeature) * complexityMultiplier * visionMultiplier
    );

    return traditionalCost;
  };

  const traditionalCost = calculateTraditionalCost();

  const calculateROI = () => {
    const mvpCost = 9500;
    const year1ROI = ((valueYear1 - mvpCost) / mvpCost) * 100;
    const year5ROI = ((valueYear5 - mvpCost) / mvpCost) * 100;

    return {
      year1: Math.round(year1ROI),
      year5: Math.round(year5ROI)
    };
  };

  const roi = calculateROI();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl md:rounded-2xl p-4 md:p-10 max-w-7xl mx-auto">
      <p className="text-slate-300 mb-6 md:mb-8 leading-relaxed text-center text-sm md:text-base">
        See how much you could save compared to traditional development costs. Adjust the inputs below to match your project.
      </p>

      <div className="space-y-4 md:space-y-6">
        <div>
          <label className="block text-white font-semibold mb-2 text-sm md:text-base">
            How many core features will your MVP need? (login, payments, dashboard, etc.)
          </label>
          <div className="flex items-center gap-2 md:gap-4">
            <input
              type="range"
              min="3"
              max="20"
              value={coreFeatures}
              onChange={(e) => setCoreFeatures(Number(e.target.value))}
              className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-white"
              style={{
                background: `linear-gradient(to right, white ${((coreFeatures - 3) / 17) * 100}%, rgb(51, 65, 85) ${((coreFeatures - 3) / 17) * 100}%)`
              }}
            />
            <span className="text-white font-bold text-base md:text-xl w-12 md:w-32 text-right">{coreFeatures}</span>
          </div>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2 text-sm md:text-base">
            What do you expect the value of this to be in one year?
          </label>
          <div className="flex items-center gap-2 md:gap-4">
            <input
              type="range"
              min="0"
              max="1000000"
              step="10000"
              value={valueYear1}
              onChange={(e) => setValueYear1(Number(e.target.value))}
              className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-white"
              style={{
                background: `linear-gradient(to right, white ${(valueYear1 / 1000000) * 100}%, rgb(51, 65, 85) ${(valueYear1 / 1000000) * 100}%)`
              }}
            />
            <span className="text-white font-bold text-sm md:text-xl w-20 md:w-32 text-right">
              {formatCurrency(valueYear1)}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2 text-sm md:text-base">
            What do you expect it to be in five years?
          </label>
          <div className="flex items-center gap-2 md:gap-4">
            <input
              type="range"
              min="0"
              max="10000000"
              step="50000"
              value={valueYear5}
              onChange={(e) => setValueYear5(Number(e.target.value))}
              className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-white"
              style={{
                background: `linear-gradient(to right, white ${(valueYear5 / 10000000) * 100}%, rgb(51, 65, 85) ${(valueYear5 / 10000000) * 100}%)`
              }}
            />
            <span className="text-white font-bold text-sm md:text-xl w-20 md:w-32 text-right">
              {formatCurrency(valueYear5)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-2">
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg md:rounded-xl p-3 md:p-5 text-center transition-all hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <h3 className="text-xs md:text-lg mb-1 md:mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Our Dev Cost</span>
            </h3>
            <p className="text-lg md:text-3xl font-bold text-white">$9,500</p>
            <p className="text-slate-400 text-xs mt-0.5 md:mt-1">Fixed price</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg md:rounded-xl p-3 md:p-5 text-center transition-all hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <h3 className="text-xs md:text-lg mb-1 md:mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Traditional Cost</span>
            </h3>
            <p className="text-lg md:text-3xl font-bold text-white">{formatCurrency(traditionalCost)}</p>
            <p className="text-slate-400 text-xs mt-0.5 md:mt-1">Based on inputs</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg md:rounded-xl p-3 md:p-5 text-center transition-all hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <h3 className="text-xs md:text-lg mb-1 md:mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">1-Year ROI</span>
            </h3>
            <p className="text-lg md:text-3xl font-bold text-white">
              {roi.year1.toLocaleString()}%
            </p>
            <p className="text-slate-400 text-xs mt-0.5 md:mt-1">
              {formatCurrency(valueYear1)} in value
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg md:rounded-xl p-3 md:p-5 text-center transition-all hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <h3 className="text-xs md:text-lg mb-1 md:mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">5-Year ROI</span>
            </h3>
            <p className="text-lg md:text-3xl font-bold text-white">
              {roi.year5.toLocaleString()}%
            </p>
            <p className="text-slate-400 text-xs mt-0.5 md:mt-1">
              {formatCurrency(valueYear5)} in value
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
