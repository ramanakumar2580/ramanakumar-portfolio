import { NextResponse } from "next/server";

const query = `
query {
  user(login: "ramanakumar2580") {
    repositories(privacy: PUBLIC) {
      totalCount
    }

    contributionsCollection {
      contributionCalendar {
        totalContributions

        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            date
          }
        }
      }
    }
  }
}
`;

export async function GET() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json({ error: "GitHub API Error" }, { status: 500 });
  }

  const json = await res.json();

  return NextResponse.json(json.data.user);
}
