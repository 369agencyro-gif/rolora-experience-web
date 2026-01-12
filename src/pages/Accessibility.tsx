import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const Accessibility = () => {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="font-barlow font-extrabold text-4xl md:text-5xl text-primary mb-4 tracking-wide">
            Accessibility Statement
          </h1>
          <p className="text-muted-foreground mb-12">
            Last Updated: January 12, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Our Commitment</h2>
              <p>
                Rolora Spa is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Conformance Status</h2>
              <p>
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>
              <p className="mt-4">
                Our efforts to ensure accessibility include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using semantic HTML to ensure proper document structure</li>
                <li>Providing text alternatives for non-text content</li>
                <li>Ensuring sufficient color contrast ratios</li>
                <li>Making all functionality available from a keyboard</li>
                <li>Providing clear and consistent navigation</li>
                <li>Ensuring forms have proper labels and error identification</li>
                <li>Using responsive design for various devices and screen sizes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Accessibility Features</h2>
              
              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2">Navigation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consistent navigation structure throughout the website</li>
                <li>Skip navigation links for keyboard users</li>
                <li>Clear focus indicators for interactive elements</li>
                <li>Logical heading hierarchy</li>
              </ul>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-6">Visual Design</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Color contrast meets WCAG AA standards</li>
                <li>Text can be resized up to 200% without loss of functionality</li>
                <li>Content is readable and functional without style sheets</li>
                <li>No content flashes more than three times per second</li>
              </ul>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-6">Forms and Interactivity</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All form fields have associated labels</li>
                <li>Error messages are clear and specific</li>
                <li>Required fields are clearly indicated</li>
                <li>Interactive elements are keyboard accessible</li>
              </ul>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Assistive Technology Compatibility</h2>
              <p>
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Physical Location Accessibility</h2>
              <p>
                Our spa location at 2744 E Coast Hwy Suite 5, Corona Del Mar, CA 92625 is committed to providing accessible facilities:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Wheelchair accessible entrance</li>
                <li>Accessible parking spaces available</li>
                <li>Accessible restroom facilities</li>
                <li>Service animals welcome</li>
              </ul>
              <p className="mt-4">
                If you require specific accommodations for your visit, please contact us in advance and we will do our best to meet your needs.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Known Limitations</h2>
              <p>
                While we strive for comprehensive accessibility, some content may have limitations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some older images may lack detailed alt text descriptions</li>
                <li>Third-party content or integrations may not meet all accessibility standards</li>
                <li>Video content may be in the process of receiving captions</li>
              </ul>
              <p className="mt-4">
                We are actively working to address these limitations and improve accessibility across all content.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Feedback and Assistance</h2>
              <p>
                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or need assistance, please contact us:
              </p>
              <div className="mt-4 p-6 bg-muted/50 rounded-lg">
                <p className="font-semibold">Rolora Spa</p>
                <p>2744 E Coast Hwy Suite 5</p>
                <p>Corona Del Mar, CA 92625</p>
                <p className="mt-2">Email: info@roloraspa.com</p>
                <p>Phone: (949) 291-3808</p>
              </div>
              <p className="mt-4">
                When contacting us, please include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The web page URL where you encountered the issue</li>
                <li>A description of the problem</li>
                <li>The assistive technology you were using (if applicable)</li>
                <li>Your preferred method of contact</li>
              </ul>
              <p className="mt-4">
                We aim to respond to accessibility feedback within 2 business days.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Continuous Improvement</h2>
              <p>
                Rolora Spa is committed to ongoing accessibility improvements. We regularly:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conduct accessibility audits of our website</li>
                <li>Train our team on accessibility best practices</li>
                <li>Review and update our accessibility policies</li>
                <li>Incorporate accessibility into our development process</li>
              </ul>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">Legal Compliance</h2>
              <p>
                This accessibility statement is provided in accordance with the Americans with Disabilities Act (ADA) and California state accessibility requirements. We are committed to complying with all applicable accessibility laws and regulations.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Accessibility;
