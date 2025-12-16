import { InfiniteTicker } from "./InfiniteTicker";

const technologies = [
  "React", "Go", "Java", "TypeScript", "Node.js", "GCP", "Azure", 
  "Kubernetes", "Docker", "PostgreSQL", "Redis", "Kafka", "Spring Boot",
  "FastAPI", "React Native", "Terraform", "GraphQL", "gRPC"
];

export const TechTicker = () => {
  return (
    <section className="relative">
      <InfiniteTicker items={technologies} />
    </section>
  );
};
