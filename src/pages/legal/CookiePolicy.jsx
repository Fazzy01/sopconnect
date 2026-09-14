import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function CookiePolicy() {
  return (
    <LegalPageTemplate
      title="Cookie Policy"
      updated="Placeholder — pending legal review"
      sections={[
        {
          heading: "What cookies are",
          body: [
            "Cookies are small text files stored on your device that help websites function and help us understand how the site is used.",
          ],
        },
        {
          heading: "Cookies we use",
          body: [
            "Essential cookies: required for the website to function correctly.",
            "Analytics cookies: help us understand how visitors use the site, so we can improve it.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "You can control or delete cookies through your browser settings at any time. Disabling certain cookies may affect how parts of the website function.",
          ],
        },
      ]}
    />
  );
}
