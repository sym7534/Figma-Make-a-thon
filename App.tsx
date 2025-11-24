import { useState } from "react";
import MainMenu from "./imports/MainMenu";
import { MachinesWithStats } from "./components/MachinesWithStats";
import { DryersWithStats } from "./components/DryersWithStats";
import { LeaderboardWithViews } from "./components/LeaderboardWithViews";
import Profile from "./imports/Profile-3-1652";
import imgOutputOnlinepngtools121 from "figma:asset/0969a74cc16217c6eac6eddc582a06a56075d69c.png";
import imgOutputOnlinepngtools21 from "figma:asset/2f2250328fd7b506c0bc27227d3022dcfb1a6b18.png";
import imgOutputOnlinepngtools31 from "figma:asset/f912a92d7b41a9c822ce6df39268b6990cc3271e.png";
import imgOutputOnlinepngtools41 from "figma:asset/499b65151a90c6282cc7d3155f950688e8f6c306.png";
import imgOutputOnlinepngtools42 from "figma:asset/d5ae44c154e90efd5e7b1c6a33b99eaf79561fea.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"menu" | "machines" | "dryers" | "leaderboard" | "profile">("menu");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<"used" | "open" | null>(null);
  const [selectedDryer, setSelectedDryer] = useState<"used" | "open" | null>(null);

  const handleDoorClick = () => {
    setIsTransitioning(true);
    // Fade to black
    setTimeout(() => {
      setCurrentPage("machines");
    }, 500);
    // Fade from black
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const handleNavigation = (page: "machines" | "dryers" | "leaderboard" | "profile") => {
    setSelectedMachine(null); // Reset machine selection when navigating
    setSelectedDryer(null); // Reset dryer selection when navigating
    setCurrentPage(page);
  };

  const handleMachineClick = (machineType: "used" | "open") => {
    setSelectedMachine(machineType);
  };

  const handleDryerClick = (dryerType: "used" | "open") => {
    setSelectedDryer(dryerType);
  };

  const handleBackFromStats = () => {
    setSelectedMachine(null);
    setSelectedDryer(null);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="relative w-[402px] h-[874px] overflow-hidden">
        {/* Sliding container for main pages */}
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{
            transform:
              currentPage === "menu"
                ? "translateX(0)"
                : currentPage === "machines"
                ? "translateX(-402px)"
                : currentPage === "dryers"
                ? "translateX(-804px)"
                : currentPage === "leaderboard"
                ? "translateX(-1206px)"
                : "translateX(-1608px)",
            width: "2010px",
          }}
        >
          {/* Main Menu */}
          <div className="w-[402px] h-[874px] flex-shrink-0">
            <MainMenuWrapper onDoorClick={handleDoorClick} />
          </div>

          {/* Machines Page with Stats Navigation */}
          <div className="w-[402px] h-[874px] flex-shrink-0">
            <MachinesWithStats 
              onMachineClick={handleMachineClick}
              selectedMachine={selectedMachine}
              onBackFromStats={handleBackFromStats}
            />
          </div>

          {/* Dryers Page with Stats Navigation */}
          <div className="w-[402px] h-[874px] flex-shrink-0">
            <DryersWithStats 
              onDryerClick={handleDryerClick}
              selectedDryer={selectedDryer}
              onBackFromStats={handleBackFromStats}
            />
          </div>

          {/* Leaderboard Page */}
          <div className="w-[402px] h-[874px] flex-shrink-0">
            <LeaderboardWithViews />
          </div>

          {/* Profile Page */}
          <div className="w-[402px] h-[874px] flex-shrink-0">
            <Profile />
          </div>
        </div>

        {/* Fixed Navigation Bar */}
        {currentPage !== "menu" && (
          <NavigationBar 
            active={currentPage as "machines" | "dryers" | "leaderboard" | "profile"} 
            onNavigate={handleNavigation}
            showBackButton={selectedMachine !== null || selectedDryer !== null}
            onBack={handleBackFromStats}
          />
        )}

        {/* Fade transition overlay */}
        <div 
          className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-500 z-50 ${
            isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

function MainMenuWrapper({ onDoorClick }: { onDoorClick: () => void }) {
  return (
    <MainMenu onDoorClick={onDoorClick} />
  );
}

function NavigationBar({
  active,
  onNavigate,
  showBackButton,
  onBack,
}: {
  active: "machines" | "dryers" | "leaderboard" | "profile";
  onNavigate: (page: "machines" | "dryers" | "leaderboard" | "profile") => void;
  showBackButton: boolean;
  onBack: () => void;
}) {
  const sliderPosition =
    active === "machines" ? 25 : active === "dryers" ? 103 : active === "leaderboard" ? 182 : 261;

  return (
    <div className="absolute left-[22px] top-[791px] w-[358px] h-[63px] z-50">
      {/* Background container */}
      <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(214,214,214,0.2)] h-[63px] rounded-[40px] inset-0">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Conditional rendering: either normal icons or back button */}
      {showBackButton ? (
        <>
          {/* Back button centered */}
          <div 
            className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(214,214,214,0.2)] h-[57px] left-[114px] rounded-[40px] top-[3px] w-[130px] cursor-pointer transition-all duration-200 hover:bg-[rgba(180,180,180,0.3)] z-20"
            onClick={onBack}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]" />
          </div>
          <div className="absolute h-[59px] left-[151px] top-[2px] w-[56px] pointer-events-none z-30" data-name="output-onlinepngtools (4) 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools42} />
          </div>
        </>
      ) : (
        <>
          {/* Animated slider highlight - behind icons */}
          <div
            className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(214,214,214,0.2)] h-[57px] rounded-[40px] top-[3px] w-[72px] transition-all duration-300 ease-in-out z-10"
            style={{
              left: `${sliderPosition}px`,
            }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]" />
          </div>

          {/* Icons - in front of highlight */}
          <div className="absolute left-[36px] size-[49px] top-[7px] z-20 cursor-pointer" onClick={() => onNavigate("machines")}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools121} />
          </div>
          <div className="absolute flex items-center justify-center left-[115px] size-[49px] top-[7px] z-20 cursor-pointer" onClick={() => onNavigate("dryers")}>
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div className="relative size-[49px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools21} />
              </div>
            </div>
          </div>
          <div className="absolute left-[194px] size-[49px] top-[3px] z-20 cursor-pointer" onClick={() => onNavigate("leaderboard")}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools41} />
          </div>
          <div className="absolute left-[273px] size-[49px] top-[7px] z-20 cursor-pointer" onClick={() => onNavigate("profile")}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools31} />
          </div>
        </>
      )}
    </div>
  );
}