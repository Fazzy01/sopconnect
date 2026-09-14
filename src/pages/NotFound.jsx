import Container from "../components/Container";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <span className="font-display text-6xl text-secondary-dark">404</span>
      <h1 className="mt-4 font-display text-3xl font-medium text-primary">
        This page doesn't exist
      </h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
        The page you're looking for may have moved or no longer exists.
        Head back to the homepage or explore our services.
      </p>
      <div className="mt-8 flex gap-4">
        <Button to="/" variant="primary" withArrow>
          Back to home
        </Button>
        <Button to="/services" variant="outline">
          View services
        </Button>
      </div>
    </Container>
  );
}
