import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function Accessibility() {
  return (
    <LegalPageTemplate
      title="Accessibility Statement"
      updated="Placeholder — pending legal review"
      sections={[
        {
          heading: "Our commitment",
          body: [
            "SOPConnect wants this website to be usable by as many people as possible, including people with visual, hearing, motor or cognitive disabilities.",
          ],
        },
        {
          heading: "What we do",
          body: [
            "We aim for clear colour contrast, readable font sizes, visible keyboard focus, and layouts that adapt to different screen sizes and assistive technologies.",
          ],
        },
        {
          heading: "Feedback",
          body: [
            "If you find any part of this website difficult to use, please let us know using the details on our Contact page so we can look into it.",
          ],
        },
      ]}
    />
  );
}
