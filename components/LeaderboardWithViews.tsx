import { useState } from "react";
import Leaderboard from "../imports/Leaderboard-3-884";
import Leaderboard2 from "../imports/Leaderboard2";
import Leaderboard3 from "../imports/Leaderboard3";

type LeaderboardView = "default" | "users" | "residence";

interface LeaderboardWithViewsProps {
  // Empty for now, can add props later if needed
}

export function LeaderboardWithViews({}: LeaderboardWithViewsProps) {
  const [currentView, setCurrentView] = useState<LeaderboardView>("default");

  const handleTabClick = (tab: "weekly" | "monthly" | "term" | "users" | "programs" | "residence") => {
    if (tab === "residence") {
      setCurrentView("residence");
    } else if (tab === "users") {
      setCurrentView("users");
    } else {
      // weekly, monthly, term all show the users view
      setCurrentView("users");
    }
  };

  return (
    <div className="relative size-full overflow-hidden bg-[#fefefe]">
      {/* Sliding container for different leaderboard views */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{
          transform:
            currentView === "default"
              ? "translateX(0)"
              : currentView === "users"
              ? "translateX(-402px)"
              : "translateX(-804px)",
          width: "1206px",
        }}
      >
        {/* Default Leaderboard */}
        <div className="w-[402px] h-[874px] flex-shrink-0">
          <LeaderboardWithClicks onTabClick={handleTabClick} />
        </div>

        {/* Users Leaderboard (Leaderboard2) */}
        <div className="w-[402px] h-[874px] flex-shrink-0">
          <Leaderboard2WithClicks onTabClick={handleTabClick} />
        </div>

        {/* Residence Leaderboard (Leaderboard3) */}
        <div className="w-[402px] h-[874px] flex-shrink-0">
          <Leaderboard3WithClicks onTabClick={handleTabClick} />
        </div>
      </div>
    </div>
  );
}

function LeaderboardWithClicks({ onTabClick }: { onTabClick: (tab: "weekly" | "monthly" | "term" | "users" | "programs" | "residence") => void }) {
  return (
    <div className="relative size-full">
      <Leaderboard />
      {/* Transparent click overlays for tabs */}
      <div className="absolute h-[29px] left-[16px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("weekly")} />
      <div className="absolute h-[29px] left-[142px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("monthly")} />
      <div className="absolute h-[29px] left-[268px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("term")} />
      
      {/* Bottom category tabs */}
      <div className="absolute h-[29px] left-[14px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("users")} />
      <div className="absolute h-[29px] left-[140px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("programs")} />
      <div className="absolute h-[29px] left-[266px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("residence")} />
    </div>
  );
}

function Leaderboard2WithClicks({ onTabClick }: { onTabClick: (tab: "weekly" | "monthly" | "term" | "users" | "programs" | "residence") => void }) {
  return (
    <div className="relative size-full">
      <Leaderboard2 />
      {/* Transparent click overlays for tabs */}
      <div className="absolute h-[29px] left-[16px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("weekly")} />
      <div className="absolute h-[29px] left-[142px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("monthly")} />
      <div className="absolute h-[29px] left-[268px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("term")} />
      
      {/* Bottom category tabs */}
      <div className="absolute h-[29px] left-[14px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("users")} />
      <div className="absolute h-[29px] left-[140px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("programs")} />
      <div className="absolute h-[29px] left-[266px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("residence")} />
    </div>
  );
}

function Leaderboard3WithClicks({ onTabClick }: { onTabClick: (tab: "weekly" | "monthly" | "term" | "users" | "programs" | "residence") => void }) {
  return (
    <div className="relative size-full">
      <Leaderboard3 />
      {/* Transparent click overlays for tabs */}
      <div className="absolute h-[29px] left-[16px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("weekly")} />
      <div className="absolute h-[29px] left-[142px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("monthly")} />
      <div className="absolute h-[29px] left-[268px] top-[96px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("term")} />
      
      {/* Bottom category tabs */}
      <div className="absolute h-[29px] left-[14px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("users")} />
      <div className="absolute h-[29px] left-[140px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("programs")} />
      <div className="absolute h-[29px] left-[266px] top-[738px] w-[118px] cursor-pointer z-10" onClick={() => onTabClick("residence")} />
    </div>
  );
}
