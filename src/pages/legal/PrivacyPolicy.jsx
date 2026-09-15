import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function PrivacyPolicy() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      updated="Placeholder — pending legal review"
      sections={[
        {
          heading: "Introduction",
          body: [
            "SOPConnect Consultancy Limited ('SOPConnect', 'we', 'us') is committed to protecting the privacy of everyone who uses this website or our services. This policy explains what information we collect, why, and how it is handled.",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly, such as your name, email address, phone number and any details submitted through enquiry, registration or partnership forms.",
            "We may also collect limited technical information (such as browser type and pages visited) to help us understand how the website is used.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use the information you provide to respond to enquiries, deliver training and events you register for, and share relevant updates where you've agreed to receive them. We do not sell your personal data.",
          ],
        },
        {
          heading: "How long we keep information",
          body: [
            "We retain personal data only for as long as necessary to fulfil the purpose it was collected for, or to meet legal and accounting requirements.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal data. To exercise these rights, contact us using the details on our Contact page.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy can be sent to info@sopconnectconsultltd.com.",
          ],
        },
      ]}
    />
  );
}
