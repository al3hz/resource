"use client";
import youtube from "../../public/imagenes/iconos/Redes/youtube.png";
import lastFm from "../../public/imagenes/iconos/Redes/lastfm.png";
import twitter from "../../public/imagenes/iconos/Redes/twitter.png";
import tiktok from "../../public/imagenes/iconos/Redes/tik-tok.png";
import reddit from "../../public/imagenes/iconos/Redes/reddit.png";
import rym from "../../public/imagenes/iconos/Redes/rym.png";
import steam from "../../public/imagenes/iconos/Redes/steam.png";
import spotify from "../../public/imagenes/iconos/Redes/spotify.png";
import soundcloud from "../../public/imagenes/iconos/Redes/soundcloud.png";
import { Container, Row, Col } from "reactstrap";
import Button from "./button";

export default function Links() {
  return (
    <Container className="text-center mt-3">
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4" sm="7">
          <Button imgPath={youtube} link="https://www.youtube.com/channel/UCPXZj9j1O3Tzhh4G_otGAOQ">
            YouTube
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4" sm="7">
          <Button imgPath={lastFm} link="https://www.last.fm/user/Dassault87">Last.fm</Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4" sm="7">
          <Button imgPath={youtube} link="https://www.youtube.com/channel/UCMVhx87ydQDDlROUzv7EZ8g">
            Second Channel YT
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4 " sm="7">
          <Button imgPath={twitter} link="https://twitter.com/Overlain_0">Twitter/X</Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4" sm="7">
          <Button imgPath={tiktok} link="https://www.tiktok.com/@overl4in">TikTok</Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4" sm="7">
          <Button imgPath={reddit} link="https://www.reddit.com/user/Dassault87">Reddit</Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4" sm="7">
          <Button imgPath={rym} link="https://rateyourmusic.com/~Dassault87">RYM</Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4" sm="7">
          <Button imgPath={steam} link="https://steamcommunity.com/id/overlain_01/">
            Steam
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4" sm="7">
          <Button imgPath={spotify} link="https://open.spotify.com/user/zkwytqvsodsikzrr6z9gme46d?si=1a32a6b6cd1147b3">
           Spotify
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 mx-auto mt-4 mb-5" sm="7">
          <Button imgPath={soundcloud} link="https://soundcloud.com/0verlain">Soundcloud</Button>
        </Col>
      </Row>
    </Container>
  );
}
