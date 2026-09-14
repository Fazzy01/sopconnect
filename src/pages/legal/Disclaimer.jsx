import LegalPageTemplate from "../../components/LegalPageTemplate";
import { fullDisclaimer } from "../../data/content";

export default function Disclaimer() {
  return (
    <LegalPageTemplate
      title="Service Disclaimer"
      updated="Placeholder — pending legal review"
      sections={[
        {
          heading: "Nature of our services",
          body: [fullDisclaimer],
        },
        {
          heading: "No guaranteed outcomes",
          body: [
            "References to career development, training, educational support and events describe the support we provide, not a guaranteed result. Individual outcomes depend on many factors outside SOPConnect's control.",
          ],
        },
        {
          heading: "Accreditation",
          body: [
            "Any course described as accredited carries genuine, verifiable accreditation. Programmes without formal accreditation are described as training, workshops, masterclasses or professional-development courses.",
          ],
        },
        {
          heading: "Immigration advice",
          body: [
            "SOPConnect does not provide regulated immigration advice. Individuals requiring immigration advice should consult an appropriately regulated immigration adviser or solicitor.",
          ],
        },
      ]}
    />
  );
}
