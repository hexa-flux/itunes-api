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
      <Card.Title>
        {item.trackName} {" "}
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
      </Card.Title>
      <Card.Subtitle className="subtitle">
        <p>
          Movie · {item.primaryGenreName} · {releaseYear}
        </p>
        <p>{duration}</p>
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
      <Card.Title>
        {item.trackName} {" "}
        {showRating && (
          <Badge
            bg="danger"
            className="me-2"
            aria-label={`Content rating ${item.contentAdvisoryRating}`}
          >
            {item.contentAdvisoryRating}
          </Badge>
        )}
        </Card.Title>
      <Card.Subtitle className="subtitle">
          <p>{item.collectionName}, Episode {item.trackNumber}</p>
          <p>Show · {item.primaryGenreName} · {releaseYear}</p>
          <p>{duration}</p>
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
      <Card.Title>
        {item.collectionName ?? item.trackName} {" "}
        {showExplicit && (
          <Badge bg="danger" className="me-2" aria-label={`Explicit`}>
            Explicit
          </Badge>
        )}
        </Card.Title>
      <Card.Subtitle className="subtitle">
          <p>Podcast · {item.primaryGenreName} · {releaseYear}</p>
          <p>{item.trackCount || "-"} episodes</p>
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
      <Card.Title>
        {item.trackName} {" "}
        {showExplicit && (
          <Badge bg="danger" className="me-2" aria-label={`Explicit`}>
            Explicit
          </Badge>
        )}
        </Card.Title>
      <Card.Subtitle className="subtitle">
          <p>{item.artistName}</p>
          <p>{item?.collectionName || "Single"}</p>
          <p>Music · {item.primaryGenreName} · {releaseYear}</p>
          <p>{duration}</p>
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
      <Card.Title>
        {item.collectionName} {" "}
        {showExplicit && (
          <Badge bg="danger" className="me-2" aria-label={`Explicit`}>
            Explicit
          </Badge>
        )}
        </Card.Title>
      <Card.Subtitle className="subtitle">
          <p>Book by {item.artistName} · {item.primaryGenreName} · {releaseYear}</p>
          <p>{duration}</p>
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
      <Card.Subtitle className="subtitle">
        Software · {item.sellerName} · {item.primaryGenreName}
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
        <span className="subtitle">{releaseYear}</span>
      )}
    </div>
  );
}
