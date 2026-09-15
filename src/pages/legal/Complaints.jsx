import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function Complaints() {
  return (
    <LegalPageTemplate
      title="Complaints Procedure"
      updated="Placeholder — pending legal review"
      sections={[
        {
          heading: "How to raise a complaint",
          body: [
            "If you're unhappy with any SOPConnect service, please contact us with details of your concern using the general enquiry form and select 'General Enquiry' as the category, or email info@sopconnectconsultltd.com.",
          ],
        },
        {
          heading: "What happens next",
          body: [
            "We aim to acknowledge complaints within two working days and provide a full response within ten working days. Where a complaint needs longer to investigate, we'll let you know and keep you updated.",
          ],
        },
        {
          heading: "If you're not satisfied",
          body: [
            "If you feel your complaint hasn't been resolved satisfactorily, you're welcome to ask for it to be reviewed by a senior member of the team.",
          ],
        },
      ]}
    />
  );
}
