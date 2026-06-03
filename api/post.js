const { makeNewOne } = require("../poem");

export default async function handler(req, res) {
  const poem = makeNewOne();

  const response = await fetch(`${process.env.MASTODON_URL}/api/v1/statuses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MASTODON_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: poem }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Mastodon API error:", text);
    return res.status(500).json({ error: text });
  }

  console.log("Posted:", poem);
  return res.status(200).json({ ok: true, poem });
}
