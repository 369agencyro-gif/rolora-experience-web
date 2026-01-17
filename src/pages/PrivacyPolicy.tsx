import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const PrivacyPolicy = () => {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="font-barlow font-extrabold text-4xl md:text-5xl text-primary mb-4 tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last Updated: January 12, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">1. Introduction</h2>
              <p>
                Rolora Spa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website roloraspa.com, use our services, or interact with us.
              </p>
              <p>
                By using our website or services, you consent to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing and payment information</li>
                <li>Appointment and booking details</li>
                <li>Health and skin condition information relevant to treatments</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-6">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device identifiers</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and manage your appointments and bookings</li>
                <li>Provide and improve our spa services</li>
                <li>Communicate with you about appointments, promotions, and updates</li>
                <li>Process payments and prevent fraud</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
                <li>Respond to your inquiries and provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies, pixels (including Meta Pixel), and similar tracking technologies to enhance your experience, analyze website traffic, and deliver targeted advertising. You can control cookie preferences through your browser settings.
              </p>
              <p className="mt-4">
                <strong>Meta Pixel:</strong> We use Meta (Facebook) Pixel to measure the effectiveness of our advertising, understand user behavior, and deliver relevant ads. You can opt out of personalized advertising through your Facebook ad settings or by using the Digital Advertising Alliance's opt-out tool.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">5. Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third parties who help us operate our business (payment processors, booking systems, email services)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given us permission</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">6. California Privacy Rights (CCPA)</h2>
              <p>
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we have collected</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of the sale of your personal information (we do not sell personal information)</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at info@roloraspa.com or call (949) 742-5110.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">7. Children's Privacy (COPPA)</h2>
              <p>
                Our website and services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will promptly delete it. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">9. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When no longer needed, we will securely delete or anonymize your information.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="mt-4 p-6 bg-muted/50 rounded-lg">
                <p className="font-semibold">Rolora Spa</p>
                <p>2744 E Coast Hwy Suite 5</p>
                <p>Corona Del Mar, CA 92625</p>
                <p className="mt-2">Email: info@roloraspa.com</p>
                <p>Phone: (949) 742-5110</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
