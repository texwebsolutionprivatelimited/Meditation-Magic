import React from 'react';
import { RefreshCw, ChevronRight, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-base sm:text-lg font-serif font-black text-[#1C0320] mb-3 flex items-center gap-2">
      <ChevronRight className="w-5 h-5 text-[#6B1736] shrink-0" />
      {title}
    </h2>
    <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-3 pl-7">
      {children}
    </div>
  </div>
);

export default function RefundPolicy() {
  return (
    <div className="pt-24 min-h-screen bg-[#E2D5F3] text-gray-900">

      {/* Page Header */}
      <div className="relative pt-2 pb-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-white/40 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-4">
            <RefreshCw className="w-4 h-4 text-[#6B1736] animate-pulse" />
            Returns &amp; Refunds
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C0320] leading-tight mb-4 drop-shadow-sm">
            Refund Policy
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Your satisfaction matters to us. Read our clear and fair refund guidelines below.
          </p>
          <p className="text-xs text-gray-400 mt-3 font-medium">
            Last updated: June 2025 &nbsp;·&nbsp; Meditation Magic — With Neelam Arora
          </p>
        </div>
      </div>

      {/* Content Card */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white/70 border border-purple-200 rounded-3xl p-8 sm:p-12 shadow-sm">

          <Section title="Our Refund Philosophy">
            <p>
              At <strong className="text-[#1C0320]">Meditation Magic</strong>, we put our heart and soul into every
              course, workshop, attunement, and crystal product we offer. We want every customer to feel completely
              happy and confident with their purchase. Please read our refund policy carefully before making a purchase.
            </p>
          </Section>

          <Section title="Digital Courses & Workshops">
            <p>
              Because our digital courses and workshop recordings are delivered <strong className="text-[#1C0320]">instantly</strong> upon
              purchase, we generally do not offer refunds once the content has been accessed or downloaded.
            </p>
            <p>
              However, if you experience a <strong className="text-[#1C0320]">technical issue</strong> that prevents you from accessing
              the content, or if the course content is significantly different from what was described, please contact us within
              <strong className="text-[#1C0320]"> 7 days</strong> of purchase and we will do our best to resolve the issue or offer a replacement.
            </p>
          </Section>

          <Section title="Live Sessions & 1-on-1 Attunements">
            <p>For live 1-on-1 healing sessions or attunements, a refund can be requested if:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>You cancel at least <strong className="text-[#1C0320]">48 hours before</strong> the scheduled session.</li>
              <li>The session is cancelled by us due to unforeseen circumstances.</li>
            </ul>
            <p>
              Cancellations made <strong className="text-[#1C0320]">less than 48 hours</strong> before the session are
              non-refundable, but we are happy to reschedule for you.
            </p>
          </Section>

          <Section title="Crystal Products & Physical Items">
            <p>
              We accept returns for physical crystal products within <strong className="text-[#1C0320]">7 days</strong> of
              delivery if:
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>The item arrives <strong className="text-[#1C0320]">damaged or broken</strong> (please share a photo or video as proof).</li>
              <li>You received the <strong className="text-[#1C0320]">wrong item</strong>.</li>
            </ul>
            <p>
              Items must be returned in their original packaging and unused condition. Return shipping costs are the
              responsibility of the customer unless the return is due to our error.
            </p>
            <p>
              We do <strong className="text-[#1C0320]">not</strong> accept returns for change of mind on physical products.
            </p>
          </Section>

          <Section title="How to Request a Refund">
            <p>To start a refund or return request, please contact us within the applicable timeframe:</p>
            <ul className="list-none space-y-2">
              <li>
                <a href="mailto:meditationmagichelp@gmail.com" className="inline-flex items-center gap-2 text-[#6B1736] hover:underline font-semibold">
                  <Mail className="w-4 h-4 shrink-0" />
                  meditationmagichelp@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/919829156812?text=${encodeURIComponent("Hello! I would like to request a refund for my recent purchase.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#6B1736] hover:underline font-semibold"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  WhatsApp: +91 98291 56812
                </a>
              </li>
            </ul>
            <p>
              Please include your <strong className="text-[#1C0320]">order details, the reason for the refund</strong>, and
              any supporting photos or videos. We aim to respond within <strong className="text-[#1C0320]">2–3 business days</strong>.
            </p>
          </Section>

          <Section title="Refund Processing Time">
            <p>
              Once a refund is approved, it will be processed to your original payment method within
              <strong className="text-[#1C0320]"> 5–10 business days</strong>, depending on your bank or payment provider.
            </p>
          </Section>

          <Section title="Non-Refundable Items">
            <p>The following are not eligible for refunds:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Accessed or downloaded digital courses and workshop content.</li>
              <li>Completed live or recorded sessions.</li>
              <li>Items damaged by the customer after delivery.</li>
              <li>Sale or discounted items (unless defective).</li>
            </ul>
          </Section>

          {/* Bottom links */}
          <div className="mt-10 pt-8 border-t border-purple-100 flex flex-wrap gap-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
            <Link to="/privacy-policy" className="hover:text-[#6B1736] transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-[#6B1736] transition-colors">Terms &amp; Conditions</Link>
            <Link to="/" className="hover:text-[#6B1736] transition-colors ml-auto">← Back to Home</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
