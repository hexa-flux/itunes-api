import React from "react";
import { Card, Badge } from "react-bootstrap/";

// Import helpers
import {
  getYearFromIso,
  isAtOrAbove,
  isExplicit,
  formatDuration,
  formatTrackTime,
} from "../utilities/utilities";

export function MovieItem({ item }) {
  const releaseYear = React.useMemo(
    () => getYearFromIso(item?.releaseDate),
    [item?.releaseDate],
  );

  const showRating = isAtOrAbove(item?.contentAdvisoryRating);

  const duration = formatDuration(item?.trackTimeMillis);

  return (
    <>
      <Card.Title>{item.trackName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {/* Rating badge shown only if M or above */}
        {showRating && (
          <Badge
            bg="danger"
            className="me-2"
            aria-label={`Content rating ${item.contentAdvisoryRating}`}
          >
            {item.contentAdvisoryRating}
          </Badge>
        )}
        {duration} · {item.primaryGenreName} · {releaseYear}
      </Card.Subtitle>
    </>
  );
}

export function TVShowItem({ item }) {
  const releaseYear = React.useMemo(
    () => getYearFromIso(item?.releaseDate),
    [item?.releaseDate],
  );

  const showRating = isAtOrAbove(item?.contentAdvisoryRating);

  const duration = formatDuration(item?.trackTimeMillis);

  return (
    <>
      <Card.Title>{item.trackName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {showRating && (
          <Badge
            bg="danger"
            className="me-2"
            aria-label={`Content rating ${item.contentAdvisoryRating}`}
          >
            {item.contentAdvisoryRating}
          </Badge>
        )}
        {item.collectionName}, Episode {item.trackNumber} <br />
        {duration} · {item.primaryGenreName} · {releaseYear}
      </Card.Subtitle>
    </>
  );
}

export function PodcastItem({ item }) {
  const releaseYear = React.useMemo(
    () => getYearFromIso(item?.releaseDate),
    [item?.releaseDate],
  );

  // Apple music/podcast field is `trackExplicitness` (values: 'explicit', 'notExplicit', 'cleaned')
  const showExplicit = isExplicit(item?.trackExplicitness);

  return (
    <>
      <Card.Title>{item.collectionName ?? item.trackName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {showExplicit && (
          <Badge bg="danger" className="me-2" aria-label={`Explicit`}>
            Explicit
          </Badge>
        )}
        {item.trackCount || "-"} episodes · {item.primaryGenreName} ·{" "}
        {releaseYear}
      </Card.Subtitle>
      <Card.Text>Podcast by {item.artistName}</Card.Text>
    </>
  );
}

export function MusicItem({ item }) {
  const releaseYear = React.useMemo(
    () => getYearFromIso(item?.releaseDate),
    [item?.releaseDate],
  );

  const showExplicit = isExplicit(item?.trackExplicitness);

  const duration = formatTrackTime(item.trackTimeMillis);

  return (
    <>
      <Card.Title>{item.trackName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {showExplicit && (
          <Badge bg="danger" className="me-2" aria-label={`Explicit`}>
            Explicit
          </Badge>
        )}
        {item.artistName} <br />
        {item?.collectionName || "Single"} <br />
        {duration} · {item.primaryGenreName} · {releaseYear}
      </Card.Subtitle>
    </>
  );
}

export function AudiobookItem({ item }) {
  const releaseYear = React.useMemo(
    () => getYearFromIso(item?.releaseDate),
    [item?.releaseDate],
  );

  const showExplicit = isExplicit(item?.collectionExplicitness);

  const duration = formatDuration(item?.trackTimeMillis);

  return (
    <>
      <Card.Title>{item.collectionName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {showExplicit && (
          <Badge bg="danger" className="me-2" aria-label={`Explicit`}>
            Explicit
          </Badge>
        )}
        {item.artistName} · {item.primaryGenreName} · {releaseYear} <br />
        {duration}
      </Card.Subtitle>
    </>
  );
}

export function SoftwareItem({ item }) {
  const releaseYear = React.useMemo(
    () => getYearFromIso(item?.releaseDate),
    [item?.releaseDate],
  );

  return (
    <>
      <Card.Title>{item.trackName}</Card.Title>
      <Card.Subtitle>
        {item.sellerName} · {item.primaryGenreName}
      </Card.Subtitle>
    </>
  );
}

export function DefaultItem({ item }) {
  const releaseYear = React.useMemo(
    () => getYearFromIso(item?.releaseDate),
    [item?.releaseDate],
  );

  return (
    <div>
      <strong>{item.trackName ?? item.collectionName ?? "Unknown"}</strong>
      {releaseYear !== "—" && (
        <span style={{ marginLeft: 8 }}>{releaseYear}</span>
      )}
    </div>
  );
}
