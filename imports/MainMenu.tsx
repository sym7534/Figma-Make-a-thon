import { useState } from "react";
import svgPaths from "./svg-i745yc13so";
import imgClosedDoor from "figma:asset/abf4661b6f6e6cdbb03609835759b94f93078391.png";
import imgOpenDoor from "figma:asset/5d80a4da2867def5488d5c3d07698f0c517a576b.png";
import imgImgbin81D34D7Bf278A8D214Df2687Fd28517D1 from "figma:asset/ed35c9cdccce7028084653fb2e1898aee7b00d66.png";
import imgOutputOnlinepngtools61 from "figma:asset/edf4235a1f69957befd53c3d0d6b1610545d72d2.png";

interface MainMenuProps {
  onDoorClick: () => void;
}

function Icon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative size-[20px] transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`} data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g filter="url(#filter0_d_1_259)" id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_d_1_259" width="28" x="-4" y="-3">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_259" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_259" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default function MainMenu({ onDoorClick }: MainMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedResidence, setSelectedResidence] = useState<string | null>(null);
  const [isDoorHovered, setIsDoorHovered] = useState(false);
  
  const residences = ["UW Place", "CMH", "MKV", "REV", "Village 1"];

  const handleResidenceSelect = (residence: string) => {
    setSelectedResidence(residence);
    setIsDropdownOpen(false);
  };

  const handleDoorClick = () => {
    if (selectedResidence) {
      onDoorClick();
    }
  };

  return (
    <div className="relative size-full" data-name="Main Menu" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 402 874\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.2308e-15 43.7 -20.1 2.6759e-15 201 437)\\'><stop stop-color=\\'rgba(68,72,83,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(42,44,50,1)\\' offset=\\'0.48317\\'/><stop stop-color=\\'rgba(29,30,33,1)\\' offset=\\'0.72476\\'/><stop stop-color=\\'rgba(16,16,16,1)\\' offset=\\'0.96635\\'/></radialGradient></defs></svg>')" }}>
      
      {/* Background for dropdown when expanded */}
      {isDropdownOpen && (
        <div className="absolute bg-[#101010] h-[207px] left-[33px] top-[652px] w-[352px]" />
      )}
      
      {/* Floor/Shadow */}
      <div className="absolute h-[292px] left-[10px] top-[452px] w-[382px]">
        <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 219">
            <path d={svgPaths.p15ea200} fill="url(#paint0_linear_1_267)" id="Polygon 3" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_267" x1="165.411" x2="165.411" y1="0" y2="292">
                <stop stopColor="#828282" />
                <stop offset="0.442308" stopColor="#141414" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Door - closed or open based on selection */}
      <div 
        className={`absolute left-[2px] size-[397px] top-[210px] ${selectedResidence ? 'cursor-pointer' : 'cursor-not-allowed opacity-80'}`}
        data-name="DOOR"
        onClick={handleDoorClick}
        onMouseEnter={() => setIsDoorHovered(true)}
        onMouseLeave={() => setIsDoorHovered(false)}
      >
        {selectedResidence ? (
          <div className={`absolute inset-0 overflow-hidden transition-all duration-200 ${isDoorHovered ? 'brightness-110 scale-[1.02]' : ''}`}>
            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[109.37%]" src={imgOpenDoor} />
          </div>
        ) : (
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClosedDoor} />
        )}
      </div>
      
      {/* Welcome Text */}
      <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[normal] left-[201.5px] not-italic text-[38px] text-center text-nowrap text-white top-[120px] translate-x-[-50%] whitespace-pre">
        {`welcome to `}
        <br aria-hidden="true" />
        waterloowash
      </p>
      
      {/* Dropdown */}
      <div className="absolute left-[33px] top-[622px] w-[342px]">
        {/* Dropdown Button */}
        <div 
          className="relative cursor-pointer hover:from-[rgba(240,240,240,0.5)] hover:to-[rgba(250,250,250,0.5)] transition-all duration-200"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-r from-[rgba(227,227,227,0.45)] h-[60px] rounded-[40px] to-[rgba(241,241,241,0.45)] w-full">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]" />
          </div>
          
          <div className="absolute right-[18px] size-[20px] top-[20px] pointer-events-none">
            <Icon isOpen={isDropdownOpen} />
          </div>
          
          <p className="absolute font-['LoRes_9_OT:Wide_Regular',sans-serif] leading-[27px] left-[24px] not-italic text-[18px] text-nowrap text-white top-[16px] whitespace-pre pointer-events-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.8)]">
            {selectedResidence || "Select your residence.."}
          </p>
        </div>
        
        {/* Dropdown Options */}
        {isDropdownOpen && (
          <div className="absolute top-[70px] w-full bg-[rgba(255,255,255,0.3)] rounded-[20px] overflow-hidden shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.4)] z-50">
            {residences.map((residence, index) => (
              <div
                key={residence}
                className="h-[60px] flex items-center px-6 cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.2)] border-b border-[rgba(255,255,255,0.2)] last:border-b-0"
                onClick={() => handleResidenceSelect(residence)}
              >
                <p className="font-['LoRes_9_OT:Wide_Regular',sans-serif] text-[18px] text-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.8)]">
                  {residence}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* University of Waterloo Logo */}
      <div className="absolute h-[59px] left-[244px] top-[800px] w-[148px]" data-name="imgbin_81d34d7bf278a8d214df2687fd28517d 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgbin81D34D7Bf278A8D214Df2687Fd28517D1} />
      </div>
      <div className="absolute bg-[#101010] h-[39px] left-[259px] top-[810px] w-[28px]" />
      <div className="absolute left-[259px] size-[26px] top-[813px]" data-name="output-onlinepngtools (6) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools61} />
      </div>
    </div>
  );
}
