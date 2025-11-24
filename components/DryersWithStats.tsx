import Dryers from "../imports/Dryers-3-865";
import UsedDryerStatistics from "../imports/UsedDryerStatistics";
import OpenDryerStatistics from "../imports/OpenDryerStatistics";

interface DryersWithStatsProps {
  onDryerClick: (dryerType: "used" | "open") => void;
  selectedDryer: "used" | "open" | null;
  onBackFromStats: () => void;
}

export function DryersWithStats({ onDryerClick, selectedDryer, onBackFromStats }: DryersWithStatsProps) {
  return (
    <div className="relative size-full overflow-hidden">
      {/* Sliding container for dryers and stats */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{
          transform: selectedDryer ? "translateX(-402px)" : "translateX(0)",
          width: "804px",
        }}
      >
        {/* Dryers list */}
        <div className="w-[402px] h-[874px] flex-shrink-0">
          <DryersWithClicks onDryerClick={onDryerClick} />
        </div>

        {/* Stats page */}
        <div className="w-[402px] h-[874px] flex-shrink-0">
          {selectedDryer === "used" ? (
            <UsedDryerStatistics onBack={onBackFromStats} />
          ) : selectedDryer === "open" ? (
            <OpenDryerStatistics onBack={onBackFromStats} />
          ) : (
            <div className="bg-[#fefefe] size-full" />
          )}
        </div>
      </div>
    </div>
  );
}

function DryersWithClicks({ onDryerClick }: { onDryerClick: (type: "used" | "open") => void }) {
  return (
    <div className="relative size-full bg-[#fefefe]">
      {/* Base Dryers component with all existing frames */}
      <div className="absolute inset-0">
        <Dryers />
      </div>
      
      {/* Clickable overlays with hover effects positioned over dryer images */}
      {/* Row 1 */}
      <div 
        className="absolute left-[-4px] size-[172px] top-[97px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("used")} 
      />
      <div 
        className="absolute left-[115px] size-[172px] top-[97px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("used")} 
      />
      <div 
        className="absolute left-[234px] size-[172px] top-[97px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("open")} 
      />
      
      {/* Row 2 */}
      <div 
        className="absolute left-[-4px] size-[172px] top-[300px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("used")} 
      />
      <div 
        className="absolute left-[117px] size-[172px] top-[300px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("open")} 
      />
      <div 
        className="absolute left-[234px] size-[172px] top-[300px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("used")} 
      />
      
      {/* Row 3 */}
      <div 
        className="absolute left-0 size-[172px] top-[503px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("open")} 
      />
      <div 
        className="absolute left-[117px] size-[172px] top-[503px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("used")} 
      />
      <div 
        className="absolute left-[234px] size-[172px] top-[503px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onDryerClick("open")} 
      />
      
      {/* Clickable overlays positioned over info frames/cards */}
      {/* Row 1 frames */}
      <div className="absolute h-[74px] left-[11px] top-[138px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("used")} />
      <div className="absolute h-[74px] left-[130px] top-[138px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("used")} />
      <div className="absolute h-[74px] left-[249px] top-[138px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("open")} />
      
      {/* Row 2 frames */}
      <div className="absolute h-[74px] left-[11px] top-[341px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("used")} />
      <div className="absolute h-[74px] left-[132px] top-[341px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("open")} />
      <div className="absolute h-[74px] left-[249px] top-[341px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("used")} />
      
      {/* Row 3 frames */}
      <div className="absolute h-[74px] left-[15px] top-[544px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("open")} />
      <div className="absolute h-[74px] left-[132px] top-[544px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("used")} />
      <div className="absolute h-[74px] left-[249px] top-[544px] w-[93px] cursor-pointer z-20" onClick={() => onDryerClick("open")} />
    </div>
  );
}
