type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Strukturierte Daten (schema.org) für Suchmaschinen */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // «<» escapen, damit kein </script> im Inhalt das Tag beenden kann
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
