import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import item-kind renderers
import {
  MovieItem,
  TVShowItem,
  PodcastItem,
  MusicItem,
  AudiobookItem,
  SoftwareItem,
  DefaultItem,
} from "./itemRenderers";
import {
  getItemId,
  safeHttpUrl,
  artworkWithSize,
} from "../utilities/utilities";

import "./resultsFormat.css";

// Pass data.results into this component
export default function ResultsLayout({
  results = [],
  favouritesHandler,
  isFavourited,
}) {
  // Define item renderers
  const renderers = {
    movie: MovieItem,
    "feature-movie": MovieItem,
    shortFilm: MovieItem,
    tvShow: TVShowItem,
    "tv-episode": TVShowItem,
    podcast: PodcastItem,
    "podcast-episode": PodcastItem,
    music: MusicItem,
    song: MusicItem,
    musicVideo: MusicItem,
    "music-video": MusicItem,
    audiobook: AudiobookItem,
    software: SoftwareItem,
    ebook: AudiobookItem,
    book: AudiobookItem,
    // fallback for unknown kinds
    unknown: DefaultItem,
  };

  const renderItem = (item, idx) => {
    // normalized id with fallback
    const id = getItemId(item) ?? `idx-${idx}`;

    // name fallbacks for accessible labels and alt text
    const name =
      item.trackName ?? item.collectionName ?? item.artistName ?? "item";

    // Choose renderer based on item kind
    const typeKey = item.kind ?? item.wrapperType ?? item.entity ?? "unknown";
    const Renderer = renderers[typeKey] ?? DefaultItem;

    // Set candidate resolutions
    const src200 = artworkWithSize(item.artworkUrl100, 200);
    const src400 = artworkWithSize(item.artworkUrl100, 400);
    const src800 = artworkWithSize(item.artworkUrl100, 800);

    // Check if item is favourited
    const isFav = isFavourited ? isFavourited(item) : false;

    // Choose trackViewUrl if present and valid, otherwise try collectionViewUrl.
    const preferredUrl = item.trackViewUrl ?? item.collectionViewUrl ?? null;
    const safeUrl = safeHttpUrl(preferredUrl);

    // Wrap the content in the shared card frame and return
    return (
      <Col key={id}>
        <Card className="h-100 product-card">
          {/* Lazy loading is used to reduce initial load */}
          {/* With responsive resolution selection */}
          {item.artworkUrl100 && (
            <div className="thumb">
              <img
                src={src400}
                srcSet={`${src200} 200w, ${src400} 400w, ${src800} 800w`}
                sizes="(max-width: 768px) 200px, (max-width: 992px) 400px, 800px"
                alt={name}
                loading="lazy"
              />
            </div>
          )}
          <Card.Body className="d-flex flex-column">
            {/* Build the inner content by invoking the chosen renderer */}
            <Renderer item={item} />
            {/* 
                Row for controls.
                Using d-flex + justify-content-between so left and right groups align.
                */}
            <div className="d-flex justify-content-between align-items-center mt-2 mt-auto gap-3">
              {/* LEFT SIDE */}
              <div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => favouritesHandler(item)}
                  aria-pressed={isFav}
                  aria-label={
                    isFav
                      ? `Remove ${name} from favourites`
                      : `Add ${name} to favourites`
                  }
                >
                  {isFav ? "Remove favourite" : "Add favourite"}
                </Button>
              </div>
              {/* RIGHT SIDE */}
              <div>
                {/* Open iTunes in new window */}
                <Button
                  variant="primary"
                  size="sm"
                  href={safeUrl || undefined}
                  target={safeUrl ? "_blank" : undefined}
                  rel={safeUrl ? "noopener noreferrer" : undefined}
                  aria-label={
                    safeUrl
                      ? `View ${name ?? "item"} on iTunes`
                      : undefined
                  }
                  disabled={!safeUrl}
                >
                  View on iTunes
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  if (!results.length) return <p>No results found!</p>;

  return (
    <Container className="py-4">
      {/* 
            Row: react-bootstrap responsive props control how many columns per row.
              xs={1}  -> 1 column on extra-small screens
              sm={2}  -> 2 columns on small screens
              md={3}  -> 3 columns on medium screens
              lg={4}  -> 4 columns on large screens
            className="g-4": bootstrap gap utility (gutters) for rows/columns
          */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {results.map(renderItem)}
      </Row>
    </Container>
  );
}
