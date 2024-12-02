import { ImageResponse } from "next/og";
import projectsData from "@/data/projects";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pId = searchParams.get("ida");

  if (pId) {
    const project = projectsData.filter((project) => project.id === pId);
    const logoData = await readFile(
      join(process.cwd(), "\\public\\" + project[0].imgs[0].img)
    );
    const logoSrc = Uint8Array.from(logoData).buffer;
    return new ImageResponse(
      <img src={logoSrc} />,

      {
        width: 1200,
        height: 630,
      }
    );
  }
  if (!pId) {
    return new ImageResponse(
      (
        <img
          width="1200"
          height="1023"
          src={`https://vglomomotvy8urx2.public.blob.vercel-storage.com/mySite/Mohammed-4XGvjemcA4ohtKvsnUvGsUxdmuvkLa.png`}
        />
      ),

      {
        width: 1200,
        height: 1023,
      }
    );
  }
}
