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
            <span className="italic">Our Guarantee</span>
          </h2>

          <div className="text-slate-300 space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">1. Guarantee Overview</h3>
              <p className="leading-relaxed">
                Clean Cut Systems guarantees delivery of the agreed-upon project scope within 4 weeks of project kickoff, or the client is entitled to a full refund of all fees paid.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">2. Scope Definition</h3>
              <p className="leading-relaxed mb-3">
                Prior to project kickoff, both parties will sign a Scope Document that clearly defines:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Core features to be included in the MVP (covered by guarantee)</li>
                <li>Nice-to-Have features (best effort, not covered by guarantee)</li>
                <li>Technical specifications for each feature</li>
                <li>Acceptance criteria for feature completion</li>
                <li>Delivery threshold (pending scoping conversation and project proposal)</li>
                <li>Any explicitly excluded features</li>
              </ul>
              <p className="leading-relaxed mt-3">
                <strong className="text-white">Default Delivery Threshold:</strong> Unless otherwise specified in the project proposal, successful delivery is defined as completion of all Core features as defined in the Scope Document and meeting their respective acceptance criteria.
              </p>
              <p className="leading-relaxed mt-2">
                <strong className="text-white">Feature Categorization:</strong> The Scope Document will explicitly categorize features as either "Core" (covered by guarantee) or "Nice-to-Have" (best effort, not covered by guarantee). Only Core features count toward the delivery threshold.
              </p>
              <p className="leading-relaxed mt-2">
                The Scope Document serves as the binding agreement for what constitutes "agreed-upon scope" and "successful delivery" under this guarantee.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">3. Definition of Functional</h3>
              <p className="leading-relaxed">
                "Functional" means the feature performs its core intended purpose as described in the acceptance criteria. Minor bugs that do not prevent core functionality (such as cosmetic issues, typos, or edge-case errors) are not considered delivery failures under this guarantee.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">4. Delivery Timeline</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Project kickoff is defined as the date of the kickoff meeting following receipt of the 50% deposit</li>
                <li>4-week deadline is calculated as 28 calendar days from the kickoff date</li>
                <li>Delivery is considered complete when the client receives access to a functional staging environment with the completed features</li>
                <li><strong className="text-white">Timeline Pause:</strong> If client is unresponsive for 5+ consecutive business days despite multiple contact attempts, Clean Cut Systems reserves the right to pause the project timeline until client re-engages</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">5. Acceptance and Testing Period</h3>
              <p className="leading-relaxed">
                Client has 7 days from delivery notification to test features in staging and report any failures to meet acceptance criteria. Issues reported after this 7-day period are considered post-delivery support requests and are not covered by this guarantee.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">6. Completion Measurement</h3>
              <p className="leading-relaxed mb-3">Feature completion is measured as follows:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>A feature is considered "complete" when it meets the acceptance criteria defined in the Scope Document</li>
                <li>Completion is assessed based on functionality, not aesthetic preferences or subjective satisfaction</li>
                <li>The specific delivery threshold will be documented in the project proposal (e.g., "all core features," "8 of 10 core features," "primary user flow functional")</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">7. Qualifying Conditions for Refund</h3>
              <p className="leading-relaxed mb-3">A client qualifies for a full refund if:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>The delivery threshold defined in the Scope Document is not met by the 4-week deadline, AND</li>
                <li>The client has fulfilled all requirements outlined in Section 8, AND</li>
                <li>The shortfall is not due to conditions outlined in Section 9</li>
              </ul>
              <p className="leading-relaxed mt-3">
                This guarantee covers full refund only. Partial refunds are not available under this guarantee.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">8. Client Responsibilities</h3>
              <p className="leading-relaxed mb-3">To qualify for the guarantee, the client must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Respond to feedback requests within 48 business hours</li>
                <li>Provide all required assets (logos, content, credentials, etc.) within agreed timelines</li>
                <li>Attend scheduled check-in meetings or provide written updates if unable to attend</li>
                <li>Submit any concerns about scope or progress in writing during the project</li>
                <li>Test and report issues within the 7-day acceptance period</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">9. Exclusions</h3>
              <p className="leading-relaxed mb-3">This guarantee does NOT apply in the following circumstances:</p>
              <div className="space-y-3 ml-4">
                <p className="leading-relaxed">
                  <strong className="text-white">a) Scope Changes:</strong> Any features added or modified after the Scope Document is signed are considered out-of-scope and not covered by this guarantee. Scope changes will be evaluated and, if accepted, documented via written Change Order with adjusted timeline and/or fees. Change Orders require mutual written agreement.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">b) Third-Party Dependencies:</strong> Delays caused by third-party services, APIs, or platforms outside Clean Cut Systems' control (e.g., API downtime, delayed API access approval, payment processor delays)
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">c) Client Delays:</strong> Timeline extensions caused by client unavailability, late delivery of required assets, or failure to respond within specified timeframes
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">d) Force Majeure:</strong> Delays caused by circumstances outside reasonable control, including but not limited to natural disasters, pandemics, infrastructure failures, or government actions
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">e) Mutual Agreement to Extend:</strong> If both parties agree in writing to extend the timeline, the new deadline supersedes the original 4-week deadline
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">f) Post-Delivery Issues:</strong> This guarantee covers initial delivery only. Post-delivery bug fixes, enhancements, or modifications are outside the scope of this guarantee and will be handled under separate support terms.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">10. Intellectual Property Rights</h3>
              <p className="leading-relaxed mb-2">
                Client receives full intellectual property rights to delivered work only upon: (a) receipt of final payment in full, AND (b) successful delivery per this guarantee.
              </p>
              <p className="leading-relaxed">
                In the event of a refund under this guarantee, no intellectual property rights transfer to client, and all project files, code, and IP rights revert to Clean Cut Systems.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">11. Refund Process</h3>
              <p className="leading-relaxed mb-3">If a client believes they qualify for a refund under this guarantee:</p>
              <div className="space-y-2 ml-4">
                <p className="leading-relaxed">a) Client must submit a written refund request within 7 days of the original 4-week deadline</p>
                <p className="leading-relaxed">b) Request must include specific Core features from the Scope Document that were not completed or did not meet acceptance criteria</p>
                <p className="leading-relaxed">c) Clean Cut Systems will review the request and respond within 7 business days</p>
                <p className="leading-relaxed">d) If the refund is approved, "full refund" means return of all fees paid for the project, including deposit and final payment if received</p>
                <p className="leading-relaxed">e) Funds will be returned within 14 business days via the original payment method</p>
                <p className="leading-relaxed">f) Upon refund, all project files, code, and intellectual property rights revert to Clean Cut Systems, and client must cease any use of delivered materials</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">12. Dispute Resolution</h3>
              <p className="leading-relaxed mb-3">If there is disagreement about whether the delivery threshold was met or whether acceptance criteria were satisfied:</p>
              <div className="space-y-2 ml-4">
                <p className="leading-relaxed">a) Both parties will review the Scope Document and assess each Core feature against its acceptance criteria</p>
                <p className="leading-relaxed">b) If agreement cannot be reached, both parties will engage in good-faith mediation</p>
                <p className="leading-relaxed">c) The mediator's determination of completion and acceptance criteria fulfillment will be binding</p>
                <p className="leading-relaxed">d) Mediation costs will be split equally between both parties</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">13. Limitation of Liability</h3>
              <p className="leading-relaxed">
                This guarantee is limited to a refund of fees paid for the MVP development project. Clean Cut Systems' total liability under this guarantee shall not exceed the total amount paid by the client for the project. This guarantee does not cover indirect damages, lost profits, or consequential damages of any kind.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">14. Entire Agreement</h3>
              <p className="leading-relaxed">
                This guarantee, together with the signed Scope Document and service agreement, constitutes the entire agreement between the parties regarding delivery guarantees. No verbal agreements or representations are binding unless documented in writing and signed by both parties.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeModal;
