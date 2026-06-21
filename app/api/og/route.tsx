/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

import projectsData from "@/data/projects";
import { ENV } from "@/lib/constant";

export const runtime = "edge";

const imageBlobFromUrl = async (url: URL | string) => {
  const response = await fetch(url.toString());
  const imageData = await response.arrayBuffer();

  return new Blob([imageData], {
    type: response.headers.get("content-type") ?? "image/jpeg",
  });
};

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  try {
    if (!projectId) {
      const imageData = await imageBlobFromUrl(
        new URL("./images/hero.jpg", import.meta.url)
      );

      return new ImageResponse(
        <img
          src={imageData}
          alt="Mohammed AlHuwimmel"
          style={{
            borderRadius: "50%",
          }}
        />,
        {
          width: 1200,
          height: 1023,
        }
      );
    }

    const project = projectsData.find((project) => project.id === projectId);

    if (!project) {
      return new Response("Project not found", { status: 404 });
    }

    const imageData = await imageBlobFromUrl(
      new URL(`${ENV.NEXT_PUBLIC_WEBSITE_URL}${project.imgs[0].img}`)
    );

    return new ImageResponse(<img src={imageData} alt={project.Title} />);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    return new Response(`Failed to generate the OG image. Error ${message}`, {
      status: 500,
    });
  }
};
