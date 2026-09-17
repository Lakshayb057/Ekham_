import React, { useRef, useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  Users, 
  Lightbulb, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Star 
} from 'lucide-react';

interface HowWeMakeChangeSectionProps {
  onOpenDemoModal?: () => void;
}

export const HowWeMakeChangeSection: React.FC<HowWeMakeChangeSectionProps> = ({ 
  onOpenDemoModal 
}) => {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [, setActiveStep] = useState<number>(0);

  const steps = [
    {
      icon: Users,
      title: 'Support',
      description: 'Donors contribute to real causes',
    },
    {
      icon: Lightbulb,
      title: 'Enable',
      description: 'NGOs run impactful programs',
    },
    {
      icon: BookOpen,
      title: 'Educate',
      description: 'Children get better opportunities',
    },
    {
      icon: TrendingUp,
      title: 'Empower',
      description: 'Skills build brighter futures',
    },
    {
      icon: Award,
      title: 'Transform',
      description: 'Communities thrive',
    },
  ];

  const handleScrollSteps = (direction: 'left' | 'right') => {
    if (!stepsContainerRef.current) return;
    const scrollAmount = 260;
    stepsContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    if (direction === 'right') {
      setActiveStep((prev) => Math.min(steps.length, prev + 1));
    } else {
      setActiveStep((prev) => Math.max(0, prev - 1));
    }
  };

  return (
    <section id="how-we-make-change" className="py-14 sm:py-16 lg:py-20 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Botanical Leaf Accents */}
      <div className="absolute -bottom-6 -left-4 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none z-0 opacity-85">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 200C50 170 90 120 110 70" stroke="#2B3D34" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          <path d="M40 170C25 150 30 125 55 120C55 145 50 165 40 170Z" fill="#3D5649" opacity="0.9" />
          <path d="M70 135C55 115 60 90 85 85C85 110 80 130 70 135Z" fill="#507060" opacity="0.85" />
          <path d="M100 95C85 75 90 50 115 45C115 70 110 90 100 95Z" fill="#3D5649" opacity="0.9" />
          <path d="M125 55C115 40 120 20 140 15C140 35 135 50 125 55Z" fill="#507060" opacity="0.8" />
          <path d="M20 195C55 195 90 180 115 160C85 160 50 175 20 195Z" fill="#EAE2D7" opacity="0.7" />
        </svg>
      </div>

      <div className="absolute -bottom-6 -right-4 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none z-0 opacity-85">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M200 200C150 170 110 120 90 70" stroke="#2B3D34" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          <path d="M160 170C175 150 170 125 145 120C145 145 150 165 160 170Z" fill="#3D5649" opacity="0.9" />
          <path d="M130 135C145 115 140 90 115 85C115 110 120 130 130 135Z" fill="#507060" opacity="0.85" />
          <path d="M100 95C115 75 110 50 85 45C85 70 90 90 100 95Z" fill="#3D5649" opacity="0.9" />
          <path d="M75 55C85 40 80 20 60 15C60 35 65 50 75 55Z" fill="#507060" opacity="0.8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header row with Title and Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EB5E28] block mb-2">
              HOW WE MAKE CHANGE
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-black text-[#14201A] tracking-tight leading-tight mb-1.5">
              From Possibility to Progress.
            </h3>
            <p className="text-xs sm:text-sm text-[#667069] font-normal">
              A child's tomorrow can be brighter — and together, we make it happen.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
            <button
              onClick={() => handleScrollSteps('left')}
              aria-label="Previous step"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-gray-50 border border-[#DDD5C9] flex items-center justify-center text-[#14201A] shadow-xs hover:shadow transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollSteps('right')}
              aria-label="Next step"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-gray-50 border border-[#DDD5C9] flex items-center justify-center text-[#14201A] shadow-xs hover:shadow transition-all duration-200"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Connected Linear Process: 5 Circular Steps + Star Milestone */}
        <div 
          ref={stepsContainerRef}
          className="flex items-center justify-between gap-3 sm:gap-4 overflow-x-auto pb-6 pt-2 scrollbar-none scroll-smooth"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={idx}>
                {/* Step Item */}
                <div className="flex flex-col items-center text-center flex-shrink-0 w-36 sm:w-40 lg:w-44 group">
                  {/* Circle Icon Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#EADFD5] shadow-xs flex items-center justify-center mb-3.5 text-[#EB5E28] group-hover:border-[#EB5E28] group-hover:scale-105 transition-all duration-200">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#14201A] mb-1">
                    {step.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-[#667069] leading-tight font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Dotted Arrow Connector */}
                <div className="flex items-center justify-center text-[#EB5E28]/70 flex-shrink-0 px-1 select-none">
                  <span className="tracking-[0.2em] text-xs font-bold mr-0.5">····</span>
                  <span className="text-xs font-bold">›</span>
                </div>
              </React.Fragment>
            );
          })}

          {/* Final Star Milestone */}
          <div className="flex items-center gap-3 flex-shrink-0 pl-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#EB5E28]/40 shadow-xs flex items-center justify-center text-[#EB5E28] flex-shrink-0">
              <Star className="w-6 h-6 stroke-[2.2] fill-[#EB5E28]/10" />
            </div>

            {/* Handwritten flourish: "Real People Real Change" */}
            <div className="relative select-none pointer-events-none -rotate-3 flex-shrink-0">
              <span className="font-handwriting text-xl sm:text-2xl text-[#2B3530] font-bold block leading-none">
                Real People<br />Real Change
              </span>
              <svg className="w-20 h-3 text-[#EB5E28] mt-1" viewBox="0 0 100 15" fill="none">
                <path d="M5 10C35 4 65 14 95 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </div>

        {/* Bottom Center CTA Button */}
        <div className="flex justify-center mt-10 sm:mt-12 relative z-10">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-white hover:bg-gray-50 text-xs sm:text-sm font-semibold text-[#14201A] rounded-full border border-[#DDD5C9] shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Be Part of Their Brighter Tomorrow</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
