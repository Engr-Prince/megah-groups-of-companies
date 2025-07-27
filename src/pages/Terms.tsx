import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Terms & <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">Privacy</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our commitment to transparency and protecting your rights
          </p>
        </div>
      </section>

      {/* Terms & Privacy Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Terms of Service */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl megah-gradient-text">Terms & Conditions</CardTitle>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground">
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using the services of MEGAH Group of Companies ("MEGAH", "we", "us", or "our"), 
                    you accept and agree to be bound by the terms and provision of this agreement. If you do not 
                    agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Service Description</h3>
                  <p>
                    MEGAH provides technology services including but not limited to web and mobile application 
                    development, startup consulting, document processing, and the MegaConnect job platform. 
                    We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Client Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide accurate and complete information for all service requests</li>
                    <li>Respond promptly to requests for information or feedback</li>
                    <li>Make timely payments according to agreed terms</li>
                    <li>Respect intellectual property rights of MEGAH and third parties</li>
                    <li>Use our services in compliance with applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Payment Terms</h3>
                  <p>
                    Payment terms vary by service type and are specified in individual project agreements. 
                    Generally, we require a deposit before starting work, with remaining payments due according 
                    to project milestones. Late payments may incur additional fees. All prices are in USD unless 
                    otherwise specified.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h3>
                  <p>
                    Upon full payment, clients receive rights to custom-developed work as specified in project 
                    agreements. MEGAH retains rights to general methodologies, processes, and any pre-existing 
                    intellectual property. We reserve the right to showcase completed work in our portfolio 
                    unless otherwise agreed in writing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h3>
                  <p>
                    MEGAH's liability is limited to the amount paid for the specific service in question. 
                    We are not liable for indirect, incidental, special, or consequential damages. Our services 
                    are provided "as is" without warranties, though we strive for excellence in all deliverables.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Termination</h3>
                  <p>
                    Either party may terminate services with written notice. Upon termination, payment is due 
                    for all work completed to date. MEGAH will provide all completed deliverables upon receipt 
                    of final payment.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">8. Governing Law</h3>
                  <p>
                    These terms are governed by the laws of Cameroon. Any disputes will be resolved through 
                    arbitration in Douala, Cameroon, or through competent courts in Cameroon.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-3xl megah-gradient-text">Privacy Policy</CardTitle>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground">
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h3>
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Contact information (name, email, phone number)</li>
                    <li>Business information (company name, industry, project details)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communication records (emails, meeting notes, project communications)</li>
                    <li>Website usage data (through cookies and analytics tools)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
                  <p>We use collected information to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about projects and services</li>
                    <li>Process payments and manage accounts</li>
                    <li>Send relevant business updates and marketing communications</li>
                    <li>Comply with legal obligations</li>
                    <li>Analyze usage patterns to improve our website and services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h3>
                  <p>
                    We do not sell, trade, or rent your personal information. We may share information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Service providers who assist in our operations (under confidentiality agreements)</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners when you explicitly consent</li>
                    <li>Successors in case of business transfer (with notice to you)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your information, 
                    including encryption, secure data transmission, and restricted access controls. However, 
                    no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Port your data to another service provider</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Cookies and Tracking</h3>
                  <p>
                    We use cookies and similar technologies to enhance your experience, analyze usage, and 
                    improve our services. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. International Transfers</h3>
                  <p>
                    Your information may be transferred to and processed in countries other than Cameroon. 
                    We ensure appropriate safeguards are in place for such transfers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h3>
                  <p>
                    For questions about these terms or privacy practices, contact us at:
                  </p>
                  <div className="mt-2">
                    <p><strong>Email:</strong> privacy@megahgroup.com</p>
                    <p><strong>Address:</strong> MEGAH Group of Companies, Douala, Cameroon</p>
                    <p><strong>Phone:</strong> +237 XXX XXX XXX</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="border-2 border-megah-blue/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold megah-gradient-text mb-4">Policy Updates</h3>
              <p className="text-muted-foreground">
                We may update these policies periodically. We will notify you of significant changes via 
                email or through our website. Continued use of our services after changes constitutes 
                acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;