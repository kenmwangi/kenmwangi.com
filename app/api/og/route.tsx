import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Route segment config
export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title") || "Ken Mwangi";
  const postContent = searchParams.get("content");

  const font = fetch(
    new URL("../../../public/fonts/Aeonik-Bold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontData = await font;

  //   Create an ImageResponse with dynamic content
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fcfdfe",
          color: "#131e2d",
          //   backgroundRepeat: "no-repeat",
          // backgroundImage: "url(http://localhost:3000/open-graph.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            marginLeft: 190,
            marginRight: 190,
            fontSize: 140,
            fontFamily: "Aeonik",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            // color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Aeonik",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
