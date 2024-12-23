import React from "react";
import { fetchAlbumDetails, AlbumDetails } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import "./page.css";

type AlbumPageProps = {
  params: {
    id: string;
  };
};

/**
 * This is a server side rendered page that fetches album details based on the album ID.
 * Unable to use styled-components because it is not supported in the server side rendering.
 */
export default async function AlbumPage({ params }: AlbumPageProps) {
  const { id } = await params;
  const albumDetails: AlbumDetails = await fetchAlbumDetails(id);
  const {
    title,
    artist,
    imageUrl,
    url,
    releaseDate,
    genre,
    price,
    description,
  } = albumDetails;

  const availableDescription = description || "No description available.";
  const formattedReleaseDate = new Date(releaseDate).toLocaleDateString();

  return (
    <div
      className="pageContainer"
      role="main"
      aria-labelledby="album-details-title"
    >
      <h1 className="albumTitle" id="album-details-title">
        {title}
      </h1>

      {/* Album Image */}
      <div className="albumImageContainer">
        <Image
          src={imageUrl}
          alt={`Cover image of the album "${title}" by ${artist}`}
          width={170}
          height={170}
          style={{ borderRadius: "8px" }}
        />
      </div>

      {/* Album Information */}
      <section className="albumInfoSection" aria-labelledby="album-info">
        <h2 className="sectionHeading" id="album-info">
          Album Information
        </h2>
        <p className="infoText">
          <strong>Artist:</strong> {artist}
        </p>
        <p className="infoText">
          <strong>Release Date:</strong> {formattedReleaseDate}
        </p>
        <p className="infoText">
          <strong>Genre:</strong> {genre}
        </p>
        <p className="infoText">
          <strong>Price:</strong> ${price}
        </p>
        <p className="infoText">
          <strong>Description:</strong> {availableDescription}
        </p>
      </section>

      <div className="buttonsContainer">
        {/* External Link to iTunes */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View "${title}" on iTunes`}
          className="button exploreLink"
        >
          View on iTunes
        </a>

        {/* Link to go back to the home page */}
        <Link href="/" className="button backToHomeLink">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
