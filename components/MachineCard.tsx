import { useMemo } from "react";
import imgOutputOnlinepngtools32 from "figma:asset/6e156db58fb7834ab43d08df5058914a5f46a6e7.png";

interface MachineCardProps {
  left: number;
  top: number;
  svgStarPath: string;
  isEmpty?: boolean;
  onClick?: () => void;
}

function generateRandomTime(max: number = 60): string {
  const totalMinutes = Math.floor(Math.random() * max);
  const minutes = Math.floor(totalMinutes);
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function generateRandomRating(): string {
  const rating = Math.floor(Math.random() * 5) + 1; // 1-5
  return `${rating}/5`;
}

function generateProgressWidth(): number {
  // Random progress between 20-75px
  return Math.floor(Math.random() * 56) + 20;
}

export function MachineCard({ left, top, svgStarPath, isEmpty = false, onClick }: MachineCardProps) {
  // Generate random values once per component instance
  const time = useMemo(() => isEmpty ? "0:00" : generateRandomTime(), [isEmpty]);
  const rating = useMemo(() => generateRandomRating(), []);
  const progressWidth = useMemo(() => generateProgressWidth(), []);

  return (
    <div 
      className="absolute backdrop-blur-[15px] backdrop-filter bg-[#fdfdfd] h-[74px] rounded-[10px] w-[93px] cursor-pointer transition-all duration-200 hover:bg-[#e8e8e8]" 
      style={{ left: `${left}px`, top: `${top}px` }}
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)]" />
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] h-[18px] leading-[normal] left-[11px] not-italic text-[13px] text-black top-[13px] w-[45px]">{time}</p>
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] h-[18px] leading-[normal] left-[17px] not-italic text-[13px] text-black top-[41px] w-[45px]">{rating}</p>
      {!isEmpty && (
        <div className="absolute left-[60px] size-[24px] top-[10px]" data-name="output-onlinepngtools (3) 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools32} />
        </div>
      )}
      <div className="absolute left-[60px] size-[26px] top-[37px]">
        <div className="absolute bottom-[9.55%] left-[2.45%] right-[2.45%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
            <path d={svgStarPath} fill="var(--fill-0, #FFDB4D)" id="Star 6" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[7px] left-[9px] rounded-[40px] top-[3px] w-[75px]" />
      {!isEmpty && (
        <div className="absolute bg-[#8e8e8e] h-[7px] left-[9px] rounded-[40px] top-[3px]" style={{ width: `${progressWidth}px` }} />
      )}
    </div>
  );
}