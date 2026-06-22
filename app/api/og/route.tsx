/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

import projectsData from "@/data/projects";

export const runtime = "edge";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  try {
    if (!projectId) {
      const imageUrl = new URL("/assets/hero.jpg", req.url).toString();

      return new ImageResponse(
        <img
          src={imageUrl}
          alt="محمد عبدالعزيز الهويمل"
          style={{
            height: "100%",
            objectFit: "cover",
            width: "100%",
          }}
        />,
        {
          width: 1200,
          height: 630,
        }
      );
    }

    const project = projectsData.find((project) => project.id === projectId);

    if (!project) {
      return new Response("Project not found", { status: 404 });
    }

    const imageUrl = new URL(project.imgs[0].img, req.url).toString();

    return new ImageResponse(
      <img
        src={imageUrl}
        alt={project.Title}
        style={{
          height: "100%",
          objectFit: "cover",
          width: "100%",
        }}
      />,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    return new Response(`Failed to generate the OG image. Error ${message}`, {
      status: 500,
    });
  }
};
