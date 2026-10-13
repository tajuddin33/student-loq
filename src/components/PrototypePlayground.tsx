import React, { useState } from 'react';
import { Sparkles, Activity, Smartphone, Sliders, Check, Clock, ChevronRight, ShieldCheck, Heart } from 'lucide-react';

export const PrototypePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'mobile' | 'tokens'>('analytics');

  // Telemetry widget states
  const [timeRange, setTimeRange] = useState<'1H' | '24H' | '7D'>('24H');
  const [filterSeverity, setFilterSeverity] = useState<'all' | 'critical'>('all');
  const [selectedIncident, setSelectedIncident] = useState<number | null>(null);

  // Mobile flow states
  const [mobileStep, setMobileStep] = useState<1 | 2 | 3>(1);
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sarah Lin (Cardiologist)');
  const [selectedTime, setSelectedTime] = useState('02:30 PM');

  // Token inspector states
  const [testRadius, setTestRadius] = useState<number>(8);
  const [interactiveSwitch, setInteractiveSwitch] = useState<boolean>(true);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  return (
    <section id="playground" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Craft Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Test Interactive Prototypes Live
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Experience the interaction models, state handling, and ergonomic patterns firsthand.
            Switch between the three functional prototype simulations below.
          </p>
        </div>

        {/* Tab navigation buttons */}
        <div className="flex items-center gap-2 mb-8 p-1.5 bg-zinc-900 border border-zinc-800 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>01. SaaS Observability Console</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'mobile'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>02. Mobile Telehealth Flow</span>
          </button>

          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'tokens'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>03. Design Token Lab</span>
          </button>
        </div>

        {/* Interactive Sandbox Container */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121316] border border-zinc-800 min-h-[460px]">
          {/* TAB 1: SAAS OBSERVABILITY CONSOLE */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white">Cluster Telemetry Matrix</span>
                  <span className="text-xs text-zinc-500 font-mono">us-east-prod-04</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 text-xs">
                    {(['1H', '24H', '7D'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setTimeRange(r)}
                        className={`px-2.5 py-1 rounded transition-colors font-mono ${
                          timeRange === r ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setFilterSeverity(filterSeverity === 'all' ? 'critical' : 'all')}
                    className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                      filterSeverity === 'critical'
                        ? 'bg-red-950/40 border-red-800 text-red-300'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {filterSeverity === 'critical' ? 'Filtered: Critical Only' : 'Show All Events'}
                  </button>
                </div>
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-xs text-zinc-400 mb-1">Average P99 Latency</div>
                  <div className="text-2xl font-bold text-white font-mono tabular-nums">
                    {timeRange === '1H' ? '42.8 ms' : timeRange === '24H' ? '38.2 ms' : '36.4 ms'}
                  </div>
                  <div className="text-xs text-emerald-400 mt-1 font-mono">−14.2% vs last cycle</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-xs text-zinc-400 mb-1">Compute Utilization</div>
                  <div className="text-2xl font-bold text-white font-mono tabular-nums">
                    {timeRange === '1H' ? '68.4%' : timeRange === '24H' ? '61.2%' : '59.8%'}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-mono">Normal operating envelope</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-xs text-zinc-400 mb-1">Active Incident Pods</div>
                  <div className="text-2xl font-bold text-white font-mono tabular-nums">
                    {filterSeverity === 'critical' ? '1 Critical' : '3 Anomalies'}
                  </div>
                  <div className="text-xs text-blue-400 mt-1">Real-time sync active</div>
                </div>
              </div>

              {/* Interactive Telemetry Chart SVG */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                  <span className="font-medium text-zinc-200">Real-Time Throughput (req/sec)</span>
                  <span className="font-mono">Window: {timeRange}</span>
                </div>
                <div className="h-32 w-full relative">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 100">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d={
                        timeRange === '1H'
                          ? 'M0,80 Q100,20 200,60 T400,30 T500,45 L500,100 L0,100 Z'
                          : timeRange === '24H'
                          ? 'M0,70 Q120,40 240,75 T380,25 T500,30 L500,100 L0,100 Z'
                          : 'M0,60 Q80,75 180,40 T360,65 T500,20 L500,100 L0,100 Z'
                      }
                      fill="url(#chartGradient)"
                    />
                    {/* Trend line */}
                    <path
                      d={
                        timeRange === '1H'
                          ? 'M0,80 Q100,20 200,60 T400,30 T500,45'
                          : timeRange === '24H'
                          ? 'M0,70 Q120,40 240,75 T380,25 T500,30'
                          : 'M0,60 Q80,75 180,40 T360,65 T500,20'
                      }
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Clickable incident table */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Correlated Incident Logs (Click to Inspect)
                </div>
                {[
                  { id: 1, name: 'auth-service-pod-09', code: '504 GATEWAY TIMEOUT', time: '14:22:08', sev: 'critical' },
                  { id: 2, name: 'payment-queue-worker', code: 'SPIKE IN QUEUE DEPTH (>8k)', time: '14:18:32', sev: 'warning' },
                ]
                  .filter((item) => filterSeverity === 'all' || item.sev === 'critical')
                  .map((log) => (
                    <div
                      key={log.id}
                      onClick={() => setSelectedIncident(selectedIncident === log.id ? null : log.id)}
                      className={`p-3 rounded-lg border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer transition-colors ${
                        selectedIncident === log.id
                          ? 'bg-zinc-800 border-blue-500 text-white'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-blue-400">{log.name}</span>
                        <span className="text-zinc-400 font-mono">[{log.code}]</span>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-400">
                        <span className="font-mono">{log.time}</span>
                        <span className="text-blue-400 font-medium">
                          {selectedIncident === log.id ? 'Close Details ▲' : 'Inspect Stack Trace ▼'}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>

              {selectedIncident && (
                <div className="p-4 rounded-xl bg-zinc-950 border border-blue-900/60 text-xs font-mono text-zinc-300 space-y-1">
                  <div className="text-blue-400 font-semibold mb-1">Contextual Inspector View:</div>
                  <div>at ServiceRegistry.callNode (registry.ts:182:14)</div>
                  <div>caused by: Downstream timeout on redis-cluster-shard-01 after 2500ms</div>
                  <div className="text-emerald-400 pt-1">Automated failover routed successfully to replica 02.</div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: MOBILE TELEHEALTH FLOW */}
          {activeTab === 'mobile' && (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#090a0c] border border-zinc-800 shadow-xl">
              {/* Phone header status simulation */}
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 pb-2 border-b border-zinc-800 font-mono">
                <span>09:41</span>
                <span>Veloce Care App</span>
                <span>5G · 100%</span>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6 text-xs text-zinc-400 font-medium">
                <div className={`flex items-center gap-1.5 ${mobileStep >= 1 ? 'text-white' : ''}`}>
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Specialist</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                <div className={`flex items-center gap-1.5 ${mobileStep >= 2 ? 'text-white' : ''}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${mobileStep >= 2 ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400'}`}>2</span>
                  <span>Slot</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                <div className={`flex items-center gap-1.5 ${mobileStep >= 3 ? 'text-white' : ''}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${mobileStep >= 3 ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400'}`}>3</span>
                  <span>Confirm</span>
                </div>
              </div>

              {/* Step 1: Specialist Selection */}
              {mobileStep === 1 && (
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-white mb-2">Select Attending Specialist</div>
                  {[
                    { name: 'Dr. Sarah Lin (Cardiologist)', time: 'Available today · 15m wait' },
                    { name: 'Dr. Michael Hayes (Neurologist)', time: 'Available tomorrow morning' },
                    { name: 'Dr. Elena Rostova (General Health)', time: 'Available in 35 mins' },
                  ].map((doc) => (
                    <button
                      key={doc.name}
                      onClick={() => setSelectedDoctor(doc.name)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs flex items-center justify-between cursor-pointer ${
                        selectedDoctor === doc.name
                          ? 'bg-zinc-800/90 border-blue-500 text-white'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-white">{doc.name}</div>
                        <div className="text-zinc-400 mt-0.5">{doc.time}</div>
                      </div>
                      {selectedDoctor === doc.name && <Check className="w-4 h-4 text-blue-400" />}
                    </button>
                  ))}

                  <button
                    onClick={() => setMobileStep(2)}
                    className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Continue to Time Slot</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Step 2: Time Slot */}
              {mobileStep === 2 && (
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-white">Select Consultation Window</div>
                  <div className="text-xs text-zinc-400">Doctor: {selectedDoctor}</div>

                  <div className="grid grid-cols-3 gap-2">
                    {['10:00 AM', '02:30 PM', '04:45 PM'].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 px-2 rounded-xl border text-xs font-mono font-medium transition-colors text-center cursor-pointer ${
                          selectedTime === slot
                            ? 'bg-blue-600 border-blue-500 text-white'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => setMobileStep(1)}
                      className="w-1/3 py-3 border border-zinc-800 text-zinc-300 hover:text-white rounded-xl text-xs font-medium cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setMobileStep(3)}
                      className="w-2/3 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {mobileStep === 3 && (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-600 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Consultation Booked</h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      {selectedDoctor} · Today at {selectedTime}
                    </p>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl text-xs text-zinc-300 border border-zinc-800 text-left">
                    <div className="font-semibold text-white mb-1">Encrypted Room Link Ready</div>
                    <div className="text-zinc-400">Doctor will ping your device 2 minutes prior.</div>
                  </div>
                  <button
                    onClick={() => setMobileStep(1)}
                    className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium rounded-xl transition-colors cursor-pointer"
                  >
                    Reset Mobile Flow Simulation
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: DESIGN TOKEN LAB */}
          {activeTab === 'tokens' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div>
                  <h4 className="text-sm font-semibold text-white">Prism System Interactive Component Matrix</h4>
                  <p className="text-xs text-zinc-400">Test live state transitions and token radius adjustments.</p>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  WCAG AA Status: <span className="text-emerald-400 font-semibold">100% Passed</span>
                </div>
              </div>

              {/* Interactive Radius Slider */}
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center justify-between text-xs text-zinc-300 mb-2 font-medium">
                  <span>Interactive Token Radius: <span className="font-mono text-blue-400">{testRadius}px</span></span>
                  <span className="text-zinc-500 font-mono text-[11px]">$token-border-radius-base</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={testRadius}
                  onChange={(e) => setTestRadius(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Component State Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Button States */}
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Button Variants
                  </div>
                  <button
                    style={{ borderRadius: `${testRadius}px` }}
                    onClick={() => {
                      setButtonLoading(true);
                      setTimeout(() => setButtonLoading(false), 900);
                    }}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {buttonLoading ? (
                      <span className="font-mono text-xs">Simulating Action...</span>
                    ) : (
                      <span>Primary CTA (Click Me)</span>
                    )}
                  </button>

                  <button
                    style={{ borderRadius: `${testRadius}px` }}
                    className="w-full py-2.5 px-4 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Secondary Action
                  </button>

                  <button
                    disabled
                    style={{ borderRadius: `${testRadius}px` }}
                    className="w-full py-2.5 px-4 text-xs font-medium text-zinc-600 bg-zinc-900 border border-zinc-800/80 cursor-not-allowed opacity-60"
                  >
                    Disabled State (3:1 Contrast)
                  </button>
                </div>

                {/* Accessible Form Inputs & Toggles */}
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Form & Toggle States
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Semantic Token Sync</span>
                    <button
                      onClick={() => setInteractiveSwitch(!interactiveSwitch)}
                      role="switch"
                      aria-checked={interactiveSwitch}
                      className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                        interactiveSwitch ? 'bg-blue-600' : 'bg-zinc-800'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                          interactiveSwitch ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Text Field with Focus Ring</label>
                    <input
                      type="text"
                      defaultValue="Tajuddin / System Lead"
                      style={{ borderRadius: `${testRadius}px` }}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Mathematical Contrast Inspection */}
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Accessibility Token Math
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Text Contrast:</span>
                      <span className="font-mono text-emerald-400 font-semibold">14.2:1 (Pass AAA)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Primary Accent:</span>
                      <span className="font-mono text-emerald-400 font-semibold">5.1:1 (Pass AA)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Active Focus Ring:</span>
                      <span className="font-mono text-emerald-400 font-semibold">3.8:1 (Pass AA)</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-normal">
                    Calculated mathematically against #0c0d0e background field.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
