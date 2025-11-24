import { useState } from "react";
import svgPaths from "./svg-otfuc64pq4";
import imgOutputOnlinepngtools121 from "figma:asset/0969a74cc16217c6eac6eddc582a06a56075d69c.png";
import imgOutputOnlinepngtools42 from "figma:asset/d5ae44c154e90efd5e7b1c6a33b99eaf79561fea.png";
import imgOutputOnlinepngtools120 from "figma:asset/ec639fe009802eb1209066e2972b1aef09c26d88.png";
import imgClaimedMachine from "figma:asset/da3d9de73db9ea90f5b48c70eb75873cb2feeb3d.png";

function Frame({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(214,214,214,0.2)] h-[63px] left-[22px] rounded-[40px] top-[791px] w-[358px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]" />
      <div 
        className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(214,214,214,0.2)] h-[57px] left-[114px] rounded-[40px] top-[3px] w-[130px] cursor-pointer transition-all duration-200 hover:bg-[rgba(180,180,180,0.3)]"
        onClick={onBack}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]" />
      </div>
      <div className="absolute left-[982px] size-[59px] top-[-945px]" data-name="output-onlinepngtools (1) 21">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools121} />
      </div>
      <div className="absolute flex items-center justify-center left-[194px] size-[49px] top-[7px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="size-[49px]" data-name="output-onlinepngtools (2) 2" />
        </div>
      </div>
      <div className="absolute h-[59px] left-[151px] top-[2px] w-[56px] pointer-events-none" data-name="output-onlinepngtools (4) 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools42} />
      </div>
    </div>
  );
}

export default function OpenMachineStatistics({ onBack }: { onBack?: () => void }) {
  const [starRatings, setStarRatings] = useState([true, true, false, false, false]); // true = gold, false = gray
  const [isClaimed, setIsClaimed] = useState(false);

  const toggleStar = (index: number) => {
    const newRatings = [...starRatings];
    newRatings[index] = !newRatings[index];
    setStarRatings(newRatings);
  };

  const handleClaimMachine = () => {
    setIsClaimed(true);
  };

  return (
    <div className="bg-[#fefefe] relative size-full" data-name="Open Machine Statistics">
      <div 
        className="absolute backdrop-blur-[15px] backdrop-filter bg-[#c4efc9] h-[75px] left-[16px] rounded-[40px] top-[439px] w-[370px] cursor-pointer transition-all duration-200 hover:bg-[#a8e0b0]" 
        data-name="Rounded rectangle"
        onClick={handleClaimMachine}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-[25px] size-[351px] top-[99px]" data-name="output-onlinepngtools (1) 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={isClaimed ? imgClaimedMachine : imgOutputOnlinepngtools120} />
      </div>
      
      {/* Star 1 */}
      <div className="absolute left-[113px] size-[35px] top-[390px] cursor-pointer z-10" onClick={() => toggleStar(0)}>
        <div className="absolute bottom-[9.55%] left-[2.45%] right-[2.45%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 32">
            <path d={svgPaths.p23d9ca80} fill={starRatings[0] ? "#FFDB4D" : "#DDDDDD"} id="Star 1" />
          </svg>
        </div>
      </div>
      
      {/* Star 2 */}
      <div className="absolute left-[148px] size-[35px] top-[390px] cursor-pointer z-10" onClick={() => toggleStar(1)}>
        <div className="absolute bottom-[9.55%] left-[2.45%] right-[2.45%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 32">
            <path d={svgPaths.p23d9ca80} fill={starRatings[1] ? "#FFDB4D" : "#DDDDDD"} id="Star 2" />
          </svg>
        </div>
      </div>
      
      {/* Star 3 */}
      <div className="absolute left-[183px] size-[35px] top-[390px] cursor-pointer z-10" onClick={() => toggleStar(2)}>
        <div className="absolute bottom-[9.55%] left-[2.45%] right-[2.45%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 32">
            <path d={svgPaths.p23d9ca80} fill={starRatings[2] ? "#FFDB4D" : "#DDDDDD"} id="Star 3" />
          </svg>
        </div>
      </div>
      
      {/* Star 4 */}
      <div className="absolute left-[218px] size-[35px] top-[390px] cursor-pointer z-10" onClick={() => toggleStar(3)}>
        <div className="absolute bottom-[9.55%] left-[2.45%] right-[2.45%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 32">
            <path d={svgPaths.p23d9ca80} fill={starRatings[3] ? "#FFDB4D" : "#DDDDDD"} id="Star 4" />
          </svg>
        </div>
      </div>
      
      {/* Star 5 */}
      <div className="absolute left-[253px] size-[35px] top-[390px] cursor-pointer z-10" onClick={() => toggleStar(4)}>
        <div className="absolute bottom-[9.55%] left-[2.45%] right-[2.45%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 32">
            <path d={svgPaths.p23d9ca80} fill={starRatings[4] ? "#FFDB4D" : "#DDDDDD"} id="Star 5" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bg-gradient-to-r from-[rgba(227,227,227,0.45)] h-[32px] left-[82px] rounded-[40px] to-[rgba(241,241,241,0.45)] top-[91px] w-[238px]">
        <div aria-hidden="true" className="absolute border-[5px] border-black border-solid inset-[-2.5px] pointer-events-none rounded-[42.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[57px] not-italic text-[15px] text-black text-nowrap top-[750px] whitespace-pre">{`Washer 3 ranks #1  in downtime.`}</p>
      <Frame onBack={onBack || (() => {})} />
      <p className="[text-shadow:rgba(0,0,0,0.1)_0px_4px_4px] absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[99px] not-italic text-[18px] text-black text-nowrap top-[57px] whitespace-pre">Washing Machine 4</p>
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[calc(50%-67px)] not-italic text-[15px] text-black text-nowrap top-[466px] whitespace-pre pointer-events-none">
        {isClaimed ? "CLAIMED" : "CLAIM MACHINE"}
      </p>
      <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[#ffff8c] h-[77px] left-[22px] rounded-[10px] top-[652px] w-[358px] cursor-pointer transition-all duration-200 hover:bg-[#ffff60]">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)]" />
      </div>
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[117px] not-italic text-[15px] text-black text-nowrap top-[680px] whitespace-pre pointer-events-none">RATE THIS MACHINE</p>
      <div className="absolute bg-gradient-to-r from-[rgba(227,227,227,0.45)] h-[53px] left-[14px] rounded-[40px] to-[rgba(241,241,241,0.45)] top-[523px] w-[370px] cursor-pointer transition-all duration-200 hover:from-[rgba(200,200,200,0.55)] hover:to-[rgba(215,215,215,0.55)]">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="absolute bg-gradient-to-r from-[rgba(227,227,227,0.45)] h-[53px] left-[16px] rounded-[40px] to-[rgba(241,241,241,0.45)] top-[587px] w-[370px] cursor-pointer transition-all duration-200 hover:from-[rgba(200,200,200,0.55)] hover:to-[rgba(215,215,215,0.55)]">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[32px] not-italic text-[15px] text-black text-nowrap top-[539px] whitespace-pre pointer-events-none">Total Loads Today:</p>
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[229px] not-italic text-[15px] text-black text-nowrap top-[539px] whitespace-pre pointer-events-none">24</p>
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[29px] not-italic text-[15px] text-black text-nowrap top-[603px] whitespace-pre pointer-events-none">Campus Ranking:</p>
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[200px] not-italic text-[15px] text-black text-nowrap top-[603px] whitespace-pre pointer-events-none">#14</p>
    </div>
  );
}
