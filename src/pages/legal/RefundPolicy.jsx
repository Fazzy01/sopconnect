import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function RefundPolicy() {
  return (
    <LegalPageTemplate
      title="Refund & Cancellation Policy"
      updated="Placeholder — pending legal review"
      sections={[
        {
          heading: "Training programmes",
          body: [
            "Cancellation and refund terms for paid training programmes will be confirmed at the time of booking, including any notice period required for a full or partial refund.",
          ],
        },
        {
          heading: "Events",
          body: [
            "Ticketed events may carry their own refund terms, stated on the event's registration page. If SOPConnect cancels or postpones an event, registered attendees will be offered a refund or transfer.",
          ],
        },
        {
          heading: "How to request a refund",
          body: [
            "To request a cancellation or refund, contact us with your booking details using the information on our Contact page.",
          ],
        },
      ]}
    />
  );
}
