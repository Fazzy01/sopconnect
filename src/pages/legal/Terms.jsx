import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function Terms() {
  return (
    <LegalPageTemplate
      title="Terms & Conditions"
      updated="Placeholder — pending legal review"
      sections={[
        {
          heading: "Using this website",
          body: [
            "By using this website, you agree to use it lawfully and not in a way that could damage, disable or impair SOPConnect's services or interfere with other users.",
          ],
        },
        {
          heading: "Our services",
          body: [
            "SOPConnect provides independent career-development, training, educational-support and event services as described on this website. We do not act as a recruitment agency, provide regulated immigration advice, or guarantee employment, admission, sponsorship or visa outcomes.",
          ],
        },
        {
          heading: "Bookings and registrations",
          body: [
            "Registering interest in a training programme or event does not guarantee a place. We will confirm availability, pricing and terms directly before any booking is finalised.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All content on this website, including text, graphics and branding, is owned by or licensed to SOPConnect Consultancy Limited and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "SOPConnect provides guidance and support in good faith but cannot guarantee specific outcomes from any service, including employment, admission, sponsorship or visa results.",
          ],
        },
      ]}
    />
  );
}
