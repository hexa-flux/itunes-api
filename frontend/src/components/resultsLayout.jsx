import React from "react";
import { useCallback } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import item-kind renderers
import { MovieItem, TVShowItem, PodcastItem, MusicItem, AudiobookItem, SoftwareItem, DefaultItem } from "./itemRenderers";
import { safeHttpUrl, artworkWithSize } from "../utilities/utilities";

// Pass data.results into this component
export default function ResultsLayout({ results = [], addToFavourites }) {
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

  // stable handler so children won't receive a new function each render
  const handleAddToFavourites = useCallback(
    (item) => {
      if (!item) return;
      addToFavourites(item);
    },
    [addToFavourites],
  );

  const renderItem = useCallback((item, idx) => {
      // Choose renderer based on item kind
      const typeKey = item.kind ?? item.wrapperType ?? item.entity ?? "unknown";
      const Renderer = renderers[typeKey] ?? DefaultItem;

      // Set thumbnail resolution
      const thumbnail = artworkWithSize(item.artworkUrl100, 400)

      // Choose trackViewUrl if present and valid, otherwise try collectionViewUrl.
      const preferredUrl = item.trackViewUrl ?? item.collectionViewUrl ?? null;
      const safeUrl = safeHttpUrl(preferredUrl);

      // Wrap the content in the shared card frame and return
      return (
        <Col key={item.trackId ?? item.collectionId ?? idx}>
          <Card className="h-100 product-card">
            {/* Lazy loading is used to reduce initial load */}
            {item.artworkUrl100 && (
              <Card.Img
                variant="top"
                src={thumbnail}
                alt={item.trackName}
                style={{ objectFit: "cover", height: 220 }}
                loading="lazy"
              />
            )}
            <Card.Body>
              {/* Build the inner content by invoking the chosen renderer */}
              <Renderer item={item} />
              {/* 
              Row for controls.
              Using d-flex + justify-content-between so left and right groups align.
              */}
              <div className="d-flex justify-content-between align-items-center mt-2">
                {/* LEFT SIDE */}
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleAddToFavourites(item)}
                    aria-label={`Add ${item.trackName ?? "item"} to favourites`}
                  >
                    Favourite
                  </Button>
                </div>
                {/* RIGHT SIDE */}
                <div>
                  {/* Open iTunes in new window */}
                  <Button
                    variant="secondary"
                    size="sm"
                    href={safeUrl || undefined}
                    target={safeUrl ? "_blank" : undefined}
                    rel={safeUrl ? "noopener noreferrer" : undefined}
                    aria-label={
                      safeUrl
                        ? `View ${item.trackName ?? "item"} on iTunes`
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
    },
    [renderers, handleAddToFavourites]); // renderItem memoized to avoid recreating on each render if you pass it directly to map

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
