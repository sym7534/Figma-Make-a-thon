import Machines from "../imports/Machines-3-846";
import UsedMachineStatistics from "../imports/UsedMachineStatistics-3-1232";
import OpenMachineStatistics from "../imports/OpenMachineStatistics-3-1247";

interface MachinesWithStatsProps {
  onMachineClick: (machineType: "used" | "open") => void;
  selectedMachine: "used" | "open" | null;
  onBackFromStats: () => void;
}

export function MachinesWithStats({ onMachineClick, selectedMachine, onBackFromStats }: MachinesWithStatsProps) {
  return (
    <div className="relative size-full overflow-hidden">
      {/* Sliding container for machines and stats */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{
          transform: selectedMachine ? "translateX(-402px)" : "translateX(0)",
          width: "804px",
        }}
      >
        {/* Machines list */}
        <div className="w-[402px] h-[874px] flex-shrink-0">
          <MachinesWithClicks onMachineClick={onMachineClick} />
        </div>

        {/* Stats page */}
        <div className="w-[402px] h-[874px] flex-shrink-0">
          {selectedMachine === "used" ? (
            <UsedMachineStatistics onBack={onBackFromStats} />
          ) : selectedMachine === "open" ? (
            <OpenMachineStatistics onBack={onBackFromStats} />
          ) : (
            <div className="bg-[#fefefe] size-full" />
          )}
        </div>
      </div>
    </div>
  );
}

function MachinesWithClicks({ onMachineClick }: { onMachineClick: (type: "used" | "open") => void }) {
  return (
    <div className="relative size-full bg-[#fefefe]">
      {/* Base Machines component with all existing frames */}
      <div className="absolute inset-0">
        <Machines />
      </div>
      
      {/* Clickable overlays with hover effects positioned over machine images */}
      {/* Row 1 */}
      <div 
        className="absolute left-0 size-[172px] top-[97px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onMachineClick("used")} 
      />
      <div 
        className="absolute left-[115px] size-[172px] top-[97px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onMachineClick("used")} 
      />
      <div 
        className="absolute left-[230px] size-[172px] top-[97px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onMachineClick("open")} 
      />
      
      {/* Row 2 */}
      <div 
        className="absolute left-0 size-[172px] top-[300px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onMachineClick("open")} 
      />
      <div 
        className="absolute left-[115px] size-[172px] top-[300px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onMachineClick("used")} 
      />
      <div 
        className="absolute left-[230px] size-[172px] top-[300px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onMachineClick("open")} 
      />
      
      {/* Row 3 */}
      <div 
        className="absolute left-0 size-[172px] top-[503px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onMachineClick("used")} 
      />
      <div 
        className="absolute left-[115px] size-[172px] top-[503px] cursor-pointer z-10 transition-transform duration-200 hover:scale-110" 
        onClick={() => onMachineClick("open")} 
      />
      
      {/* Clickable overlays positioned over info frames/cards */}
      {/* Row 1 frames */}
      <div className="absolute h-[74px] left-[15px] top-[138px] w-[93px] cursor-pointer z-20" onClick={() => onMachineClick("used")} />
      <div className="absolute h-[74px] left-[130px] top-[138px] w-[93px] cursor-pointer z-20" onClick={() => onMachineClick("used")} />
      <div className="absolute h-[74px] left-[245px] top-[138px] w-[93px] cursor-pointer z-20" onClick={() => onMachineClick("open")} />
      
      {/* Row 2 frames */}
      <div className="absolute h-[74px] left-[15px] top-[341px] w-[93px] cursor-pointer z-20" onClick={() => onMachineClick("open")} />
      <div className="absolute h-[74px] left-[130px] top-[341px] w-[93px] cursor-pointer z-20" onClick={() => onMachineClick("used")} />
      <div className="absolute h-[74px] left-[245px] top-[341px] w-[93px] cursor-pointer z-20" onClick={() => onMachineClick("open")} />
      
      {/* Row 3 frames */}
      <div className="absolute h-[74px] left-[15px] top-[544px] w-[93px] cursor-pointer z-20" onClick={() => onMachineClick("used")} />
      <div className="absolute h-[74px] left-[130px] top-[544px] w-[93px] cursor-pointer z-20" onClick={() => onMachineClick("open")} />
    </div>
  );
}
