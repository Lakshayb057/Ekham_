import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemoModal: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onOpenDemoModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    { title: '1. The Fragmentation', duration: '0:45', quote: 'NGOs lose 40% of their operational bandwidth to repetitive paperwork.' },
    { title: '2. The Lost Donors', duration: '1:12', quote: 'Third-party aggregators held donor data captive, starving causes of repeat support.' },
    { title: '3. The EKhum Awakening', duration: '1:50', quote: 'One unified operating system: instant 80G, 1-click 10BD, and donor ownership.' },
    { title: '4. Impact at Scale', duration: '2:30', quote: 'Technology that multiplies human kindness across millions of lives.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-[#14201A] border border-[#23352D] text-white rounded-[2rem] w-full max-w-3xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors z-30"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Simulation Canvas */}
        <div className="relative aspect-video w-full bg-[#0E1713] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
            alt="Children in classroom smiling and learning"
            className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 filter brightness-90' : 'filter brightness-60'}`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Subtitle / Quote Overlay */}
          <div className="absolute bottom-16 left-6 right-6 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EB5E28] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" /> Chapter {activeChapter + 1}
            </div>
            <p className="text-base sm:text-lg font-semibold text-white max-w-xl mx-auto drop-shadow-md leading-relaxed">
              "{chapters[activeChapter].quote}"
            </p>
          </div>

          {/* Video Controls Bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#EB5E28] flex items-center justify-center transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <span className="text-[11px] text-gray-300 font-mono">01:42 / 03:00</span>
            </div>

            {/* Fake scrubber */}
            <div className="w-1/3 bg-white/20 h-1 rounded-full overflow-hidden">
              <div className="bg-[#EB5E28] h-full w-3/5"></div>
            </div>
          </div>
        </div>

        {/* Chapters Navigation */}
        <div className="p-6 bg-[#16231D] border-t border-[#23352D]">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
            DOCUMENTARY CHAPTERS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  activeChapter === idx
                    ? 'bg-[#EB5E28]/15 border-[#EB5E28] text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                <div className="text-xs font-bold truncate">{ch.title}</div>
                <div className="text-[10px] text-gray-400">{ch.duration}</div>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-gray-300">
              Ready to bring unified digital infrastructure to your organization?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenDemoModal();
              }}
              className="px-5 py-2.5 bg-[#EB5E28] hover:bg-[#D84E1A] text-white text-xs font-bold rounded-xl shadow transition-all whitespace-nowrap"
            >
              Book a 15-Min Walkthrough
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
