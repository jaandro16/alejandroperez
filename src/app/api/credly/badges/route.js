import { NextResponse } from 'next/server';

const CREDLY_URL =
  'https://www.credly.com/users/alejandro-perez.d37730c8/badges.json';

function pickIssuer(badge) {
  return (
    badge?.issuer?.name ||
    badge?.badge_template?.issuer?.name ||
    badge?.badge_template?.issuer_entities?.[0]?.entity?.name ||
    badge?.badge_template?.issuer_entities?.[0]?.name ||
    badge?.badge_template?.issuer?.summary?.name ||
    ''
  );
}

function extractSkills(badge) {
  const skills =
    badge?.badge_template?.skills ||
    badge?.skills ||
    badge?.skill_tags ||
    [];
  
  return skills
    .map((s) => s?.name || s?.skill?.name || s)
    .filter(Boolean)
    .slice(0, 4);
}

function normalizeBadge(badge, index) {
  const name = badge?.badge_template?.name || badge?.name || badge?.title || '';
  const issuer = pickIssuer(badge);
  const badgeImage =
    badge?.badge_template?.image_url ||
    badge?.image_url ||
    badge?.badge_image_url ||
    '';
  const badgeId = badge?.id || '';
  const credlyUrl = badgeId 
    ? `https://www.credly.com/badges/${badgeId}`
    : '';
  const issuedAt =
    badge?.issued_at || badge?.issued_on || badge?.created_at || '';
  const date = issuedAt ? new Date(issuedAt).getFullYear().toString() : '';
  const skills = extractSkills(badge);

  return {
    id: badgeId || `${name}-${index}`,
    name,
    issuer,
    badgeImage,
    credlyUrl,
    date,
    skills,
  };
}

export async function GET() {
  try {
    const res = await fetch(CREDLY_URL, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch Credly data.' },
        { status: 502 },
      );
    }

    const data = await res.json();
    const rawBadges = Array.isArray(data)
      ? data
      : data?.data || data?.badges || data?.items || [];

    const badges = rawBadges
      .map(normalizeBadge)
      .filter((b) => b.name && b.badgeImage);

    return NextResponse.json({ badges });
  } catch {
    return NextResponse.json(
      { error: 'Unexpected error.' },
      { status: 500 },
    );
  }
}