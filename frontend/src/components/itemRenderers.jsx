import React from "react";
import Card from "react-bootstrap/Card";

export function MovieItem({ item }) {
  return (
    <>
      <Card.Title>{item.trackName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.artistName}</Card.Subtitle>
      <Card.Text>{item.longDescription}</Card.Text>
    </>
  );
}

export function PodcastItem({ item }) {
  return (
    <>
      <Card.Title>{item.collectionName ?? item.trackName}</Card.Title>
      <Card.Text>Podcast by {item.artistName}</Card.Text>
    </>
  );
}

export function DefaultItem({ item }) {
  return (
    <div>
      <strong>{item.trackName ?? item.collectionName ?? "Unknown"}</strong>
    </div>
  );
}