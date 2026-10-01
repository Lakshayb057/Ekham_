import React from 'react';

export default function ProblemSection({ onOpenDemo }) {
  return (
<section
  id="problem"
  className="problem-section-container bg-[#FAF8F2] relative border-b border-[#EAE2D7]/80 min-h-screen flex flex-col justify-center"
  style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}
>
  <div
    className="max-w-[1260px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center"
  >
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center"
    >
      <div className="lg:col-span-4 xl:col-span-4">
        <h2
          className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.1] mb-2"
        >
          Charities<br />Deserve
          <span className="text-[#F4512A]"> Better.</span>
        </h2>
        <p
          className="text-xs sm:text-[12px] text-[#687176] leading-relaxed max-w-sm mb-1 font-normal"
        >
          Too many NGOs are held back by manual processes, fragmented
          tools, and lack of data control.
        </p>
      </div>
      <div className="lg:col-span-8 xl:col-span-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          <div
            className="bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-xl p-2.5 sm:p-3 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[82px] sm:min-h-[88px]"
          >
            <div
              className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#F4512A] text-white flex items-center justify-center mb-1.5 shadow-xs flex-shrink-0"
              style={{ width: '26px', height: '26px' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '13px', height: '13px' }}
                aria-hidden="true"
              >
                <path
                  d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
                ></path>
                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </div>
            <h3
              className="text-[11px] sm:text-[11.5px] font-bold text-[#102126] leading-snug mb-0.5 whitespace-pre-line"
            >
              80G &amp; 10BD Nightmares
            </h3>
            <p
              className="text-[9.5px] sm:text-[10px] text-[#687176] leading-snug font-normal"
            >
              Manual, delayed, and error-prone compliance.
            </p>
          </div>
          <div
            className="bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-xl p-2.5 sm:p-3 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[82px] sm:min-h-[88px]"
          >
            <div
              className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#F4512A] text-white flex items-center justify-center mb-1.5 shadow-xs flex-shrink-0"
              style={{ width: '26px', height: '26px' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '13px', height: '13px' }}
                aria-hidden="true"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
            </div>
            <h3
              className="text-[11px] sm:text-[11.5px] font-bold text-[#102126] leading-snug mb-0.5 whitespace-pre-line"
            >
              Data Captivity
            </h3>
            <p
              className="text-[9.5px] sm:text-[10px] text-[#687176] leading-snug font-normal"
            >
              Aggregators own your donors.
            </p>
          </div>
          <div
            className="bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-xl p-2.5 sm:p-3 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[82px] sm:min-h-[88px]"
          >
            <div
              className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#F4512A] text-white flex items-center justify-center mb-1.5 shadow-xs flex-shrink-0"
              style={{ width: '26px', height: '26px' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '13px', height: '13px' }}
                aria-hidden="true"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
            </div>
            <h3
              className="text-[11px] sm:text-[11.5px] font-bold text-[#102126] leading-snug mb-0.5 whitespace-pre-line"
            >
              No Visibility
            </h3>
            <p
              className="text-[9.5px] sm:text-[10px] text-[#687176] leading-snug font-normal"
            >
              Blind to donor LTV, retention and impact.
            </p>
          </div>
          <div
            className="bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-xl p-2.5 sm:p-3 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[82px] sm:min-h-[88px]"
          >
            <div
              className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#F4512A] text-white flex items-center justify-center mb-1.5 shadow-xs flex-shrink-0"
              style={{ width: '26px', height: '26px' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '13px', height: '13px' }}
                aria-hidden="true"
              >
                <path
                  d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
                ></path>
                <path
                  d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
                ></path>
                <line x1="8" x2="8" y1="2" y2="5"></line>
                <line x1="2" x2="5" y1="8" y2="8"></line>
                <line x1="16" x2="16" y1="19" y2="22"></line>
                <line x1="19" x2="22" y1="16" y2="16"></line>
              </svg>
            </div>
            <h3
              className="text-[11px] sm:text-[11.5px] font-bold text-[#102126] leading-snug mb-0.5 whitespace-pre-line"
            >
              Fragmented Operations
            </h3>
            <p
              className="text-[9.5px] sm:text-[10px] text-[#687176] leading-snug font-normal"
            >
              Multiple tools, manual work, high drop-offs.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        borderBottom: '1px solid #E5DCD0',
        marginTop: '36px',
        marginBottom: '40px',
        width: '100%',
      }}
    ></div>
    <div id="why-ekhum" style={{ paddingTop: '8px' }}>
      {/* Left-aligned Section Header matching other sections */}
      <div className="mb-6 sm:mb-8 text-left max-w-3xl">
        <span
          style={{
            fontSize: '11px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: '#F4512A',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          WHY EKHUM
        </span>
        <h2
          className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.1] mb-2"
        >
          From Fragmentation to One{' '}
          <span className="text-[#F4512A]">Connected Platform.</span>
        </h2>
        <p
          className="text-xs sm:text-[13px] text-[#687176] leading-relaxed font-normal"
        >
          EKhum connects fundraising, donations, donors, compliance,
          engagement, and analytics in one intelligent platform.
        </p>
      </div>

      <div className="why-ekhum-container relative mb-6 sm:mb-8 max-w-[1040px] mx-auto">
        {/* Main Visual Comparison Grid */}
        <div className="why-ekhum-grid">
          {/* LEFT CARD — TRADITIONAL CHARITY OPERATIONS */}
          <div
            className="why-ekhum-card-traditional"
            style={{
              backgroundColor: '#F7F5F0',
              border: '1px solid #E6E0D6',
              borderRadius: '20px',
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '260px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: '2px', zIndex: 10 }}>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#173F30',
                  letterSpacing: '-0.02em',
                  marginBottom: '2px',
                }}
              >
                Traditional Charity Operations
              </h3>
              <p
                style={{
                  fontSize: '11.5px',
                  fontWeight: '400',
                  color: '#6A7870',
                  lineHeight: '1.25',
                }}
              >
                Disconnected tools. Manual work. Limited visibility.
              </p>
            </div>

            {/* Clean Canvas with 9 Scattered Disconnected Tool Cards */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '195px',
                userSelect: 'none',
                overflow: 'hidden',
              }}
            >

              {/* 1. Campaign Tool (Top-Left Cluster) */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '8%',
                  transform: 'rotate(-9deg)',
                  width: '68px',
                  padding: '6px 5px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #ECE7DE',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  zIndex: 10,
                  cursor: 'default',
                }}
              >
                <div style={{ color: '#F4512A', marginBottom: '2px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                    <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                    <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
                    <path d="M8 6v8" />
                  </svg>
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: '700', color: '#173F30', lineHeight: '1.15' }}>
                  Campaign<br />Tool
                </span>
              </div>

              {/* 2. Spreadsheets (Top-Center Cluster) */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '31%',
                  transform: 'rotate(-4deg)',
                  padding: '6px 10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #ECE7DE',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 10,
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '3px',
                    backgroundColor: '#107C41',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '8.5px',
                    fontWeight: '800',
                    flexShrink: 0,
                  }}
                >
                  X
                </div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#173F30' }}>
                  Spreadsheets
                </span>
              </div>

              {/* 3. Payment Gateway (Top-Right Cluster) */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '9%',
                  transform: 'rotate(-7deg)',
                  width: '74px',
                  padding: '6px 5px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #ECE7DE',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  zIndex: 10,
                  cursor: 'default',
                }}
              >
                <div style={{ color: '#173F30', marginBottom: '2px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: '700', color: '#173F30', lineHeight: '1.15' }}>
                  Payment<br />Gateway
                </span>
              </div>

              {/* 4. Email Tool (Mid-Left Cluster) */}
              <div
                style={{
                  position: 'absolute',
                  top: '76px',
                  left: '10%',
                  transform: 'rotate(3deg)',
                  padding: '6px 10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #ECE7DE',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 10,
                  cursor: 'default',
                }}
              >
                <div style={{ color: '#F4512A', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  </svg>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#173F30' }}>
                  Email Tool
                </span>
              </div>

              {/* 5. Reports (Center-Cluster in Reddish Tint) */}
              <div
                style={{
                  position: 'absolute',
                  top: '68px',
                  left: '42%',
                  transform: 'rotate(-3deg)',
                  width: '68px',
                  padding: '6px 5px',
                  backgroundColor: '#FDF1EE',
                  borderRadius: '12px',
                  border: '1px solid #F9D9D2',
                  boxShadow: '0 4px 12px rgba(244, 81, 42, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  zIndex: 11,
                  cursor: 'default',
                }}
              >
                <div style={{ color: '#F4512A', marginBottom: '2px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#F4512A' }}>
                  Reports
                </span>
              </div>

              {/* 6. Manual Reports (Mid-Right Cluster) */}
              <div
                style={{
                  position: 'absolute',
                  top: '72px',
                  right: '8%',
                  transform: 'rotate(2deg)',
                  width: '74px',
                  padding: '6px 5px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #ECE7DE',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  zIndex: 10,
                  cursor: 'default',
                }}
              >
                <div style={{ color: '#173F30', marginBottom: '2px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="8" y1="13" x2="16" y2="13" />
                  </svg>
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: '700', color: '#173F30', lineHeight: '1.15' }}>
                  Manual<br />Reports
                </span>
              </div>

              {/* 7. CRM (Bottom-Left Cluster) */}
              {/* 7. CRM (Bottom-Left Cluster) */}
              <div
                className="why-card-crm"
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '10%',
                  transform: 'rotate(5deg)',
                  padding: '6px 10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #ECE7DE',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 10,
                  cursor: 'default',
                }}
              >
                <div style={{ color: '#173F30', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#173F30' }}>
                  CRM
                </span>
              </div>

              {/* 8. Donor Database (Bottom-Center Cluster) */}
              <div
                className="why-card-donors"
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '32%',
                  transform: 'rotate(-2deg)',
                  padding: '6px 10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #ECE7DE',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 10,
                  cursor: 'default',
                }}
              >
                <div style={{ color: '#173F30', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                  </svg>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#173F30' }}>
                  <span className="sm:hidden">Donors</span>
                  <span className="hidden sm:inline">Donor Database</span>
                </span>
              </div>

              {/* 9. Compliance Tracking (Bottom-Right Cluster) */}
              <div
                className="why-card-compliance"
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '9%',
                  transform: 'rotate(-7deg)',
                  padding: '6px 10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #ECE7DE',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 10,
                  cursor: 'default',
                }}
              >
                <div style={{ color: '#173F30', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#173F30' }}>
                  Compliance Tracking
                </span>
              </div>
            </div>
          </div>

          {/* Transition Arrow between cards */}
          <div className="why-ekhum-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '17px', height: '17px' }}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          {/* RIGHT CARD — WITH EKHUM */}
          <div
            className="why-ekhum-card-modern"
            style={{
              background: 'linear-gradient(145deg, #EEF5F1 0%, #E7EFE9 50%, #DCE8E1 100%)',
              border: '1px solid #CEE1D6',
              borderRadius: '20px',
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '260px',
              boxShadow: '0 4px 16px rgba(23, 63, 48, 0.04)',
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: '2px', zIndex: 10 }}>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#173F30',
                  letterSpacing: '-0.02em',
                  marginBottom: '2px',
                }}
              >
                With EKhum
              </h3>
              <p
                style={{
                  fontSize: '11.5px',
                  fontWeight: '400',
                  color: '#4D6D5D',
                  lineHeight: '1.25',
                }}
              >
                One connected platform. Complete ownership. Real-time visibility.
              </p>
            </div>

            {/* Symmetrical Canvas with Concentric Radiating Rings, Modules & Central EKhum Hub */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '195px',
                userSelect: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background Concentric Rings SVG */}
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
                viewBox="0 0 440 195"
                fill="none"
              >
                <circle cx="220" cy="97.5" r="56" stroke="#CCE0D4" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="220" cy="97.5" r="90" stroke="#CCE0D4" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
                <circle cx="220" cy="97.5" r="126" stroke="#CCE0D4" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              </svg>

              {/* Left Column of Symmetrical Module Cards */}
              <div
                className="ekhum-module-col"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  width: '124px',
                  flexShrink: 0,
                  zIndex: 10,
                  padding: '2px 0',
                }}
              >
                {/* Campaigns */}
                <div
                  className="ekhum-module-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #DBE8DF',
                    boxShadow: '0 4px 12px rgba(23, 63, 48, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    padding: '5px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div style={{ color: '#F4512A', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                      <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
                      <path d="M8 6v8" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <span className="ekhum-module-title" style={{ fontSize: '11px', fontWeight: '700', color: '#173F30', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Campaigns
                    </span>
                    <span className="ekhum-module-sub" style={{ fontSize: '8.5px', fontWeight: '500', color: '#667A70', lineHeight: 1.1, marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Plan · Execute · Track
                    </span>
                  </div>
                </div>

                {/* Donations */}
                <div
                  className="ekhum-module-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #DBE8DF',
                    boxShadow: '0 4px 12px rgba(23, 63, 48, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    padding: '5px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div style={{ color: '#F4512A', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <span className="ekhum-module-title" style={{ fontSize: '11px', fontWeight: '700', color: '#173F30', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Donations
                    </span>
                    <span className="ekhum-module-sub" style={{ fontSize: '8.5px', fontWeight: '500', color: '#667A70', lineHeight: 1.1, marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Process · Manage
                    </span>
                  </div>
                </div>

                {/* Donors */}
                <div
                  className="ekhum-module-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #DBE8DF',
                    boxShadow: '0 4px 12px rgba(23, 63, 48, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    padding: '5px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div style={{ color: '#173F30', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <span className="ekhum-module-title" style={{ fontSize: '11px', fontWeight: '700', color: '#173F30', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Donors
                    </span>
                    <span className="ekhum-module-sub" style={{ fontSize: '8.5px', fontWeight: '500', color: '#667A70', lineHeight: 1.1, marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Engage · Grow
                    </span>
                  </div>
                </div>
              </div>

              {/* Left Connector SVG */}
              <svg
                style={{
                  flex: 1,
                  height: '100%',
                  minWidth: '10px',
                  overflow: 'visible',
                  pointerEvents: 'none',
                  margin: '0 -1px',
                  zIndex: 2,
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Campaigns line (top) */}
                <path d="M 0 16 C 55 16, 50 42, 100 42" stroke="#F4512A" strokeWidth="1.5" strokeOpacity="0.45" />
                <circle cx="0" cy="16" r="2.4" fill="#F4512A" stroke="#FFFFFF" strokeWidth="1" />

                {/* Donations line (middle) */}
                <path d="M 0 50 L 100 50" stroke="#2E7D6E" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="0" cy="50" r="2.4" fill="#F4512A" stroke="#FFFFFF" strokeWidth="1" />

                {/* Donors line (bottom) */}
                <path d="M 0 84 C 55 84, 50 58, 100 58" stroke="#2E7D6E" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="0" cy="84" r="2.4" fill="#173F30" stroke="#FFFFFF" strokeWidth="1" />
              </svg>

              {/* Central EKhum Brand Hub Tile */}
              <div
                className="ekhum-hub-tile"
                style={{
                  width: '74px',
                  height: '74px',
                  backgroundColor: '#FFFFFF',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFCFB 100%)',
                  borderRadius: '18px',
                  border: '1.5px solid #D2E4DA',
                  boxShadow: '0 12px 28px rgba(23, 63, 48, 0.1), 0 2px 6px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  zIndex: 10,
                  flexShrink: 0,
                }}
              >
                <img
                  className="ekhum-hub-img"
                  src="./ekhum-logo.png"
                  alt="EKhum"
                  style={{
                    width: '58px',
                    height: 'auto',
                    maxHeight: '34px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>

              {/* Right Connector SVG */}
              <svg
                style={{
                  flex: 1,
                  height: '100%',
                  minWidth: '10px',
                  overflow: 'visible',
                  pointerEvents: 'none',
                  margin: '0 -1px',
                  zIndex: 2,
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Compliance line (top) */}
                <path d="M 0 42 C 50 42, 45 16, 100 16" stroke="#2E7D6E" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="100" cy="16" r="2.4" fill="#173F30" stroke="#FFFFFF" strokeWidth="1" />

                {/* Engagement line (middle) */}
                <path d="M 0 50 L 100 50" stroke="#F4512A" strokeWidth="1.5" strokeOpacity="0.45" />
                <circle cx="100" cy="50" r="2.4" fill="#F4512A" stroke="#FFFFFF" strokeWidth="1" />

                {/* Analytics line (bottom) */}
                <path d="M 0 58 C 50 58, 45 84, 100 84" stroke="#2E7D6E" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="100" cy="84" r="2.4" fill="#173F30" stroke="#FFFFFF" strokeWidth="1" />
              </svg>

              {/* Right Column of Symmetrical Module Cards */}
              <div
                className="ekhum-module-col"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  width: '124px',
                  flexShrink: 0,
                  zIndex: 10,
                  padding: '2px 0',
                }}
              >
                {/* Compliance */}
                <div
                  className="ekhum-module-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #DBE8DF',
                    boxShadow: '0 4px 12px rgba(23, 63, 48, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    padding: '5px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div style={{ color: '#173F30', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <span className="ekhum-module-title" style={{ fontSize: '11px', fontWeight: '700', color: '#173F30', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Compliance
                    </span>
                    <span className="ekhum-module-sub" style={{ fontSize: '8.5px', fontWeight: '500', color: '#667A70', lineHeight: 1.1, marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Stay Audit Ready
                    </span>
                  </div>
                </div>

                {/* Engagement */}
                <div
                  className="ekhum-module-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #DBE8DF',
                    boxShadow: '0 4px 12px rgba(23, 63, 48, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    padding: '5px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div style={{ color: '#F4512A', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <span className="ekhum-module-title" style={{ fontSize: '11px', fontWeight: '700', color: '#173F30', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Engagement
                    </span>
                    <span className="ekhum-module-sub" style={{ fontSize: '8.5px', fontWeight: '500', color: '#667A70', lineHeight: 1.1, marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Build Relationships
                    </span>
                  </div>
                </div>

                {/* Analytics */}
                <div
                  className="ekhum-module-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #DBE8DF',
                    boxShadow: '0 4px 12px rgba(23, 63, 48, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    padding: '5px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div style={{ color: '#173F30', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <span className="ekhum-module-title" style={{ fontSize: '11px', fontWeight: '700', color: '#173F30', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Analytics
                    </span>
                    <span className="ekhum-module-sub" style={{ fontSize: '8.5px', fontWeight: '500', color: '#667A70', lineHeight: 1.1, marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Insights for Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                <div
                  className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 pt-4 sm:pt-5 border-t border-[#E5DCD0]/70 mb-2 sm:mb-3"
                >
                  <div className="flex items-center gap-2.5 relative">
                    <div
                      className="w-8 h-8 rounded-full border border-[#F4512A]/40 bg-[#F4512A]/10 flex items-center justify-center text-[#F4512A] flex-shrink-0 shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-database w-4 h-4 stroke-[2]"
                        aria-hidden="true"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                    </div>
                    <span
                      className="text-[11.5px] sm:text-[12px] font-bold text-[#102126] leading-snug whitespace-pre-line"
                      >Charity-owned donor data</span
                    >
                    <div
                      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-[#E5DCD0]"
                    ></div>
                  </div>
                  <div className="flex items-center gap-2.5 relative">
                    <div
                      className="w-8 h-8 rounded-full border border-[#F4512A]/40 bg-[#F4512A]/10 flex items-center justify-center text-[#F4512A] flex-shrink-0 shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-file-text w-4 h-4 stroke-[2]"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
                        ></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                    </div>
                    <span
                      className="text-[11.5px] sm:text-[12px] font-bold text-[#102126] leading-snug whitespace-pre-line"
                      >Simplified 80G &amp; Form 10BD workflows</span
                    >
                    <div
                      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-[#E5DCD0]"
                    ></div>
                  </div>
                  <div className="flex items-center gap-2.5 relative">
                    <div
                      className="w-8 h-8 rounded-full border border-[#F4512A]/40 bg-[#F4512A]/10 flex items-center justify-center text-[#F4512A] flex-shrink-0 shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users w-4 h-4 stroke-[2]"
                        aria-hidden="true"
                      >
                        <path
                          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                        ></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <span
                      className="text-[11.5px] sm:text-[12px] font-bold text-[#102126] leading-snug whitespace-pre-line"
                      >Automated donor engagement</span
                    >
                    <div
                      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-[#E5DCD0]"
                    ></div>
                  </div>
                  <div className="flex items-center gap-2.5 relative">
                    <div
                      className="w-8 h-8 rounded-full border border-[#F4512A]/40 bg-[#F4512A]/10 flex items-center justify-center text-[#F4512A] flex-shrink-0 shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chart-line lucide-line-chart w-4 h-4 stroke-[2]"
                        aria-hidden="true"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                    </div>
                    <span
                      className="text-[11.5px] sm:text-[12px] font-bold text-[#102126] leading-snug whitespace-pre-line"
                      >Real-time reporting and AI insights</span
                    >
                  </div>
                </div>
                <div className="flex justify-center mt-2 sm:mt-3">
                  
{/* Hidden until functional: See How EKhum Works */}

                </div>
              </div>
            </div>
          </section>
  );
}
