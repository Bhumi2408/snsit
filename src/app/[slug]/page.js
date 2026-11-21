import { notFound } from "next/navigation";
import { getProductPage, productPages } from "@/data/productPages";

export const dynamicParams = false;

export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getProductPage(slug);
  return page ? { title: page.title } : {};
}

function Column({ col }) {
  const filled = col.image || col.video;
  return (
    <div className={`pp-col${filled ? " is-filled" : ""}${col.center ? " is-center" : ""}`} style={{ "--col-width": col.width }}>
      {col.image && (
        <div className="pp-image">
          <img src={col.image} alt="" loading="lazy" />
        </div>
      )}
      {col.video && (
        <div className="pp-video" style={{ "--video-aspect-ratio": col.ratio }}>
          <video src={col.video} controls preload="metadata" muted controlsList="nodownload" />
        </div>
      )}
    </div>
  );
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const page = getProductPage(slug);
  if (!page) notFound();

  return (
    <main className="product-page">
      <section className="pp-banner">
        <div className="pp-boxed">
          <h2 className="heading">{page.heading}</h2>
        </div>
      </section>

      {page.sections.map((section, i) =>
        section.type === "catalog" ? (
          section.images.map((src, j) => (
            <section
              className={`pp-catalog${j === 0 ? " is-first" : ""}${j === section.images.length - 1 ? " is-last" : ""}`}
              key={`${i}-${src}`}
            >
              <div className="pp-boxed">
                <div className="pp-catalog-col">
                  <div className="pp-image">
                    <img src={src} alt="" loading={j === 0 ? "eager" : "lazy"} />
                  </div>
                </div>
              </div>
            </section>
          ))
        ) : (
          <section className="pp-row" key={i}>
            <div className="pp-boxed pp-cols">
              {section.cols.map((col, j) => (
                <Column col={col} key={j} />
              ))}
            </div>
          </section>
        )
      )}
    </main>
  );
}
