"use client";

import { useState } from "react";
import { FaCalculator, FaCheckCircle, FaMoneyCheckAlt, FaCalendarCheck } from "react-icons/fa";

export interface PaymentPlanCalculatorProps {
  title?: string;
  subtitle?: string;
  defaultPropertyPriceBDT?: number;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  onApplyPlan?: (summaryText: string) => void;
}

export default function PaymentPlanCalculator({
  title = "Payment Plan & Installment Estimator",
  subtitle = "Calculate your down payment, flexible monthly installment schedule, and handover balance.",
  defaultPropertyPriceBDT = 8500000,
  bgTheme = "divisions-green",
  onApplyPlan,
}: PaymentPlanCalculatorProps) {
  const [totalPrice, setTotalPrice] = useState<number>(defaultPropertyPriceBDT);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [installmentDurationMonths, setInstallmentDurationMonths] = useState<number>(36);

  // Calculation Math
  const downPaymentAmount = Math.round(totalPrice * (downPaymentPercent / 100));
  const remainingAmount = totalPrice - downPaymentAmount;
  const handoverAmount = Math.round(totalPrice * 0.15); // 15% on handover
  const monthlyInstallmentAmount = Math.round((remainingAmount - handoverAmount) / installmentDurationMonths);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "white": "bg-white text-[#183b2b] border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="payment-calculator" className={`py-24 relative ${containerClasses}`}>
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
              <FaCalculator className="text-xs" />
              <span>Financial Planner</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#183b2b]">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#183b2b]/75 font-normal">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders & Parameter Inputs */}
          <div className="lg:col-span-7 border border-[#183b2b]/15 bg-white p-8 space-y-6 shadow-sm">
            
            {/* Input 1: Total Property Value */}
            <div className="space-y-3">
              <div className="flex justify-between font-mono text-xs text-[#183b2b]">
                <span className="font-bold uppercase text-[#183b2b]/70">Total Property / Share Price</span>
                <span className="font-bold text-[#ca8a04]">BDT {totalPrice.toLocaleString()}</span>
              </div>

              <input
                type="range"
                min={2500000}
                max={25000000}
                step={250000}
                value={totalPrice}
                onChange={(e) => setTotalPrice(Number(e.target.value))}
                className="w-full accent-[#ca8a04] cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#183b2b]/60">
                <span>BDT 25 Lacs</span>
                <span>BDT 2.5 Crore</span>
              </div>
            </div>

            {/* Input 2: Down Payment Percentage */}
            <div className="space-y-3 pt-2 border-t border-[#183b2b]/15">
              <div className="flex justify-between font-mono text-xs text-[#183b2b]">
                <span className="font-bold uppercase text-[#183b2b]/70">Down Payment Percentage</span>
                <span className="font-bold text-[#ca8a04]">{downPaymentPercent}% (BDT {downPaymentAmount.toLocaleString()})</span>
              </div>

              <div className="grid grid-cols-4 gap-2 font-mono text-xs">
                {[15, 25, 35, 50].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => setDownPaymentPercent(pct)}
                    className={`py-2.5 border transition-all cursor-pointer font-bold ${
                      downPaymentPercent === pct
                        ? "bg-[#183b2b] text-white border-[#183b2b]"
                        : "border-[#183b2b]/20 bg-[#f3f6f2] hover:bg-[#ca8a04] hover:text-neutral-950"
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Installment Duration */}
            <div className="space-y-3 pt-2 border-t border-[#183b2b]/15">
              <div className="flex justify-between font-mono text-xs text-[#183b2b]">
                <span className="font-bold uppercase text-[#183b2b]/70">Installment Duration</span>
                <span className="font-bold text-[#ca8a04]">{installmentDurationMonths} Months</span>
              </div>

              <div className="grid grid-cols-4 gap-2 font-mono text-xs">
                {[12, 24, 36, 48].map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setInstallmentDurationMonths(months)}
                    className={`py-2.5 border transition-all cursor-pointer font-bold ${
                      installmentDurationMonths === months
                        ? "bg-[#183b2b] text-white border-[#183b2b]"
                        : "border-[#183b2b]/20 bg-[#f3f6f2] hover:bg-[#ca8a04] hover:text-neutral-950"
                    }`}
                  >
                    {months} Mos
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Breakdown Card */}
          <div className="lg:col-span-5 border border-[#183b2b]/15 bg-white text-[#183b2b] p-8 relative overflow-hidden shadow-lg space-y-6">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[#ca8a04]" />

            <div className="flex items-center justify-between border-b border-[#183b2b]/15 pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ca8a04]">
                Installment Breakdown
              </span>
              <span className="font-mono text-[10px] text-[#183b2b]/70 bg-[#f3f6f2] border border-[#183b2b]/15 px-2.5 py-1">
                Zero Hidden Charges
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between text-[#183b2b]/80">
                <span>Down Payment ({downPaymentPercent}%):</span>
                <span className="text-[#ca8a04] font-bold">BDT {downPaymentAmount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-[#183b2b]/80">
                <span>Handover Balance (15%):</span>
                <span className="text-[#183b2b] font-bold">BDT {handoverAmount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-[#183b2b]/70">
                <span>Installment Tenure:</span>
                <span className="text-[#183b2b]">{installmentDurationMonths} Equal Monthly Payments</span>
              </div>
            </div>

            <div className="border-y border-[#ca8a04]/30 bg-[#f3f6f2] p-5 text-center">
              <span className="font-mono text-xs uppercase tracking-wider text-[#183b2b]/70 block">
                Estimated Monthly Installment
              </span>
              <div className="text-3xl font-mono font-bold text-[#ca8a04] mt-1">
                BDT {monthlyInstallmentAmount.toLocaleString()} / mo
              </div>
            </div>

            <button
              onClick={() => onApplyPlan && onApplyPlan(`Plan: BDT ${totalPrice.toLocaleString()} - ${downPaymentPercent}% down`)}
              className="w-full bg-[#183b2b] hover:bg-[#ca8a04] py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-neutral-950 transition-all shadow-md cursor-pointer"
            >
              Apply This Payment Plan
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
