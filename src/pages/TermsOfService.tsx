import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const TermsOfService = () => {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="font-barlow font-extrabold text-4xl md:text-5xl text-primary mb-4 tracking-wide">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last Updated: January 12, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Rolora Spa website (roloraspa.com) and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and Rolora Spa ("we," "our," or "us") located at 2744 E Coast Hwy Suite 5, Corona Del Mar, CA 92625.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">2. Services Description</h2>
              <p>
                Rolora Spa provides facial treatments, body sculpting, body rolling, head spa services, and related wellness treatments. Our website allows you to view our services, book appointments, and learn about our offerings.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">3. Booking and Appointments</h2>
              
              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2">Scheduling</h3>
              <p>
                Appointments can be booked through our website or by contacting us directly. By booking an appointment, you agree to arrive on time and provide accurate contact information.
              </p>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-4">Cancellation Policy</h3>
              <p>
                We require at least 24 hours notice for appointment cancellations or rescheduling. Late cancellations or no-shows may be subject to a cancellation fee of up to 50% of the service price. Repeated no-shows may result in requiring a deposit for future bookings.
              </p>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-4">Late Arrivals</h3>
              <p>
                If you arrive late, your treatment time may be shortened to accommodate other scheduled appointments. The full service price will still apply.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">4. Pricing and Payment</h2>
              <p>
                All prices are listed in U.S. dollars and are subject to change without notice. Payment is due at the time of service unless otherwise arranged. We accept major credit cards and other payment methods as displayed at checkout.
              </p>
              <p className="mt-4">
                Promotional offers and packages are subject to specific terms and conditions and may not be combined with other offers unless explicitly stated.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">5. Health and Safety</h2>
              
              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2">Medical Disclosure</h3>
              <p>
                You must disclose any relevant health conditions, allergies, skin sensitivities, or medications that may affect your treatment. Failure to disclose such information may result in adverse reactions for which we cannot be held responsible.
              </p>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-4">Contraindications</h3>
              <p>
                Certain conditions may prevent you from receiving specific treatments. Our staff reserves the right to refuse or modify services if they determine it is not safe to proceed.
              </p>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-4">Results Disclaimer</h3>
              <p>
                Individual results may vary. While we strive to provide excellent treatments, we do not guarantee specific outcomes. Before and after photos on our website and social media represent individual experiences and are not guarantees of results.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">6. Intellectual Property</h2>
              <p>
                All content on our website, including text, images, logos, graphics, and software, is the property of Rolora Spa or our licensors and is protected by U.S. and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, or create derivative works from our content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">7. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Harass, abuse, or harm our staff or other clients</li>
                <li>Make false or fraudulent bookings</li>
              </ul>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">8. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ROLORA SPA AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR WEBSITE OR SERVICES.
              </p>
              <p className="mt-4">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Rolora Spa and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from your violation of these Terms or your use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">10. Dispute Resolution</h2>
              
              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2">Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-4">Arbitration</h3>
              <p>
                Any dispute arising from these Terms or our services shall be resolved through binding arbitration in Orange County, California, in accordance with the rules of the American Arbitration Association. You waive your right to participate in class actions or class arbitrations.
              </p>

              <h3 className="font-barlow font-semibold text-xl text-foreground mb-2 mt-4">Small Claims Exception</h3>
              <p>
                Either party may bring claims in small claims court if eligible.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">11. Gift Cards and Packages</h2>
              <p>
                Gift cards and prepaid packages are non-refundable and non-transferable unless required by applicable law. Gift cards do not expire. Packages must be used within the timeframe specified at purchase.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">12. Photography and Media</h2>
              <p>
                By receiving services at Rolora Spa, you may be asked to consent to before/after photography. Such consent is voluntary and separate from these Terms. If you provide consent, you grant us a non-exclusive license to use such images for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">13. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website with an updated "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">15. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Rolora Spa regarding your use of our website and services.
              </p>
            </section>

            <section>
              <h2 className="font-barlow font-bold text-2xl text-foreground mb-4">16. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
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

export default TermsOfService;
