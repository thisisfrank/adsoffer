import { X } from 'lucide-react';

interface GuaranteeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function GuaranteeModal({ isOpen, onClose }: GuaranteeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0f1419] border border-slate-700 rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl mb-8" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            <span className="italic">Delivery Guarantee</span>
          </h2>

          <div className="text-slate-300 space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Our Commitment</h3>
              <p className="leading-relaxed">
                Clean Cut Systems guarantees delivery of your video package within the specified timeline (7 days for Holiday Ad Sprint, 14 days for Q4 Campaign Ready) from project kickoff, or you receive a full refund.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">What We Guarantee</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Delivery of all videos specified in your package</li>
                <li>Videos meet the agreed-upon duration (up to 45 seconds each)</li>
                <li>Videos include all specified elements (voiceover, script, editing, etc.)</li>
                <li>Videos are delivered in all standard formats (MP4, square, vertical, landscape)</li>
                <li>Revision rounds as specified in your package</li>
                <li>On-time delivery by the agreed deadline</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Project Scope</h3>
              <p className="leading-relaxed mb-3">
                Before starting, we'll create a project brief that includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Video types and quantity</li>
                <li>Key messaging and talking points</li>
                <li>Visual style and brand guidelines</li>
                <li>Delivery timeline and milestones</li>
                <li>Revision round process</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Timeline</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Project kickoff begins after briefing call and receipt of 50% deposit</li>
                <li>Holiday Ad Sprint: 7 calendar days from kickoff</li>
                <li>Q4 Campaign Ready: 14 calendar days from kickoff</li>
                <li>Timeline may be paused if client is unresponsive for 3+ business days</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Revisions</h3>
              <p className="leading-relaxed">
                Holiday Ad Sprint includes 1 revision round. Q4 Campaign Ready includes 2 revision rounds. Each revision round allows changes to messaging, pacing, voiceover, or visual elements. Major scope changes (new video types, different concepts) are not covered by revision rounds.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Client Responsibilities</h3>
              <p className="leading-relaxed mb-3">To ensure timely delivery, clients must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Respond to requests within 48 business hours</li>
                <li>Provide necessary assets (logos, product images, etc.) within 2 business days of request</li>
                <li>Provide clear, consolidated feedback during revision rounds</li>
                <li>Review and approve deliverables within specified timeframes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Exclusions</h3>
              <p className="leading-relaxed mb-3">This guarantee does not cover:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Delays caused by client unavailability or late asset delivery</li>
                <li>Changes to project scope after approval</li>
                <li>Third-party platform issues (stock footage unavailability, etc.)</li>
                <li>Subjective preferences not specified in original brief</li>
                <li>Force majeure events beyond our control</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Refund Process</h3>
              <p className="leading-relaxed mb-3">
                If we miss the delivery deadline without qualifying exclusions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Client must submit refund request within 7 days of missed deadline</li>
                <li>We'll review and respond within 3 business days</li>
                <li>If approved, full refund processed within 10 business days</li>
                <li>Upon refund, all video files and IP rights revert to Clean Cut Systems</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Ownership</h3>
              <p className="leading-relaxed">
                Upon final payment, you receive full rights to use the videos across any platform, in perpetuity. You own the final deliverables and can modify, repurpose, or redistribute them as needed for your business.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeModal;
